import CalculatorProvider from "@/app/contexts/calculatorProvider";
import { Stack } from "expo-router";

export default function CalculationStack() {
    return <CalculatorProvider>
        <Stack></Stack>
    </CalculatorProvider>
}