<script>
  import { getContext } from "svelte";

  import { navigate } from "svelte-routing";
  import { routes } from "../router/AppRouter.svelte";

  import AuthService from "../core/service/authService";
  import { BarLoader } from "svelte-loading-spinners";
  import TextField from "./componens/TextField.svelte";
  import SubmitButton from "./componens/SubmitButton.svelte";
  import SignUpButton from "./componens/SignUpButton.svelte";

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

<div class="main">
  <div class="container">
    <div class="logo">
      <img src="/KekToDo/images/logo.png" alt="logo" />
    </div>
    <div class="form-wrapper">
      <form autocomplete="off">
        <TextField
          class="text-input"
          bind:value={username}
          placeholder="Ім'я користувача"
        />
        <TextField
          type="password"
          class="text-input"
          bind:value={pwd}
          placeholder="Пароль"
        />

        <div class="button-wrapper">
          <SubmitButton value="Увійти" on:click={handleLogin} />
        </div>

        {#if isLoading}
          <BarLoader size="90" color="rgb(145, 87, 187)" />
        {/if}
      </form>
    </div>
    <SignUpButton value="У мене немає аккаунту" on:click={handleSignUp} />
  </div>
</div>

<style>
  .main {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background: url(/KekToDo/images/background.png);
    background-size: cover;
    background-color: #33174a;
  }

  .button-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .form-wrapper {
    display: flex;
    justify-content: center;
  }
  form {
    display: flex;
    align-items: start;
    align-self: stretch;
    background-color: rgba(227, 193, 252, 0.6);
    padding: 10pt 50pt;
    border-radius: 35px;
    flex-direction: column;
    margin-bottom: auto;
  }
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }

  img {
    width: 15%;
  }

  .logo {
    margin-bottom: 10pt;
  }
  @media (max-width: 640px) {
    .main {
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      background: url(/KekToDo/images/background-mob.png);
      background-size: cover;
      background-color: #33174a;
    }
    form {
      padding: 30pt 40pt;
    }
    .container {
      padding: 50pt;
    }

    img {
      width: 80%;
    }
  }
</style>
