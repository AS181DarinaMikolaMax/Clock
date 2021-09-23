<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import type { Habit } from "../../../core/models/habit";
  import HabitItem from "./HabitItem.svelte";

  export let habits: Habit[];

  const dispatch = createEventDispatcher();

  const handleClick = (habit: Habit) => () => {
    dispatch("habitSelected", habit);
  };
</script>

<div class="table">
  {#each habits as habit}
    <HabitItem {habit} on:click={handleClick(habit)} />
  {/each}
</div>

<style>
  .table {
    display: flex;
    flex-direction: column;
    background-color: rgb(209, 158, 245, 0.5);
    height: 400px;
    width: 700px;
    margin: 30pt 60pt;
    border-radius: 50px;
    padding: 10pt 0;
  }
</style>
