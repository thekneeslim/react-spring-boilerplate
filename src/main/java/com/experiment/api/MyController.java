package com.experiment.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class MyController {

    @GetMapping("/api/hello")
    public String home() {
        return String.format("Time now: %s", new Date());
    }
}
