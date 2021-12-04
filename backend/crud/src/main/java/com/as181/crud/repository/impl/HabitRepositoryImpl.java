package com.as181.crud.repository.impl;

import java.util.*;

import com.as181.crud.models.HabitDTO;
import com.as181.crud.models.Period;
import com.as181.crud.repository.HabitRepository;

import org.springframework.stereotype.Repository;

@Repository
public class HabitRepositoryImpl implements HabitRepository {

    private static Map<String, HabitDTO> dataSource = new HashMap<String, HabitDTO>();
    {
        dataSource.put("1", new HabitDTO("1", "Get pills", new Date(), Period.day, false));
        dataSource.put("2", new HabitDTO("2", "Do tasks", new Date(), Period.day, true));
        dataSource.put("3", new HabitDTO("3", "Read article", new Date(), Period.day, true));

    }

    @Override
    public List<HabitDTO> getHabits() {
        return new ArrayList<>(dataSource.values());
    }

    @Override
    public HabitDTO updateHabit(String id, HabitDTO habit) {
        dataSource.put(id, habit);
        return dataSource.get(id);
    }
}
