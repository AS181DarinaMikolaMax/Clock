<script lang="ts" context="module">
  export type ClickEvent = MouseEvent & {
    currentTarget: EventTarget & HTMLDivElement;
  };
</script>
