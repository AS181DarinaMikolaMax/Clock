<script lang="ts">
  export let value: string;
  export let placeholder: string;
  export let type: "password" | null = null;
</script>

{#if type === "password"}
  <input type="password" {placeholder} bind:value />
{:else}
  <input type="text" {placeholder} bind:value />
{/if}

<style>
  input {
    border: none;
    margin-bottom: 12pt;
    margin-top: 2pt;
    border-bottom: 1px solid gray;
    width: 100%;
    background-color: #e7d7f3;
    outline: none;
    border-radius: 20px;
    height: 45pt;
    font-size: 20px;
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
</style>
