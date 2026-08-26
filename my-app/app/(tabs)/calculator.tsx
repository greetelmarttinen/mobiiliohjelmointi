import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";


export default function Calculator() {

    // luodaan state ensimmäiselle numerolle ja asetetaan sen alkuarvo tyhjäksi
    const [firstNumber, setFirstNumber] = useState("");

    // luodaan state toiselle numerolle ja asetetaan sen alkuarvo tyhjäksi
    const [secondNumber, setSecondNumber] = useState("");

    // laskutoimitusten tulos
    const [result, setResult] = useState(0);

    const buttonPlus = () => {
        const sum = Number(firstNumber) + Number(secondNumber);
        return setResult(sum);
    }

    const buttonMinus = () => {
        const diff = Number(firstNumber) - Number(secondNumber);
        return setResult(diff);
    }

    return (
        <View style={
            {
                backgroundColor: "lightgreen",
                borderWidth: 5,
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }
        }>
            <View style={
                {
                    flexDirection: "column",
                    alignItems: "center"
                }
            }>
                <View>
                    <Text style={styles.headerText}>
                        Calculator
                    </Text>
                </View>


                <View>
                    <Text style={styles.resultText}>
                        Result: {result}
                    </Text>
                </View>



                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter a number"
                        placeholderTextColor={"black"}
                        onChangeText={setFirstNumber}
                        inputMode="numeric"
                        value={firstNumber}
                    />
                </View>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter a number"
                        placeholderTextColor={"black"}
                        onChangeText={setSecondNumber}
                        inputMode="numeric"
                        value={secondNumber}
                    />
                </View>

                <View style={styles.buttonRow}>
                    <Pressable onPress={buttonPlus}>
                        <Text style={styles.button}>+</Text>
                    </Pressable>

                    <Pressable onPress={buttonMinus}>
                        <Text style={styles.button}>-</Text>
                    </Pressable>

                </View>

            </View>

        </View >


    )
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 25,
        fontWeight: "bold"
    },
    resultText: {
        fontSize: 20,
        color: "black"
    },
    // input -elementtien tyylitys
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    buttonRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12
    },
    button: {
        backgroundColor: "white",
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "black",
        fontSize: 50,
        fontWeight: "bold"
    }
})