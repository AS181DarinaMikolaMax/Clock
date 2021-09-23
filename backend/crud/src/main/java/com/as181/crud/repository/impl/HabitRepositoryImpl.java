package com.as181.crud.repository.impl;

import java.util.*;

import com.as181.crud.models.HabitDTO;
import com.as181.crud.models.Period;
import com.as181.crud.repository.HabitRepository;

import org.springframework.stereotype.Repository;

@Repository
public class HabitRepositoryImpl implements HabitRepository {

    private Map<String, HabitDTO> dataSource = new HashMap<String, HabitDTO>();
    {
        dataSource.put("1", new HabitDTO("1", "Прийняти пигулки", new Date(), Period.day));
        dataSource.put("2", new HabitDTO("2", "Зробити вправи", new Date(), Period.day));
        dataSource.put("3", new HabitDTO("3", "Прочитати статтю", new Date(), Period.day));

    }

    @Override
    public List<HabitDTO> getHabits() {
        return new ArrayList<>(dataSource.values());
    }
}
