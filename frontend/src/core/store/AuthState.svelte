<script context="module" lang="ts">
  import { writable } from "svelte/store";

  const initialState = {
    token: localStorage.getItem("token"),
  };

  export const authState = writable(initialState);
</script>
