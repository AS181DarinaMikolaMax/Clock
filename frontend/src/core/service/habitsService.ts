import habitsApi from "../api/habitsApi";
import { Habit } from "../models/habit";

export class HabitsService {
  _api = habitsApi;

  async getMyHabits(): Promise<Habit[]> {
    const response = (await this._api.get("/habits")) as [];
    return response.map(Habit.fromJson);
  }
}
