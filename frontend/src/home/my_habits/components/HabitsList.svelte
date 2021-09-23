<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import type { Habit } from "../../../core/models/habit";
  import AddHabitButton from "./AddHabitButton.svelte";
  import HabitItem from "./HabitItem.svelte";

  export let habits: Habit[];

  const dispatch = createEventDispatcher();

  const handleClick = (habit: Habit) => () => {
    dispatch("habitSelected", { ...habit, isDone: !habit.isDone });
  };
</script>

<div class="table">
  {#each habits as habit}
    <HabitItem {habit} on:click={handleClick(habit)} />
  {/each}
  <div class="button-wrapper">
    <AddHabitButton />
  </div>
</div>

<style>
  .table {
    display: flex;
    flex-direction: column;
    background-color: rgb(209, 158, 245, 0.5);
    margin: 30pt 0;
    margin-left: 60pt;
    margin-right: 20pt;
    border-radius: 50px;
    padding: 10pt 0;
    width: 100%;
  }
  .button-wrapper {
    display: flex;
    justify-content: center;
  }
</style>
