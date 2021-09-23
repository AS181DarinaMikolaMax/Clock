<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import type { Habit } from "../../../core/models/habit";
  import CheckCircle from "./CheckCircle.svelte";

  export let habit: Habit;

  const dispatch = createEventDispatcher();
</script>

<div class="habit" on:click={(e) => dispatch("click", e)}>
  <div>{habit.name}</div>
  <CheckCircle value={habit.isDone} />
</div>

<style>
  .habit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10pt 20pt;
    font-weight: 600;
    font-size: 22px;
    border-bottom: 1px solid rgba(36, 35, 35, 0.4);
    cursor: pointer;
  }
</style>
