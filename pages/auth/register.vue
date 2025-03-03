<template>
  <page-block class="register-page">
    <base-container class="register-page__container">
      <section-block v-if="statusRegistration === 'onRegister'" class="register-page__block">
        <template #section-block-title> Форма регистрации </template>

        <template #default>
          <div class="register-page__form">
            <div v-if="errorMessage" class="register-page__error">
              {{ errorMessage }}
            </div>

            <div class="register-page__inputs">
              <base-input v-model="login" name="login" placeholder="imugor" :error="errors.login">
                Логин
              </base-input>

              <div class="register-page__flex">
                <base-input v-model="name" name="name" placeholder="Игорь" :error="errors.name">
                  Имя
                </base-input>

                <base-input
                  v-model="lastName"
                  name="lastName"
                  placeholder="Иванов"
                  :error="errors.lastName"
                >
                  Фамилия
                </base-input>
              </div>

              <base-input
                v-model="email"
                :error="errors.email"
                name="email"
                type="email"
                placeholder="imugor@mail.ru"
              >
                Почта
              </base-input>

              <base-input
                v-model="password"
                :error="errors.password"
                name="password"
                type="password"
                placeholder="password"
              >
                Пароль
              </base-input>

              <base-input
                v-model="repeatPassword"
                :error="errors.repeatPassword"
                name="password"
                type="password"
                placeholder="password"
              >
                Повторите пароль
              </base-input>
            </div>

            <base-button @click="onSubmit" :is-loading="isSending">Зарегистрироваться</base-button>
          </div>
        </template>
      </section-block>

      <section-block v-else class="register-page__block">
        <template #section-block-title>Пользоватлеь успешно зарегестрирован</template>

        <template #default> <p>Перейдите по ссылке чтобы авторизоваться</p></template>
      </section-block>
    </base-container>
  </page-block>
</template>

<script setup lang="ts">
import { isResponseError } from "helpers/guards/is-response-error";
import { isValidateError } from "helpers/guards/is-validate-error";
import type { IRegister } from "types/auth-api-types";
import registerSchema from "utils/validation-schems/register-schema";
import { useForm } from "vee-validate";
defineOptions({
  name: "register-page",
});

const statusRegistration = ref<"onRegister" | "succesRegister">("onRegister");

const { defineField, handleSubmit, errors, resetForm, setFieldError } = useForm({
  validationSchema: registerSchema,
});

const [login] = defineField("login");
const [email] = defineField("email");
const [password] = defineField("password");
const [repeatPassword] = defineField("repeatPassword");
const [name] = defineField("name");
const [lastName] = defineField("lastName");

const errorMessage = ref<string>("");

const isSending = ref<boolean>(false);

const { registration } = useAuthApi();
const onSubmit = handleSubmit(async () => {
  isSending.value = true;

  const data = await registration({
    login: login.value,
    email: email.value,
    password: password.value,
    name: name.value,
    lastName: lastName.value,
  });

  let isError = false;

  if (isValidateError<IRegister>(data)) {
    isError = true;
    const errors = data.errors.value;

    for (const [key, value] of Object.entries(errors)) {
      setFieldError(key, value);
    }
  }

  if (!isError && isResponseError(data)) {
    console.log("isResponseError");
    isError = true;
    errorMessage.value = data.message;
  }

  if (!isError) {
    errorMessage.value = "";
    resetForm();
    statusRegistration.value = "succesRegister";
  }

  isSending.value = false;
});
</script>

<style scoped lang="scss">
.register-page {
  display: flex;
  align-items: center;
  &__container {
    display: flex;
    justify-content: center;
  }

  &__block {
    max-width: 540px;
    width: 100%;
    // background-color: rgba($color: #000000, $alpha: 0.5);

    & > p {
      text-align: center;
    }
  }
  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__flex {
    display: flex;
    gap: 20px;
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__error {
    padding: 20px;

    display: flex;
    justify-content: center;

    border-radius: 8px;

    border: 1px solid var(--negative-color);
    background-color: var(--background-color);
    color: var(--negative-dark-color);
  }
}
</style>
