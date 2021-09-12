<script context="module">
  export const routes = {
    HOME: "/",
    LOGIN: "login",

    //for github pages
    GH_HOME: "KekToDo",
  };
</script>

<script>
  import { Router, Route } from "svelte-routing";
  import LoginPage from "../auth/LoginPage.svelte";
  import HomePage from "../home/HomePage.svelte";
  import ProtectedRoute from "./components/ProtectedRoute.svelte";

  export let url;
</script>

<Router {url}>
  <slot />
  <Route component={HomePage} path={routes.HOME} />
  <Route component={LoginPage} path={routes.LOGIN} />

  <!-- For Github Pages intial page -->
  <Route component={HomePage} path={routes.GH_HOME} />
</Router>
