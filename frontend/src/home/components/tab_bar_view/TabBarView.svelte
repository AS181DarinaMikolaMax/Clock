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

<TabBarHeader>
  {#each items as item, index}
    <HeaderItem label={item.label} key={index} />
  {/each}
</TabBarHeader>

<svelte:component this={items[$tabViewController].componet} />
