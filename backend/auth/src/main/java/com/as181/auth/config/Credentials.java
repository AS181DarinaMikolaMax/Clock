package com.as181.auth.config;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class Credentials {

    private Map<String, String> details = new HashMap<>();
    {
        details.put("mtsurkan", "password");
        details.put("dbeley", "password");
        details.put("mkozachenko", "password");
        details.put("izhuravlyov", "password");

    };

    public String token = "c29iYWthMTc=";

    public boolean isAuthenticated(String login, String password) {
        return details.get(login) != null && details.get(login).equals(password);
    }
}