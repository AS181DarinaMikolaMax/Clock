<script lang="ts">
  import { createEventDispatcher, getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { TAB_CONTROLLER_KEY } from "./Context.svelte";

  export let label: string;
  export let key: number;

  const tabViewController = getContext<Writable<number>>(TAB_CONTROLLER_KEY);
</script>

<div class="item-wrapper">
  <div class="wrapper-2" class:active={$tabViewController == key}>
    <div on:click={() => tabViewController.set(key)} class="item">
      {label}
    </div>
  </div>
</div>

<style>
  .item {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 24px;
    line-height: 29px;
  }
  .item-wrapper {
    display: flex;
    align-items: center;
  }
  .wrapper-2 {
    padding: 5px;
  }
  .active {
    font-weight: 600;
    border-bottom: 1px solid #242323;
  }
</style>
