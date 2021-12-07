<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import Arrow from "./Arrow.svelte";
  export let isActive: boolean = true;

  const dispatch = createEventDispatcher();
</script>

<div
  class="button"
  class:isActive
  on:click={(e) => {
    if (isActive) dispatch("click", e);
  }}
>
  <Arrow />
</div>

<style>
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #fbb397 -112.5%, #fd6f3a 191.5%);
    border: 1px solid rgba(141, 73, 47, 0.25);
    box-sizing: border-box;
    box-shadow: 0px 0px 20px rgba(141, 73, 47, 0.45);
    border-radius: 60px;
    width: 80px;
    height: 80px;
    cursor: pointer;
    opacity: 0.5;
  }
  .isActive {
    opacity: 1;
  }
</style>
