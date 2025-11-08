package com.junit.mockitos_examples;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)

public class CalcService1Test {
      @Mock
    private CalculatorService calculatorService; // mock dependency

    @InjectMocks
    private MathApplication mathApplication;     // class under test

     @Test
    void tesetCalc() {
        when(calculatorService.add(10, 20)).thenReturn(30);

        assertEquals(30, mathApplication.add(10, 20));

        verify(calculatorService).add(10, 20);
    }
}cd
