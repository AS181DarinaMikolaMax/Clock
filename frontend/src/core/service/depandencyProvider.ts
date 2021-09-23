import { setContext } from "svelte";
import { API } from "../api/api";
import { AuthService } from "./authService";

export const injectServices = () => {
  //Since js classes are actualy functions and every js function is object, we can use it as key for get/setContext
  setContext(AuthService, new AuthService());
};
