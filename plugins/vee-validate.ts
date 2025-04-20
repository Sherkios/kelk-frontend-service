import { configure } from "vee-validate";

export default defineNuxtPlugin(() => {
  configure({
    validateOnChange: true,
    validateOnBlur: true,
    validateOnModelUpdate: false,
  });
});
