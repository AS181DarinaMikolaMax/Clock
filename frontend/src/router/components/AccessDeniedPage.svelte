<script>
  import { Link } from "svelte-routing";
  import { Routes } from "../AppRouter.svelte";
</script>

<h1>
  Protected route. Access denied. <Link to={Routes.LOGIN}>Sign in</Link> and try
  again
</h1>
