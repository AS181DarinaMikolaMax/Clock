<script>
  export let value;
  export let placeholder;
  export let type;
</script>

{#if type === "password"}
  <input type="password" {placeholder} bind:value />
{:else}
  <input type="text" {placeholder} bind:value />
{/if}

<style>
  input {
    border: none;
    margin-bottom: 20pt;
    border-bottom: 1px solid gray;
    width: 100%;
    outline: none;
  }
</style>
