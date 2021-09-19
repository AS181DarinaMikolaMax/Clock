<script>
  import CalendarPage from "./calendar/CalendarPage.svelte";
  import TabBarView from "./components/tab_bar_view/TabBarView.svelte";
  import HomePage from "./my_habits/MyHabitsPage.svelte";
  import ProfilePage from "./profile/ProfilePage.svelte";
</script>

<div class="main">
  <TabBarView
    items={[
      {
        label: "Мої звички",
        componet: HomePage,
      },
      {
        label: "Календар",
        componet: CalendarPage,
      },
      {
        label: "Профіль",
        componet: ProfilePage,
      },
    ]}
  />
</div>

<style>
  .main {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background: url(/KekToDo/images/background-home.png);
    background-size: cover;
  }
</style>
