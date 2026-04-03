import eslintPluginAstro from "eslint-plugin-astro";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { ignores: [".astro/**", "docs/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "no-unused-vars": "off",
    },
  },
];
