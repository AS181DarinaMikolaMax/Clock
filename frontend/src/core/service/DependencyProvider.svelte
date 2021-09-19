<script lang="ts" context="module">
  import { setContext } from "svelte";
  import { API } from "../api/Api.svelte";
  import { AuthService } from "./AuthService.svelte";

  export const injectServices = () => {
    //Since js classes are actualy functions and every js function is object, we can use it as key for get/setContext
    setContext(API, new API());
    setContext(AuthService, new AuthService());
  };
</script>
