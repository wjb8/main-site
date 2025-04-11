import eslint from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginImport from "eslint-plugin-import";

export default [
  // Ignore patterns
  {
    ignores: [".astro/**/*", "dist/**/*", "node_modules/**/*"],
  },

  // Base JS config
  eslint.configs.recommended,

  // Astro recommended config
  ...eslintPluginAstro.configs.recommended,

  // Custom rules for Astro files with import checking
  {
    files: ["**/*.astro"],
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      "import/no-unresolved": "error",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
          astro: "always",
          scss: "always",
        },
      ],
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".astro", ".scss"],
        },
      },
    },
  },
];
