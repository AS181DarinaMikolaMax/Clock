package com.as181.crud.controller;

import java.util.List;

import com.as181.crud.service.HabitService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.as181.crud.models.HabitDTO;

@RestController
@CrossOrigin
@RequestMapping("/api/habits")
public class HabitController {

    @Autowired
    private HabitService service;

    @GetMapping
    public ResponseEntity<List<HabitDTO>> getHabits() {
        final List<HabitDTO> habits = service.getAllHabits();
        return new ResponseEntity<List<HabitDTO>>(habits, HttpStatus.OK);
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<HabitDTO> updateHabit(@PathVariable String id, @RequestBody HabitDTO habit) {
        System.out.println("Request started");
        final HabitDTO updatedHabit = service.updateHabit(id, habit);
        System.out.println("Request finished");

        return new ResponseEntity<HabitDTO>(updatedHabit, HttpStatus.OK);
    }

}
