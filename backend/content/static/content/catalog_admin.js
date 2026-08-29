(function () {
  function setupSubcategorySelector() {
    const category = document.getElementById("id_category");
    const group = document.getElementById("id_style_group") || document.getElementById("id_group");
    if (!category || !group || !group.dataset.groupOptions) return;

    const optionsByCategory = JSON.parse(group.dataset.groupOptions);
    const refresh = function (preserveValue) {
      const previous = preserveValue ? group.value : "";
      const options = optionsByCategory[category.value] || {};
      const placeholder = new Option("请选择子分类", "");
      placeholder.disabled = true;
      group.replaceChildren(placeholder);
      Object.entries(options).forEach(function ([value, label]) {
        group.add(new Option(label, value, false, value === previous));
      });
      if (!Object.prototype.hasOwnProperty.call(options, previous)) group.value = "";
    };

    category.addEventListener("change", function () { refresh(false); });
    refresh(true);
  }

  function setupFeaturedImageFields() {
    const category = document.getElementById("id_category");
    if (!category || !document.querySelector(".field-original_image_file")) return;

    const singleImageRow = document.querySelector(".field-image_file");
    const originalImageRow = document.querySelector(".field-original_image_file");
    const resultImageRow = document.querySelector(".field-result_image_file");
    const refresh = function () {
      const pairMode = category.value === "color-edit" || category.value === "image-to-image";
      const singleMode = category.value === "text-to-image";
      if (singleImageRow) singleImageRow.hidden = !singleMode;
      if (originalImageRow) originalImageRow.hidden = !pairMode;
      if (resultImageRow) resultImageRow.hidden = !pairMode;
    };
    category.addEventListener("change", refresh);
    refresh();
  }

  function parseRatio(value) {
    const parts = String(value || "16:9").split(":").map(Number);
    if (parts.length !== 2 || !parts[0] || !parts[1]) return [16, 9];
    return parts;
  }

  function createCropDialog() {
    const overlay = document.createElement("div");
    overlay.className = "catalog-crop-overlay";
    overlay.hidden = true;
    overlay.innerHTML = `
      <section class="catalog-crop-dialog" role="dialog" aria-modal="true" aria-labelledby="catalog-crop-title">
        <header>
          <div>
            <h2 id="catalog-crop-title">裁剪展示图片</h2>
            <p class="catalog-crop-description"></p>
          </div>
          <button type="button" class="catalog-crop-close" aria-label="关闭">×</button>
        </header>
        <div class="catalog-crop-stage"><canvas></canvas></div>
        <div class="catalog-crop-toolbar">
          <label>图片缩放
            <input class="catalog-crop-zoom" type="range" min="0.2" max="4" step="0.01" value="1">
          </label>
          <span>金色框为最终输出区域，框外画面仅用于辅助定位</span>
        </div>
        <footer>
          <button type="button" class="button catalog-crop-reset">重置位置</button>
          <button type="button" class="button catalog-crop-cancel">取消</button>
          <button type="button" class="button default catalog-crop-apply">应用裁剪</button>
        </footer>
      </section>`;
    document.body.appendChild(overlay);
    return overlay;
  }

  function setupImageCropper() {
    const controls = Array.from(document.querySelectorAll(".catalog-crop-controls"));
    if (!controls.length) return;

    const overlay = createCropDialog();
    const canvas = overlay.querySelector("canvas");
    const context = canvas.getContext("2d");
    const description = overlay.querySelector(".catalog-crop-description");
    const zoom = overlay.querySelector(".catalog-crop-zoom");
    let active = null;
    let image = null;
    let sourceUrl = "";
    let baseScale = 1;
    let offsetX = 0;
    let offsetY = 0;
    let cropRect = { x: 0, y: 0, width: 0, height: 0 };
    let previousZoom = 1;
    let dragging = false;
    let pointerX = 0;
    let pointerY = 0;

    function drawBlurredBackground(targetContext, targetCanvas, targetRect) {
      const coverScale = Math.max(
        targetRect.width / image.naturalWidth,
        targetRect.height / image.naturalHeight
      ) * 1.08;
      const width = image.naturalWidth * coverScale;
      const height = image.naturalHeight * coverScale;
      const x = targetRect.x + (targetRect.width - width) / 2;
      const y = targetRect.y + (targetRect.height - height) / 2;
      targetContext.save();
      targetContext.beginPath();
      targetContext.rect(targetRect.x, targetRect.y, targetRect.width, targetRect.height);
      targetContext.clip();
      targetContext.filter = `blur(${Math.max(20, targetCanvas.width * 0.022)}px)`;
      targetContext.globalAlpha = 0.72;
      targetContext.drawImage(image, x, y, width, height);
      targetContext.restore();
    }

    function draw() {
      if (!image) return;
      const scale = baseScale * Number(zoom.value);
      context.fillStyle = "#202732";
      context.fillRect(0, 0, canvas.width, canvas.height);
      drawBlurredBackground(context, canvas, cropRect);
      context.drawImage(
        image, offsetX, offsetY,
        image.naturalWidth * scale, image.naturalHeight * scale
      );

      context.save();
      context.fillStyle = "rgba(8, 12, 18, 0.68)";
      context.fillRect(0, 0, canvas.width, cropRect.y);
      context.fillRect(0, cropRect.y + cropRect.height, canvas.width, canvas.height - cropRect.y - cropRect.height);
      context.fillRect(0, cropRect.y, cropRect.x, cropRect.height);
      context.fillRect(cropRect.x + cropRect.width, cropRect.y, canvas.width - cropRect.x - cropRect.width, cropRect.height);
      context.strokeStyle = "#f6c453";
      context.lineWidth = 5;
      context.setLineDash([18, 10]);
      context.strokeRect(cropRect.x, cropRect.y, cropRect.width, cropRect.height);
      context.setLineDash([]);
      context.fillStyle = "rgba(12, 16, 22, 0.88)";
      context.fillRect(cropRect.x, cropRect.y - 38, 238, 38);
      context.fillStyle = "#f6c453";
      context.font = "600 22px sans-serif";
      context.fillText("最终裁剪区域", cropRect.x + 14, cropRect.y - 12);
      context.restore();
    }

    function resetPosition() {
      if (!image) return;
      zoom.value = "1";
      previousZoom = 1;
      baseScale = Math.min(cropRect.width / image.naturalWidth, cropRect.height / image.naturalHeight);
      offsetX = cropRect.x + (cropRect.width - image.naturalWidth * baseScale) / 2;
      offsetY = cropRect.y + (cropRect.height - image.naturalHeight * baseScale) / 2;
      draw();
    }

    function closeDialog() {
      overlay.hidden = true;
      document.body.classList.remove("catalog-crop-lock");
      active = null;
      image = null;
      if (sourceUrl) URL.revokeObjectURL(sourceUrl);
      sourceUrl = "";
    }

    function replaceInputFile(input, file) {
      const transfer = new DataTransfer();
      transfer.items.add(file);
      input.files = transfer.files;
    }

    async function getCropSource(control, input) {
      const selectedFile = input._catalogOriginalFile || input.files[0];
      if (selectedFile) return selectedFile;
      const currentUrl = control.dataset.currentUrl;
      if (!currentUrl) return null;
      const response = await fetch(currentUrl, { credentials: "same-origin" });
      if (!response.ok) throw new Error(`图片读取失败：${response.status}`);
      const blob = await response.blob();
      const pathname = new URL(currentUrl, window.location.href).pathname;
      const filename = pathname.split("/").pop() || "current-image.jpg";
      const file = new File([blob], filename, { type: blob.type || "image/jpeg" });
      input._catalogOriginalFile = file;
      return file;
    }

    async function openDialog(control) {
      const input = control.closest(".catalog-image-upload").querySelector('input[type="file"]');
      let file;
      try {
        file = await getCropSource(control, input);
      } catch (error) {
        window.alert("当前图片读取失败，请重新选择本地图片后裁剪。 ");
        return;
      }
      if (!file) return;

      active = { control, input, file };
      const ratio = parseRatio(control.dataset.cropRatio);
      canvas.width = 1400;
      canvas.height = 900;
      canvas.style.aspectRatio = "14 / 9";
      const maxWidth = 1120;
      const maxHeight = 650;
      let cropWidth = maxWidth;
      let cropHeight = cropWidth * ratio[1] / ratio[0];
      if (cropHeight > maxHeight) {
        cropHeight = maxHeight;
        cropWidth = cropHeight * ratio[0] / ratio[1];
      }
      cropRect = {
        x: (canvas.width - cropWidth) / 2,
        y: (canvas.height - cropHeight) / 2,
        width: cropWidth,
        height: cropHeight,
      };
      description.textContent = `${control.dataset.cropContext || "图片展示框"} · ${ratio[0]}:${ratio[1]} · 空白区域自动使用模糊背景填充`;
      sourceUrl = URL.createObjectURL(file);
      image = new Image();
      image.onload = function () {
        resetPosition();
        overlay.hidden = false;
        document.body.classList.add("catalog-crop-lock");
      };
      image.onerror = function () {
        window.alert("无法读取这张图片，请换一张图片后重试。");
        active.input.value = "";
        active.input._catalogOriginalFile = null;
        active.input._catalogCropApplied = false;
        active.control.querySelector(".catalog-crop-open").disabled = true;
        closeDialog();
      };
      image.src = sourceUrl;
    }

    function updatePreview(control, file) {
      const field = control.closest(".catalog-image-field");
      const current = field.querySelector(".catalog-image-current");
      let preview = current.querySelector(".catalog-selected-preview");
      if (!preview) {
        preview = document.createElement("span");
        preview.className = "catalog-preview catalog-selected-preview";
        preview.innerHTML = '<img alt="上传预览"><span class="catalog-preview-zoom"><img alt="上传大图预览"></span>';
        const existing = current.querySelector(".catalog-preview");
        if (existing) existing.replaceWith(preview);
        else current.prepend(preview);
      }
      if (preview._catalogPreviewUrl) URL.revokeObjectURL(preview._catalogPreviewUrl);
      preview._catalogPreviewUrl = URL.createObjectURL(file);
      preview.querySelectorAll("img").forEach(function (previewImage) {
        previewImage.src = preview._catalogPreviewUrl;
      });
    }

    controls.forEach(function (control) {
      const input = control.closest(".catalog-image-upload").querySelector('input[type="file"]');
      const openButton = control.querySelector(".catalog-crop-open");
      openButton.disabled = !input.files.length && !control.dataset.currentUrl;

      input.addEventListener("change", function () {
        if (!input.files.length) {
          input._catalogOriginalFile = null;
          input._catalogCropApplied = false;
          openButton.disabled = true;
          return;
        }
        input._catalogOriginalFile = input.files[0];
        input._catalogCropApplied = false;
        openButton.disabled = false;
        void openDialog(control);
      });
      openButton.addEventListener("click", function () { void openDialog(control); });
    });

    zoom.addEventListener("input", function () {
      if (!image) return;
      const currentZoom = Number(zoom.value);
      const oldScale = baseScale * previousZoom;
      const newScale = baseScale * currentZoom;
      const centerX = offsetX + image.naturalWidth * oldScale / 2;
      const centerY = offsetY + image.naturalHeight * oldScale / 2;
      offsetX = centerX - image.naturalWidth * newScale / 2;
      offsetY = centerY - image.naturalHeight * newScale / 2;
      previousZoom = currentZoom;
      draw();
    });
    overlay.querySelector(".catalog-crop-reset").addEventListener("click", resetPosition);
    overlay.querySelector(".catalog-crop-cancel").addEventListener("click", closeDialog);
    overlay.querySelector(".catalog-crop-close").addEventListener("click", closeDialog);
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) closeDialog();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !overlay.hidden) closeDialog();
    });

    canvas.addEventListener("pointerdown", function (event) {
      dragging = true;
      pointerX = event.clientX;
      pointerY = event.clientY;
      canvas.setPointerCapture(event.pointerId);
      canvas.classList.add("is-dragging");
    });
    canvas.addEventListener("pointermove", function (event) {
      if (!dragging) return;
      const bounds = canvas.getBoundingClientRect();
      offsetX += (event.clientX - pointerX) * canvas.width / bounds.width;
      offsetY += (event.clientY - pointerY) * canvas.height / bounds.height;
      pointerX = event.clientX;
      pointerY = event.clientY;
      draw();
    });
    canvas.addEventListener("pointerup", function (event) {
      dragging = false;
      canvas.releasePointerCapture(event.pointerId);
      canvas.classList.remove("is-dragging");
    });

    overlay.querySelector(".catalog-crop-apply").addEventListener("click", function () {
      if (!active) return;
      const originalName = active.file.name.replace(/\.[^.]+$/, "");
      const outputType = active.file.type === "image/png" ? "image/png" : "image/jpeg";
      const extension = outputType === "image/png" ? ".png" : ".jpg";
      const ratio = parseRatio(active.control.dataset.cropRatio);
      const outputCanvas = document.createElement("canvas");
      outputCanvas.width = 1600;
      outputCanvas.height = Math.round(outputCanvas.width * ratio[1] / ratio[0]);
      const outputContext = outputCanvas.getContext("2d");
      const outputRect = { x: 0, y: 0, width: outputCanvas.width, height: outputCanvas.height };
      drawBlurredBackground(outputContext, outputCanvas, outputRect);
      const factor = outputCanvas.width / cropRect.width;
      const scale = baseScale * Number(zoom.value) * factor;
      outputContext.drawImage(
        image,
        (offsetX - cropRect.x) * factor,
        (offsetY - cropRect.y) * factor,
        image.naturalWidth * scale,
        image.naturalHeight * scale
      );
      outputCanvas.toBlob(function (blob) {
        if (!blob || !active) return;
        const croppedFile = new File([blob], `${originalName}-cropped${extension}`, { type: outputType });
        replaceInputFile(active.input, croppedFile);
        active.input._catalogCropApplied = true;
        updatePreview(active.control, croppedFile);
        closeDialog();
      }, outputType, 0.94);
    });

    const form = controls[0].closest("form");
    if (form) {
      form.addEventListener("submit", function (event) {
        const unfinished = controls.find(function (control) {
          const input = control.closest(".catalog-image-upload").querySelector('input[type="file"]');
          return input.files.length && input._catalogCropApplied !== true;
        });
        if (!unfinished) return;
        event.preventDefault();
        window.alert("新上传的图片必须先完成裁剪，请点击“调整裁剪”并应用裁剪。 ");
        void openDialog(unfinished);
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupSubcategorySelector();
    setupFeaturedImageFields();
    setupImageCropper();
  });
})();
