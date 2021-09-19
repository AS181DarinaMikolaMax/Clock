<script lang="ts">
  let innerWidth: number;
</script>

<div class="header">
  {#if innerWidth > 800}
    <img src="/KekToDo/images/logoblack.png" width="200" alt="logo" />
  {/if}
  <slot />
</div>
<svelte:window bind:innerWidth />

<style>
  .header {
    margin-top: 20pt;
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
  }
</style>
