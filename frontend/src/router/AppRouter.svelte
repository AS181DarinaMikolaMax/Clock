<script context="module" lang="ts">
  export class Routes {
    // static get repoPrefix() {
    //   return "/KekToDo";
    // }

    static get HOME(): string {
      return "/";
    }
    static get LOGIN(): string {
      return "login";
    }
    static get SIGNUP(): string {
      return "signup";
    }
    //for github pages
    static get GH_HOME(): string {
      return "KekToDo";
    }
  }
</script>

<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import LoginPage from "../auth/LoginPage.svelte";
  import HomePage from "../home/HomePage.svelte";

  export let url: string;
</script>

<Router {url}>
  <slot />
  <Route component={HomePage} path={Routes.HOME} />
  <Route component={LoginPage} path={Routes.LOGIN} />

  <!-- For Github Pages intial page -->
  <Route component={HomePage} path={Routes.GH_HOME} />
</Router>
