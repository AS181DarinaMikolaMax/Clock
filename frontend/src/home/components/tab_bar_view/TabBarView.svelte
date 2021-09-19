<script lang="ts">
  import { onMount, setContext } from "svelte";
  import { TAB_CONTROLLER_KEY } from "./Context.svelte";
  import type { TabBarItem } from "../../../types/Types.svelte";
  import HeaderItem from "./HeaderItem.svelte";
  import { writable } from "svelte/store";
  import TabBarHeader from "./TabBarHeader.svelte";

  export let items: TabBarItem[];

  const tabViewController = writable(0);

  setContext(TAB_CONTROLLER_KEY, tabViewController);
</script>

<div class="main">
  <TabBarHeader>
    {#each items as item, index}
      <HeaderItem label={item.label} key={index} />
    {/each}
  </TabBarHeader>
  <div class="content">
    <svelte:component this={items[$tabViewController].componet} />
  </div>
</div>

<style>
  .main {
    padding: 20pt 100pt;
  }
  @media (max-width: 640px) {
    .main {
      padding: 0pt 20pt;
    }
    .content {
      margin-top: 30pt;
    }
  }
</style>
