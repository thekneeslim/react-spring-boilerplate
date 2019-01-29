package com.experiment.api;

import org.junit.Test;

import static org.junit.Assert.*;

public class MyControllerTest {

    @Test
    public void shouldReturnDate() {
        MyController myController = new MyController();
        assertEquals(String.class, myController.home().getClass());
    }
}