<script context="module">
  export class Routes {
    // static get repoPrefix() {
    //   return "/KekToDo";
    // }

    static get HOME() {
      return "/";
    }
    static get LOGIN() {
      return "login";
    }
    static get SIGNUP() {
      return "signup";
    }
    //for github pages
    static get GH_HOME() {
      return "KekToDo";
    }
  }
</script>

<script>
  import { Router, Route } from "svelte-routing";
  import LoginPage from "../auth/LoginPage.svelte";
  import HomePage from "../home/HomePage.svelte";

  export let url;
</script>

<Router {url}>
  <slot />
  <Route component={HomePage} path={Routes.HOME} />
  <Route component={LoginPage} path={Routes.LOGIN} />

  <!-- For Github Pages intial page -->
  <Route component={HomePage} path={Routes.GH_HOME} />
</Router>
