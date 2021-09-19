<script lang="ts">
  import { navigate } from "svelte-routing";
  import { Routes } from "../router/AppRouter.svelte";

  import { AuthService } from "../core/service/AuthService.svelte";
  import { BarLoader } from "svelte-loading-spinners";
  import SignUpButton from "./componens/SignUpButton.svelte";
  import LoginForm from "./componens/LoginForm.svelte";
  import { getContext } from "svelte";

  const authServise = getContext<AuthService>(AuthService);

  const handleLogin = async ({ detail: { username, password } }) => {
    isLoading = true;
    await authServise.login(username, password);
    isLoading = false;
    navigate(Routes.HOME);
  };

  const handleSignUp = async () => {
    navigate(Routes.SIGNUP);
  };

  let isLoading = false;
</script>

<div class="main">
  <div class="container">
    <div class="logo">
      <img src="/KekToDo/images/logo.png" alt="logo" />
    </div>
    <div class="form-wrapper">
      <LoginForm on:login={handleLogin} />
    </div>
    <SignUpButton value="У мене немає аккаунту" on:click={handleSignUp} />
    <div class="loading-wrapper">
      {#if isLoading}
        <BarLoader size="90" color="rgb(145, 87, 187)" />
      {/if}
    </div>
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

  .form-wrapper {
    display: flex;
    justify-content: center;
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
  .loading-wrapper {
    display: flex;
    justify-content: center;
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
    .container {
      padding: 50pt;
    }

    img {
      width: 80%;
    }
  }
</style>
