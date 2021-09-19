<script>
  import CalendarPage from "./calendar/CalendarPage.svelte";
  import TabBarView from "./components/tab_bar_view/TabBarView.svelte";
  import HomePage from "./my_habits/MyHabitsPage.svelte";
  import ProfilePage from "./profile/ProfilePage.svelte";
</script>

<div>
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
