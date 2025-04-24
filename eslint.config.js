import eslint from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginImport from "eslint-plugin-import";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [".astro/**/*", "dist/**/*", "node_modules/**/*"],
  },

  // Base JS config
  eslint.configs.recommended,

  // TypeScript config
  ...tseslint.configs.recommended,

  // Astro recommended config
  ...eslintPluginAstro.configs.recommended,

  {
    files: ["**/*.astro"],
    plugins: {
      import: eslintPluginImport,
    },
    languageOptions: {
      parser: eslintPluginAstro.parser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
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
