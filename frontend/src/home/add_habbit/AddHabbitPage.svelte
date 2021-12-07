<script lang="ts">
  import { getContext } from "svelte";
  import { navigate } from "svelte-routing";
  import { fly, fade } from "svelte/transition";
  import LoginForm from "../../auth/componens/LoginForm.svelte";
  import { HabitsService } from "../../core/service/habitsService";

  import { Routes } from "../../router/AppRouter.svelte";

  import ArrowButton from "./components/ArrowButton.svelte";
  import ExtendedInputField from "./components/ExtendedInputField.svelte";
  import TextField from "./components/TextField.svelte";

  let habitName = "";
  const service = getContext<HabitsService>(HabitsService);
</script>

<div
  class="main"
  in:fly={{ duration: 1000, y: 1000 }}
  out:fly={{ duration: 2000, y: -1000 }}
>
  <div class="container">
    <div class="title">Add habbit</div>
    <TextField placeholder="Назва" bind:value={habitName} />
    <ExtendedInputField placeholder="Тривалість" value={null} />
    <ExtendedInputField placeholder="Частота" value={null} />
    <div class="btn-wrapper">
      <ArrowButton
        isActive={habitName.length > 1}
        on:click={async () => {
          await service.createHabit(habitName);
          habitName = "";
          navigate(Routes.HOME);
        }}
      />
    </div>
  </div>
</div>

<style>
  .btn-wrapper {
    display: flex;
    justify-content: center;
  }
  .title {
    margin-bottom: 20pt;
    font-size: 20pt;
  }
  .main {
    display: flex;
    justify-content: center;
  }
  .container {
    align-self: center;
    width: 50%;
  }
</style>
