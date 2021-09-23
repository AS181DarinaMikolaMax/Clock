import { setContext } from "svelte";
import { AuthService } from "./authService";
import { HabitsService } from "./habitsService";

export const injectServices = () => {
  //Since js classes are actualy functions and every js function is object, we can use it as key for get/setContext
  setContext(AuthService, new AuthService());
  setContext(HabitsService, new HabitsService());
};
