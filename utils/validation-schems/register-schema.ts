import * as yup from "yup";

const registerSchema = yup.object().shape({
  login: yup.string().required("Логин обязателен"),
  email: yup
    .string()
    .email("Некорректный email")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Некорректный email")
    .required("Email обязателен"),
  password: yup.string().required("Пароль обязателен"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли должны совпадать")
    .required("Повторите пароль"),
});

export default registerSchema;
