<script>
  import { Route } from "svelte-routing";
  import authState from "../../core/store/authState";
  import AccessDeniedPage from "./AccessDeniedPage.svelte";
  export let component;
  export let path;
  export let args = {};
</script>

<Route
  {path}
  component={$authState.token ? component : AccessDeniedPage}
  {...args}
>
  <slot />
</Route>
