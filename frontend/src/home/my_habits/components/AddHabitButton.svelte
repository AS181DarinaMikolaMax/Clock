<script>
  import { Link } from "svelte-routing";
  import { Routes } from "../../../router/AppRouter.svelte";
</script>

<Link to={Routes.ADD_HABBIT}>
  <div class="button">
    <div class="label">Додати звичку</div>
  </div>
</Link>

<style>
  .button {
    margin: 40pt 0;
    padding: 10pt 60pt;
    background: #491472;
    box-shadow: 0px 8px 40px #43215c;
    border-radius: 50px;
    cursor: pointer;
  }
  .label {
    font-size: 28px;
    font-weight: 500;
    color: white;
  }
</style>
