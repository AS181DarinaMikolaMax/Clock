package com.as181.crud.repository;

import java.util.List;

import com.as181.crud.models.HabitDTO;

public interface HabitRepository {
    public List<HabitDTO> getHabits();

    public HabitDTO updateHabit(String id, HabitDTO habit);

    public HabitDTO createHabit(String name);

}
