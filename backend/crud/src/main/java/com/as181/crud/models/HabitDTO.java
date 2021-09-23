package com.as181.crud.models;

import java.util.Date;

public class HabitDTO {

    public HabitDTO(String id, String name, Date endDate, Period period) {
        this.id = id;
        this.name = name;
        this.endDate = endDate;
        this.period = period;
    };

    private String id;
    private String name;
    private Date endDate;
    private Period period;

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Date getEndDate() {
        return endDate;
    }

    public Period getPeriod() {
        return period;
    }

}
