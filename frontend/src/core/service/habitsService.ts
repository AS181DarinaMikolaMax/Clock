import habitsApi from "../api/habitsApi";
import { Habit } from "../models/habit";

export class HabitsService {
  _api = habitsApi;

  async getMyHabits(): Promise<Habit[]> {
    const response: [] = await this._api.get("/habits");
    return response.map(Habit.fromJson);
  }

  async changeHabitStatus(habit: Habit) {
    await this._api.put(`/habits/${habit.id}`, { body: JSON.stringify(habit) });
  }

  async createHabit(name: string) {
    await this._api.post(`/habits`, {
      body: JSON.stringify(Habit.onlyNamed(name)),
    });
  }
}
