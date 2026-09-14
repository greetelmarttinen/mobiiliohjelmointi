import { useState } from "react";
import { FlatList, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";


export default function Calculator() {

    // luodaan state ensimmäiselle numerolle ja asetetaan sen alkuarvo tyhjäksi
    const [firstNumber, setFirstNumber] = useState("");

    // luodaan state toiselle numerolle ja asetetaan sen alkuarvo tyhjäksi
    const [secondNumber, setSecondNumber] = useState("");

    // laskutoimitusten tulos
    const [result, setResult] = useState(0);

    // tallennetaan laskutoimitus historiaan
    const [history, setHistory] = useState<string[]>([]);

    const buttonPlus = () => {
        const sum = Number(firstNumber) + Number(secondNumber);
        setResult(sum);
        setHistory([...history, `${firstNumber} + ${secondNumber} = ${sum}`]);
        setFirstNumber("");
        setSecondNumber("");
    }

    const buttonMinus = () => {
        const diff = Number(firstNumber) - Number(secondNumber);
        setResult(diff);
        setHistory([...history, `${firstNumber} - ${secondNumber} = ${diff}`]);
        setFirstNumber("");
        setSecondNumber("");
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={
                {
                    backgroundColor: "lightgreen",
                    borderWidth: 5,
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: 370
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

                    <View>
                        <Text style={styles.historyText}>History:</Text>
                        <FlatList
                            data={history}
                            renderItem={({ item }) =>
                                <View>
                                    <Text>{item}</Text>
                                </View>
                            }
                        />
                    </View>


                </View>

            </View >
        </TouchableWithoutFeedback>

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
        width: 160,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: "center"
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
    },
    historyText: {
        fontWeight: "bold",
        paddingTop: 15
    }
})