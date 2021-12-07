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

    static get ADD_HABBIT(): string {
      return "add-habbit";
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
  import AddHabbitPage from "../home/add_habbit/AddHabbitPage.svelte";
  import HomePage from "../home/HomePage.svelte";
  import ProtectedRoute from "./components/ProtectedRoute.svelte";

  export let url: string;
</script>

<Router {url}>
  <slot />
  <Route component={LoginPage} path={Routes.LOGIN} />
  <ProtectedRoute component={HomePage} path={Routes.HOME} />
  <ProtectedRoute component={AddHabbitPage} path={Routes.ADD_HABBIT} />

  <!-- For Github Pages intial page -->
  <ProtectedRoute component={HomePage} path={Routes.GH_HOME} />
  <ProtectedRoute component={HomePage} path={Routes.GH_HOME} />
</Router>
