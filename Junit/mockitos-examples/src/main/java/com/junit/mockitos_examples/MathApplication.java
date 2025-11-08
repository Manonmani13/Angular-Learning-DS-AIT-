package com.junit.mockitos_examples;

public class MathApplication {
    private CalculatorService calcService;

    public void setCalculatorService(CalculatorService calcService) {
        this.calcService = calcService;
    }

    public int add(int a, int b) {
        return calcService.add(a, b);
    }
}
