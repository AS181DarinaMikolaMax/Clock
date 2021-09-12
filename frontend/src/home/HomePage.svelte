<script>
  import authState from "../core/store/authState";
</script>

<h1>Трекер привычек</h1>

<h2>Тут вы можете поставить цель для привычки и добиться ее</h2>
<p>В разработке...</p>
{#if $authState.token}
  <h2>Вы авторизованы как {$authState.username}</h2>
{:else}
  <h3>Что бы воспользоваться полным функционалом, войдите в систему</h3>
{/if}

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
