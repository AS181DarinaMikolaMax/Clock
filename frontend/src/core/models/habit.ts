import type { Period } from "./period";

export class Habit {
  name: string;
  id: string;
  endDate: Date;
  period: Period;
  isDone: boolean;

  static fromJson(json: { [k in string]: any }): Habit {
    const name = json["name"]!;
    const id = json["id"]!;
    const endDate = new Date(json["endDate"]!);
    const period = json["period"]!;
    const isDone = json["isDone"]!;

    return {
      id,
      name,
      endDate,
      period,
      isDone,
    };
  }
}
