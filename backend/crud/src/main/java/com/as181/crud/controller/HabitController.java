package com.as181.crud.controller;

import java.util.List;
import java.util.Map;

import com.as181.crud.service.HabitService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.as181.crud.models.HabitDTO;

@RestController
@RequestMapping("/habits")
public class HabitController {

    @Autowired
    private HabitService service;

    @GetMapping
    @CrossOrigin
    public ResponseEntity<List<HabitDTO>> login() {
        // Get data from service layer into entityList.

        final List<HabitDTO> habits = service.getAllHabits();

        return new ResponseEntity<List<HabitDTO>>(habits, HttpStatus.OK);
    }

}
