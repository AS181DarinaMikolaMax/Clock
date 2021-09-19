<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { ClickEvent } from "../../types/Types.svelte";

  export let value: string;

  const dispatch = createEventDispatcher();
  const handleClick = (e: ClickEvent) => dispatch("click", e);
</script>

<div class="button" on:click={handleClick}>
  <div class="button-text">
    {value}
  </div>
</div>

<style>
  .button {
    cursor: pointer;
    padding-top: 20pt;
  }
  .button-text {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 29px;
    letter-spacing: 0.02em;
    color: #fff;
  }
</style>
