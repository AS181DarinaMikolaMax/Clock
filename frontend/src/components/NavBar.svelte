<script>
  import { getContext } from "svelte";

  import { Link } from "svelte-routing";
  import AuthService from "../core/service/authService";
  import authState from "../core/store/authState";

  const authService = getContext(AuthService);

  $: authButtonItem = $authState.token
    ? {
        title: "Выйти",
        path: "/",
        onclick: () => authService.logout(),
      }
    : { title: "Войти", path: "login" };

  $: items = [{ title: "Главная", path: "/" }, authButtonItem];
</script>

<nav>
  {#each items as item}
    <div on:click={item.onclick}>
      <Link to={item.path}>{item.title}</Link>
    </div>
  {/each}
</nav>

<style>
  nav {
    display: flex;
    flex-direction: row;
  }
  div {
    margin-right: 5pt;
  }
</style>
