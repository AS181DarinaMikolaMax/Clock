<script lang="ts">
  import { Route } from "svelte-routing";
  import { authState } from "../../core/store/authState";
  import AccessDeniedPage from "./AccessDeniedPage.svelte";

  export let component: any;
  export let path: string;
  export let args = {};
  $: resultComponent = $authState.token ? component : AccessDeniedPage;
</script>

<Route {path} component={resultComponent} {...args}>
  <slot />
</Route>
