export default defineEventHandler(async event => {
  const { login, email, password } = await readBody(event);

  const config = useRuntimeConfig();

  console.log("registration");

  try {
    const data = await $fetch(`${config.AUTH_HOST}:${config.AUTH_PORT}/account`, {
      method: "post",
      body: { login, email, password },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
});
