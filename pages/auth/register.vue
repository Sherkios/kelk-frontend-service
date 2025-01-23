<template>
  <page-block class="register-page">
    <base-container class="register-page__container">
      <section-block class="register-page__block">
        <template #section-block-title> Форма регистрации </template>

        <template #default>
          <div class="register-page__form">
            <div class="register-page__inputs">
              <base-input v-model="login" name="login" placeholder="imugor" :error="errors.login">
                Логин
              </base-input>

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

            <base-button @click="onSubmit">Зарегистрироваться</base-button>
          </div>
        </template>
      </section-block>
    </base-container>
  </page-block>
</template>

<script setup lang="ts">
import registerSchema from "utils/validation-schems/register-schema";
import { useForm } from "vee-validate";
defineOptions({
  name: "register-page",
});

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: registerSchema,
});

const [login] = defineField("login");
const [email] = defineField("email");
const [password] = defineField("password");
const [repeatPassword] = defineField("repeatPassword");

const onSubmit = handleSubmit(async () => {
  const data = await useFetch("/api/auth/registration", {
    method: "post",
    body: {
      login,
      email,
      password,
    },
  });

  console.log("form values", data);
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
  }
  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
