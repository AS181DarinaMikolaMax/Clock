<script lang="ts">
  import { injectServices } from "./core/service/depandencyProvider";
  import AppRouter from "./router/AppRouter.svelte";

  export let url = "";

  injectServices();
</script>

<main>
  <AppRouter {url} />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
