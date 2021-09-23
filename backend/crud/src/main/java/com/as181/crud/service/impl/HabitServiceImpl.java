package com.as181.crud.service.impl;

import java.util.List;

import com.as181.crud.repository.HabitRepository;
import com.as181.crud.service.HabitService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.as181.crud.models.HabitDTO;

@Service
public class HabitServiceImpl implements HabitService {

    @Autowired
    private HabitRepository repository;

    @Override
    public List<HabitDTO> getAllHabits() {
        return repository.getHabits();
    }

    @Override
    public HabitDTO updateHabit(String id, HabitDTO habit) {
        return repository.updateHabit(id, habit);
    }
}
