import type { AxiosInstance } from "axios";
import type { IRegister } from "types/auth-api-types";

export default function useAuthApi() {
  const nuxtApp = useNuxtApp();
  const $authApi = nuxtApp.$authApi as AxiosInstance;

  const registration = async (data: IRegister) => {
    try {
      const result = await $authApi.post("/auth/registration", {
        ...data,
      });

      return result.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    registration,
  };
}
