import { globalIgnores } from "eslint/config";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";
import pluginPrettier from "eslint-plugin-prettier";
import pluginImport from "eslint-plugin-import";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";
import tsParser from "@typescript-eslint/parser";
import vueParser from "vue-eslint-parser";

import path from "path";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

const vueAirbnbImports = compat.extends("@vue/eslint-config-airbnb/rules/imports");
const vueAirbnbTemplate = compat.extends("@vue/eslint-config-airbnb/rules/template");
const vueAirbnbTemplateA11y = compat.extends("@vue/eslint-config-airbnb/rules/template-a11y");
const vueAirbnbMisc = compat.extends("@vue/eslint-config-airbnb/rules/misc");

export default defineConfigWithVueTs(
  {
    name: "app/src-only",
    files: ["src/**/*.{ts,tsx,vue}"]
  },

  globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**", "**/*.config.*"]),
  pluginVue.configs["flat/recommended"],
  vueTsConfigs.recommended,

  vueAirbnbImports,
  vueAirbnbTemplate,
  vueAirbnbTemplateA11y,
  vueAirbnbMisc,
  skipFormatting,
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        tsconfigRootDir: path.resolve(),
        extraFileExtensions: [".vue"],
        ecmaVersion: "latest",
        sourceType: "module",
        parser: "@typescript-eslint/parser"
      }
    },

    plugins: {
      prettier: pluginPrettier,
      import: pluginImport,
      vue: pluginVue
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          semi: true,
          tabWidth: 2,
          useTabs: false,
          singleQuote: false,
          trailingComma: "none"
        }
      ],
      "vue/multi-word-component-names": "off"
    }
  }
);
