package com.as181.crud.service;

import java.util.List;

import com.as181.crud.models.CreateHabitDTO;
import com.as181.crud.models.HabitDTO;

public interface HabitService {
    public List<HabitDTO> getAllHabits();

    public HabitDTO updateHabit(String id, HabitDTO habit);

    public HabitDTO createHabit(HabitDTO habit);

}
