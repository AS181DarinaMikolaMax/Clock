<script>
  import injectServices from "./core/service/injectServices";

  import { Router, Route } from "svelte-routing";
  import LoginPage from "./auth/LoginPage.svelte";
  import NavBar from "./components/NavBar.svelte";
  import HomePage from "./home/HomePage.svelte";

  export let url = "";

  injectServices();
</script>

<main>
  <Router {url}>
    <NavBar />

    <Route component={HomePage} path="/" />
    <Route component={LoginPage} path="login" />
  </Router>
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
