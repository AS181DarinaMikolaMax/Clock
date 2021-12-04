package com.as181.auth.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

import com.as181.auth.config.Credentials;
import com.as181.auth.models.LoginRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api")
public class AuthController {
    @Autowired
    private Credentials credentials;

    private static Map<String, String> forbiddenResponse = new HashMap<>();
    {
        forbiddenResponse.put("message", "You are not authenticated");
    }

    @PostMapping(path = "/login")
    @CrossOrigin()
    public ResponseEntity<Object> login(@RequestBody LoginRequest loginRequest) {
        // Get data from service layer into entityList.
        System.out.println("Request started");
        Map<String, String> response = new HashMap<String, String>();

        if (!credentials.isAuthenticated(loginRequest.getUsername(), loginRequest.getPassword()))
            return new ResponseEntity<Object>(forbiddenResponse, HttpStatus.FORBIDDEN);

        response.put("token", credentials.token);
        response.put("username", loginRequest.getUsername());

        return new ResponseEntity<Object>(response, HttpStatus.OK);
    }
}
