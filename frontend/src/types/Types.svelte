<script lang="ts" context="module">
  export type ClickEvent = MouseEvent & {
    currentTarget: EventTarget & HTMLDivElement;
  };

  export type TabBarItem = {
    label: string;
    componet: any;
  };
</script>
