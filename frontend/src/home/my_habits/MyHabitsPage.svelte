<script lang="ts">
  import { getContext, onMount } from "svelte";
  import { HabitsService } from "../../core/service/habitsService";

  import type { Habit } from "../../core/models/habit";
  import HabitsList from "./components/HabitsList.svelte";
  import { fade } from "svelte/transition";

  let habits: Habit[];
  const habitsService = getContext<HabitsService>(HabitsService);

  const loadHabits = async () => {
    habits = await habitsService.getMyHabits();
  };

  const updateHabit = async (habit: Habit) => {
    await habitsService.changeHabitStatus(habit);
    await loadHabits();
  };

  const handleSelectHabit = (e: CustomEvent<Habit>) => {
    const updatedHabit = e.detail;

    habits = habits.map((habit) =>
      habit.id == updatedHabit.id ? updatedHabit : habit
    );

    updateHabit(updatedHabit);
  };

  onMount(loadHabits);
</script>

<div class="main">
  <div class="container">
    <HabitsList habits={habits ?? []} on:habitSelected={handleSelectHabit} />
    <div class="enot-wrapper">
      <img src="images/enot1.png" alt="enot1" />
      <div class="enot-talk" transition:fade>
        {habits?.some((habit) => !habit.isDone)
          ? "Сьогодні тобі варто ще зробити вправи"
          : "Все зроблено, молодець!"}
      </div>
    </div>
  </div>
</div>

<style>
  .main {
    height: 500px;
    width: 100%;
    background: rgba(237, 228, 244, 0.75);
    border: 1px solid rgba(36, 35, 35, 0.4);
    box-sizing: border-box;
    box-shadow: inset 2px 3px 10px rgba(0, 0, 0, 0.25);
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .enot-wrapper {
    margin: 20pt 0;
  }

  .enot-talk {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
  }

  @media (max-width: 640px) {
    .main {
      border: none;
      background: none;
      box-shadow: none;
    }
  }
</style>
