<script>
  import { getContext } from "svelte";

  import { navigate } from "svelte-routing";
  import { routes } from "../router/AppRouter.svelte";

  import AuthService from "../core/service/authService";
  import { BarLoader } from "svelte-loading-spinners";
  import TextField from "./componens/TextField.svelte";

  const authServise = getContext(AuthService);

  const handleLogin = async () => {
    isLoading = true;
    await authServise.login(username, pwd);
    navigate(routes.HOME);
    isLoading = false;
  };

  const handleSignUp = async () => {
    navigate("/signup");
  };

  const validate = (u, p) => {
    return u.length != 0 && p.length != 0;
  };

  let username = "";
  let pwd = "";

  let isLoading = false;
  $: isValid = validate(username, pwd);
</script>

<h1>Вход</h1>
<div>
  <form>
    <TextField
      class="text-input"
      bind:value={username}
      placeholder="Имя пользователя"
    />
    <TextField
      type="password"
      class="text-input"
      bind:value={pwd}
      placeholder="Пароль"
    />
    <input
      type="button"
      class="signin"
      value="Войти"
      class:isValid
      on:click={isValid ? handleLogin : null}
    />
    <input
      type="button"
      class="signup"
      value="У меня нет аккаунта"
      on:click={handleSignUp}
    />
    {#if isLoading}
      <BarLoader size="90" color="rgb(145, 87, 187)" />
    {/if}
  </form>
</div>

<style>
  form {
    display: flex;
    align-items: start;
    align-self: stretch;
    flex-direction: column;
    margin-bottom: auto;
  }
  div {
    display: flex;
    justify-content: center;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
  }
  input[type="button"] {
    background-color: transparent;
    cursor: pointer;
  }

  h1 {
    font-size: 4em;
    font-weight: 100;
    color: indigo;
  }

  .signin {
    color: indigo;
    opacity: 0.5;
  }

  .isValid {
    opacity: 1;
  }
  .signup {
    color: rgb(206, 87, 87);
  }
</style>
