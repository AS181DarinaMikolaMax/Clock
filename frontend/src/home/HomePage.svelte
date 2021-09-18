<script>
  import authState from "../core/store/authState";
</script>

<h1>Трекер привычек</h1>

<h2>Тут вы можете поставить цель для привычки и добиться ее</h2>
<p>В разработке...</p>
{#if $authState.token}
  <h2>Вы авторизованы с токеном {$authState.token}</h2>
{:else}
  <h3>Что бы воспользоваться полным функционалом, войдите в систему</h3>
{/if}

<style>
  h1 {
    display: flex;
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
    justify-content: center;
  }
</style>
