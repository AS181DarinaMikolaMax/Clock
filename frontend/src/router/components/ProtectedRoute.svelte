<script lang="ts">
  import { Route } from "svelte-routing";
  import { authState } from "../../core/store/AuthState.svelte";
  import AccessDeniedPage from "./AccessDeniedPage.svelte";
  export let component: any;
  export let path: string;
  export let args = {};
</script>

<Route
  {path}
  component={$authState.token ? component : AccessDeniedPage}
  {...args}
>
  <slot />
</Route>
