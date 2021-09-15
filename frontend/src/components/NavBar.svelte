<script>
  import { getContext } from "svelte";

  import { Link, navigate } from "svelte-routing";
  import AuthService from "../core/service/authService";
  import authState from "../core/store/authState";
  import { Routes } from "../router/AppRouter.svelte";

  const authService = getContext(AuthService);

  const logout = async () => {
    await authService.logout();
    navigate(routes.LOGIN);
  };

  $: authButtonItem = $authState.token
    ? {
        title: "Выйти",
        path: Routes.HOME,
        onclick: logout,
      }
    : { title: "Войти", path: Routes.LOGIN };

  $: items = [{ title: "Главная", path: Routes.HOME }, authButtonItem];
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
