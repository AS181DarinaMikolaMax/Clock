<script lang="ts">
  import { Route } from "svelte-routing";
  import { authState } from "../../core/store/AuthState.svelte";
  import AccessDeniedPage from "./AccessDeniedPage.svelte";
  export let component: any;
  export let path: string;
  export let args = {};
  let resultComponent;
  $: {
    resultComponent = $authState.token ? component : AccessDeniedPage;
    console.log(resultComponent);
  }
</script>

<Route {path} component={resultComponent} {...args}>
  <slot />
</Route>
