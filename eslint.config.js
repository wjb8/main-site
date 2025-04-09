import astro from "eslint-plugin-astro";
import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

export default [
  // Ignore patterns
  {
    ignores: ["**/.astro/**", "dist/", "node_modules/"],
  },

  // Base JS configuration
  js.configs.recommended,

  // TypeScript configuration
  {
    files: ["**/*.{ts,tsx,astro}"],
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
    },
  },

  // Astro configuration
  ...astro.configs.recommended,

  // JS/TS files configuration
  {
    files: ["**/*.{js,ts}"],
    rules: {
      // Add any specific rules for JS/TS files
    },
  },

  // Astro files configuration
  {
    files: ["**/*.astro"],
    rules: {
      // Add any specific rules for Astro files
    },
  },

  // Prettier integration
  {
    files: ["**/*.{js,ts,astro}"],
    plugins: { prettier },
    rules: {
      "prettier/prettier": [
        "warn",
        {
          plugins: ["prettier-plugin-astro"],
          parser: "astro",
        },
      ],
    },
  },
];
