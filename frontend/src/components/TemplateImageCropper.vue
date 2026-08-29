<script setup lang="ts">
import { Image as ImageIcon, Maximize2, X } from "lucide-vue-next";
import { computed, nextTick, onUnmounted, ref } from "vue";

const props = defineProps<{ sourceUrl?: string }>();
const emit = defineEmits<{ selected: [file: File, previewUrl: string] }>();

const fileInput = ref<HTMLInputElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);
const open = ref(false);
const previewUrl = ref("");
const zoom = ref(1);
let image: HTMLImageElement | null = null;
let originalFile: File | null = null;
let sourceObjectUrl = "";
let outputObjectUrl = "";
let baseScale = 1;
let previousZoom = 1;
let offsetX = 0;
let offsetY = 0;
let dragging = false;
let pointerX = 0;
let pointerY = 0;
const cropRect = { x: 50, y: 85, width: 800, height: 450 };

const displayUrl = computed(() => previewUrl.value || props.sourceUrl || "");

function context2d(target: HTMLCanvasElement) {
  return target.getContext("2d")!;
}

function drawBlurredBackground(ctx: CanvasRenderingContext2D, target: HTMLCanvasElement, rect: typeof cropRect) {
  if (!image) return;
  const scale = Math.max(rect.width / image.naturalWidth, rect.height / image.naturalHeight) * 1.08;
  const width = image.naturalWidth * scale;
  const height = image.naturalHeight * scale;
  ctx.save();
  ctx.beginPath();
  ctx.rect(rect.x, rect.y, rect.width, rect.height);
  ctx.clip();
  ctx.filter = `blur(${Math.max(18, target.width * 0.022)}px)`;
  ctx.globalAlpha = 0.72;
  ctx.drawImage(image, rect.x + (rect.width - width) / 2, rect.y + (rect.height - height) / 2, width, height);
  ctx.restore();
}

function draw() {
  if (!image || !canvas.value) return;
  const target = canvas.value;
  const ctx = context2d(target);
  const scale = baseScale * zoom.value;
  ctx.fillStyle = "#202732";
  ctx.fillRect(0, 0, target.width, target.height);
  drawBlurredBackground(ctx, target, cropRect);
  ctx.drawImage(image, offsetX, offsetY, image.naturalWidth * scale, image.naturalHeight * scale);
  ctx.save();
  ctx.fillStyle = "rgba(8, 12, 18, 0.68)";
  ctx.fillRect(0, 0, target.width, cropRect.y);
  ctx.fillRect(0, cropRect.y + cropRect.height, target.width, target.height - cropRect.y - cropRect.height);
  ctx.fillRect(0, cropRect.y, cropRect.x, cropRect.height);
  ctx.fillRect(cropRect.x + cropRect.width, cropRect.y, target.width - cropRect.x - cropRect.width, cropRect.height);
  ctx.strokeStyle = "#f6c453";
  ctx.lineWidth = 4;
  ctx.setLineDash([14, 8]);
  ctx.strokeRect(cropRect.x, cropRect.y, cropRect.width, cropRect.height);
  ctx.setLineDash([]);
  ctx.fillStyle = "#f6c453";
  ctx.font = "600 16px sans-serif";
  ctx.fillText("最终展示区域 16:9", cropRect.x + 10, cropRect.y - 12);
  ctx.restore();
}

function resetPosition() {
  if (!image) return;
  zoom.value = 1;
  previousZoom = 1;
  baseScale = Math.min(cropRect.width / image.naturalWidth, cropRect.height / image.naturalHeight);
  offsetX = cropRect.x + (cropRect.width - image.naturalWidth * baseScale) / 2;
  offsetY = cropRect.y + (cropRect.height - image.naturalHeight * baseScale) / 2;
  draw();
}

function loadFile(file: File) {
  originalFile = file;
  if (sourceObjectUrl) URL.revokeObjectURL(sourceObjectUrl);
  sourceObjectUrl = URL.createObjectURL(file);
  image = new Image();
  image.onload = async () => {
    open.value = true;
    await nextTick();
    resetPosition();
  };
  image.onerror = () => window.alert("无法读取这张图片，请重新选择。");
  image.src = sourceObjectUrl;
}

function chooseFile(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) void nextTick(() => loadFile(file));
  (event.target as HTMLInputElement).value = "";
}

async function adjustCurrent() {
  if (originalFile) return loadFile(originalFile);
  if (!props.sourceUrl) return fileInput.value?.click();
  try {
    const response = await fetch(props.sourceUrl, { cache: "no-store" });
    if (!response.ok) throw new Error();
    const blob = await response.blob();
    loadFile(new File([blob], "template-image.jpg", { type: blob.type || "image/jpeg" }));
  } catch {
    window.alert("当前图片读取失败，请重新选择本地图片。");
  }
}

function updateZoom() {
  if (!image) return;
  const oldScale = baseScale * previousZoom;
  const newScale = baseScale * zoom.value;
  const centerX = offsetX + image.naturalWidth * oldScale / 2;
  const centerY = offsetY + image.naturalHeight * oldScale / 2;
  offsetX = centerX - image.naturalWidth * newScale / 2;
  offsetY = centerY - image.naturalHeight * newScale / 2;
  previousZoom = zoom.value;
  draw();
}

function pointerDown(event: PointerEvent) {
  if (!canvas.value) return;
  dragging = true;
  pointerX = event.clientX;
  pointerY = event.clientY;
  canvas.value.setPointerCapture(event.pointerId);
}

function pointerMove(event: PointerEvent) {
  if (!dragging || !canvas.value) return;
  const bounds = canvas.value.getBoundingClientRect();
  offsetX += (event.clientX - pointerX) * canvas.value.width / bounds.width;
  offsetY += (event.clientY - pointerY) * canvas.value.height / bounds.height;
  pointerX = event.clientX;
  pointerY = event.clientY;
  draw();
}

function pointerUp(event: PointerEvent) {
  dragging = false;
  canvas.value?.releasePointerCapture(event.pointerId);
}

function applyCrop() {
  if (!image || !originalFile) return;
  const output = document.createElement("canvas");
  output.width = 1280;
  output.height = 720;
  const ctx = context2d(output);
  const rect = { x: 0, y: 0, width: output.width, height: output.height };
  drawBlurredBackground(ctx, output, rect);
  const factor = output.width / cropRect.width;
  const scale = baseScale * zoom.value * factor;
  ctx.drawImage(
    image,
    (offsetX - cropRect.x) * factor,
    (offsetY - cropRect.y) * factor,
    image.naturalWidth * scale,
    image.naturalHeight * scale,
  );
  output.toBlob((blob) => {
    if (!blob || !originalFile) return;
    const name = originalFile.name.replace(/\.[^.]+$/, "") || "template-image";
    const file = new File([blob], `${name}-cropped.jpg`, { type: "image/jpeg" });
    if (outputObjectUrl) URL.revokeObjectURL(outputObjectUrl);
    outputObjectUrl = URL.createObjectURL(file);
    previewUrl.value = outputObjectUrl;
    originalFile = file;
    emit("selected", file, outputObjectUrl);
    open.value = false;
  }, "image/jpeg", 0.94);
}

onUnmounted(() => {
  if (sourceObjectUrl) URL.revokeObjectURL(sourceObjectUrl);
  if (outputObjectUrl) URL.revokeObjectURL(outputObjectUrl);
});
</script>

<template>
  <div class="template-crop-field">
    <div v-if="displayUrl" class="template-crop-preview">
      <img class="template-crop-blur" :src="displayUrl" alt="" />
      <img class="template-crop-main" :src="displayUrl" alt="模板展示图片预览" />
    </div>
    <div v-else class="template-crop-empty"><ImageIcon :size="28" /><span>尚未选择图片</span></div>
    <div class="template-crop-actions">
      <button type="button" class="ghost-action" @click="fileInput?.click()"><ImageIcon :size="15" />选择图片</button>
      <button v-if="displayUrl" type="button" class="ghost-action" @click="adjustCurrent"><Maximize2 :size="15" />调整裁剪</button>
    </div>
    <input ref="fileInput" hidden accept="image/*" type="file" @change="chooseFile" />
  </div>

  <Teleport to="body">
    <div v-if="open" class="template-crop-overlay">
      <section class="template-crop-dialog">
        <header><div><h2>调整模板展示图片</h2><p>拖动图片定位，可缩小并保留空白；空白区域会自动使用模糊背景填充。</p></div><button type="button" class="icon-button" @click="open = false"><X :size="18" /></button></header>
        <canvas ref="canvas" width="900" height="620" @pointerdown="pointerDown" @pointermove="pointerMove" @pointerup="pointerUp" @pointercancel="pointerUp" />
        <label class="template-crop-zoom"><span>图片缩放</span><input v-model.number="zoom" type="range" min="0.2" max="4" step="0.01" @input="updateZoom" /><strong>{{ zoom.toFixed(2) }}x</strong></label>
        <footer><button type="button" class="ghost-action" @click="resetPosition">重置位置</button><button type="button" class="ghost-action" @click="open = false">取消</button><button type="button" class="primary-action" @click="applyCrop">应用裁剪</button></footer>
      </section>
    </div>
  </Teleport>
</template>
