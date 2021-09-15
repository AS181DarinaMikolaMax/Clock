<script>
  import TextField from "./TextField.svelte";
  import SubmitButton from "./SubmitButton.svelte";

  import { createEventDispatcher } from "svelte";

  let username;
  let password;

  const dispatch = createEventDispatcher();
  const handleLogin = () => dispatch("login", { username, password });
</script>

<form autocomplete="off">
  <TextField
    class="text-input"
    bind:value={username}
    placeholder="Ім'я користувача"
  />
  <TextField
    type="password"
    class="text-input"
    bind:value={password}
    placeholder="Пароль"
  />

  <div class="button-wrapper">
    <SubmitButton value="Увійти" on:click={handleLogin} />
  </div>
</form>

<style>
  .button-wrapper {
    display: flex;
    width: 100%;
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

  @media (max-width: 640px) {
    form {
      padding: 30pt 40pt;
    }
  }
</style>
