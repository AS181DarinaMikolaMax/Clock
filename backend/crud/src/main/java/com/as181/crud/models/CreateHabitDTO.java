package com.as181.crud.models;

public class CreateHabitDTO {
    private String name;

    public CreateHabitDTO(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

}
