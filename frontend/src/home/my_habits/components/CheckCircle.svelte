<script lang="ts">
  import { fly } from "svelte/transition";

  export let value: boolean;
</script>

<div class="check">
  {#if value}
    <img
      transition:fly={{ duration: 200 }}
      src="images/check.svg"
      alt="check"
      height="30"
      width="30"
    />
  {/if}
</div>

<style>
  .check {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 50pt;
    border: 3px solid rgba(36, 35, 35, 0.7);
  }
</style>
