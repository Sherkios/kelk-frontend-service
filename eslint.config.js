import path from "node:path";
import { fileURLToPath } from "node:url";

import { includeIgnoreFile } from "@eslint/compat";
import pluginJs from "@eslint/js";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";

import withNuxt from "./.nuxt/eslint.config.mjs";
import { getRouteRules } from "nuxt/app";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default withNuxt(
  pluginJs.configs.recommended,
  // ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],

  includeIgnoreFile(gitignorePath),

  { ignores: [".eslint.config.mjs", ".nuxt.config.ts"] },

  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
  },

  {
    plugins: {
      eslintPluginUnicorn,
      eslintPluginImport,
    },
  },

  {
    languageOptions: {
      globals: globals.browser,
    },
  },

  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },

  {
    rules: {
      "no-undef": "off",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "vue/block-order": [
        "error",
        {
          order: ["template", "script", "script[setup]", ["style[scoped]", "style"]],
        },
      ],
      "vue/component-definition-name-casing": ["error", "kebab-case"],
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always", // Для пустых элементов вроде <img/> и <input/>
            normal: "never", // Обычные теги не должны быть самозакрывающимися
            component: "always", // Самозакрывающиеся компоненты
          },
          svg: "always", // Самозакрывающиеся SVG теги
          math: "always", // Самозакрывающиеся MathML теги
        },
      ],
      "eslintPluginUnicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
        },
      ],
      "vue/define-macros-order": [
        "error",
        {
          order: ["defineOptions", "defineProps", "defineEmits", "defineModel", "defineSlots"],
          defineExposeLast: true,
        },
      ],
      "vue/attributes-order": [
        "error",
        {
          order: [
            "DEFINITION",
            "LIST_RENDERING",
            "CONDITIONALS",
            "RENDER_MODIFIERS",
            "GLOBAL",
            "UNIQUE",
            "SLOT",
            "TWO_WAY_BINDING",
            "OTHER_DIRECTIVES",
            ["ATTR_DYNAMIC", "ATTR_STATIC", "ATTR_SHORTHAND_BOOL"],
            "EVENTS",
            "CONTENT",
          ],
        },
      ],
      "vue/multi-word-component-names": "error",
      "vue/no-v-html": "error",
      "vue/v-slot-style": ["error", "shorthand"],
      "vue/component-name-in-template-casing": ["error", "kebab-case"],
      "vue/custom-event-name-casing": ["error", "kebab-case"],
      "vue/no-unused-vars": [
        "error",
        {
          ignorePattern: "^_",
        },
      ],
      // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "eslintPluginImport/order": [
        "error",
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "object",
            "type",
          ],
          "pathGroups": [
            {
              pattern: "*",
              group: "external",
              position: "before",
            },
            {
              pattern: "assets/**",
              group: "external",
              position: "before",
            },
            {
              pattern: "components/**",
              group: "external",
              position: "before",
            },
          ],
          "pathGroupsExcludedImportTypes": ["builtin"],
          "newlines-between": "always",
          "alphabetize": {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      "@typescript-eslint/no-wrapper-object-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      // "no-restricted-imports": [
      //   "error",
      //   {
      //     patterns: [
      //       "../*", // запрещает импорты из родительских директорий
      //       "./*", // запрещает импорты из соседних файлов
      //     ],
      //   },
      // ],
    },
  },
);
