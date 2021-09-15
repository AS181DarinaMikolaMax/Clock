<script>
  import { createEventDispatcher } from "svelte";

  export let value;
  const dispatch = createEventDispatcher();
  const handleClick = (e) => dispatch("click", e);
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
