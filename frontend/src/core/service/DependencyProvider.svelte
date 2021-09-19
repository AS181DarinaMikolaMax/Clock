<script lang="ts" context="module">
  import { setContext, getContext } from "svelte";
  import { AuthService } from "./AuthService.svelte";

  export const injectServices = () => {
    //Since js classes are actualy functions and every js function is object, we can use it as key for get/setContext
    setContext(AuthService, new AuthService());
  };
</script>
