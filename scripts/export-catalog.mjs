import { build } from "esbuild";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const result = await build({
  stdin: {
    contents: [
      'export { parameters, categories, categoryGroups } from "./frontend/src/data/parameters.ts";',
      'export { featuredPrompts, featuredPromptCategories, featuredPromptGroups } from "./frontend/src/data/featuredPrompts.ts";',
    ].join("\n"),
    resolveDir: root,
    sourcefile: "catalog-entry.ts",
    loader: "ts",
  },
  bundle: true,
  platform: "node",
  format: "esm",
  write: false,
  define: { "import.meta.env.BASE_URL": '"/"' },
});

const moduleUrl = `data:text/javascript;base64,${Buffer.from(result.outputFiles[0].contents).toString("base64")}`;
const {
  parameters, categories, categoryGroups,
  featuredPrompts, featuredPromptCategories, featuredPromptGroups,
} = await import(moduleUrl);
const parametersWithoutWeight = parameters.map(({ defaultWeight: _defaultWeight, ...item }) => item);
const output = resolve(root, "backend", "catalog_seed.json");
await mkdir(dirname(output), { recursive: true });
await writeFile(output, `${JSON.stringify({
  parameterCategories: categories.map(({ id, zhName }) => ({ id, zhName })),
  parameterGroups: categoryGroups,
  featuredPromptCategories,
  featuredPromptGroups,
  parameters: parametersWithoutWeight,
  featuredPrompts,
}, null, 2)}\n`, "utf8");
console.log(`Exported ${parameters.length} parameters and ${featuredPrompts.length} featured prompts to ${output}`);
