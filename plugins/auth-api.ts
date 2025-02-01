import axios, { type AxiosInstance } from "axios";

export default defineNuxtPlugin(nuxtApp => {
  const { $config } = nuxtApp;

  const api: AxiosInstance = axios.create({
    baseURL: `${$config.public.AUTH_HOST}:${$config.public.AUTH_PORT}`,
  });

  console.log("axios:", api, $config);

  nuxtApp.provide("authApi", api);
});
