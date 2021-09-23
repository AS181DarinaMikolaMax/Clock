<script lang="ts">
  import { getContext } from "svelte";
  import { AuthService } from "../../core/service/authService";
  const authService = getContext<AuthService>(AuthService);
</script>

<div>
  <input
    type="submit"
    value="Вийти (тимчасовий функціонал)"
    on:click={() => authService.logout()}
  />
</div>
