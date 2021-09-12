<script>
  import { getContext } from "svelte";

  import { navigate } from "svelte-routing";
  import AuthService from "../core/service/authService";

  const authServise = getContext(AuthService);

  const handleLogin = async () => {
    await authServise.login(username, pwd);
    navigate("/");
  };

  const handleSignUp = async () => {
    navigate("/signup");
  };

  let username = "";
  let pwd = "";
</script>

<div>
  <form>
    <p>Имя пользователя</p>
    <input type="text" bind:value={username} />
    <p>Пароль</p>
    <input type="password" bind:value={pwd} />
    <input type="button" value="Войти" on:click={handleLogin} />
    <input type="button" value="У меня нет аккаунта" on:click={handleSignUp} />
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

  input[type="button"] {
    width: 100%;
  }
</style>
