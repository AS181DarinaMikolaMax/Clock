<script lang="ts">
  import { getContext, onMount } from "svelte";
  import { HabitsService } from "../../core/service/habitsService";

  import type { Habit } from "../../core/models/habit";
  import HabitsList from "./components/HabitsList.svelte";

  let habits: Habit[];
  const habitsService = getContext<HabitsService>(HabitsService);

  const loadHabits = async () => {
    habits = await habitsService.getMyHabits();
  };

  const handleSelectHabit = (e: CustomEvent<Habit>) => {
    const updatedHabit = e.detail;
    habits = habits.map((habit) =>
      habit.id == updatedHabit.id
        ? { ...updatedHabit, isDone: !updatedHabit.isDone }
        : habit
    );
    // loadHabits();
  };

  onMount(loadHabits);
</script>

<div class="main">
  <div>
    <HabitsList habits={habits ?? []} on:habitSelected={handleSelectHabit} />
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

  @media (max-width: 640px) {
    .main {
      border: none;
      background: none;
      box-shadow: none;
    }
  }
</style>
