import astro from "eslint-plugin-astro";
import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";

export default [
  {
    ignores: ["**/.astro/**", "dist/", "node_modules/"],
  },

  // 1) Limit the JS recommended config to .js/.ts only
  {
    files: ["**/*.{js,ts}"],
    ...js.configs.recommended,
  },

  // 2) Astro override: parse .astro files with Astro’s parser
  {
    files: ["**/*.astro"],
    plugins: { astro },
    languageOptions: {
      parser: astro.parser, // critical for frontmatter support
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      ...astro.configs.recommended.rules,
    },
  },

  // 3) Prettier rules for JS, TS, and Astro
  {
    files: ["**/*.{js,ts,astro}"],
    plugins: { prettier },
    rules: {
      "prettier/prettier": "warn",
    },
  },
];
