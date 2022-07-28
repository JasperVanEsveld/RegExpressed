// ex. scripts/build_npm.ts
import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: true,
  },
  package: {
    name: "reg-expressed",
    version: Deno.args[0],
    description: "Descriptive functions to create regular expressions.",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/JasperVanEsveld/RegExpressed.git",
    },
    bugs: {
      url: "https://github.com/JasperVanEsveld/RegExpressed/issues",
    },
  },
});

// post build steps
Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
