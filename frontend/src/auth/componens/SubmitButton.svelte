<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { ClickEvent } from "../../types/Types.svelte";

  export let value: string;

  const dispatch = createEventDispatcher();
  const handleClick = (e: ClickEvent) => dispatch("click", e);
</script>

<div class="button" on:click={handleClick}>
  <p class="button-text">{value}</p>
</div>

<style>
  .button {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 2px 4px 6px #692f95;
    border-radius: 90px;
    padding: 0pt 14pt;
    cursor: pointer;
  }
  .button-text {
    font-family: Montserrat;
    font-weight: bold;
    line-height: 0.5;
    font-size: 20px;

    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  @media (max-width: 640px) {
    .button-text {
      line-height: 0.3;
    }
    .button {
      margin-top: 15pt;
      padding: 0pt 50pt;
    }
  }
</style>
