import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";


export default function Calculator() {

    // luodaan state ja asetetaan sen alkuarvo tyhjäksi
    const [firstNumber, setFirstNumber] = useState("");

    // luodaan state ja asetetaan sen alkuarvo tyhjäksi
    const [secondNumber, setSecondNumber] = useState("");

    const buttonPlus = () => {
        return (
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    { backgroundColor: pressed ? 'darkred' : 'lightgray' },
                ]}
                onPress={() => {

                }}
            >
                <Text style={styles.buttonText}>+</Text>

            </Pressable>
        );

    }

    const buttonMinus = () => {

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
                    <Text style={
                        {
                            fontSize: 25,
                            fontWeight: "bold"
                        }
                    }>
                        Calculator
                    </Text>
                </View>


                <View>
                    <Text style={
                        {
                            fontSize: 18,
                            color: "black"
                        }
                    }>
                        Result:
                    </Text>
                    <Text>

                    </Text>
                </View>



                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter a number"
                        placeholderTextColor={"black"}
                        onChangeText={firstNumber => setFirstNumber(firstNumber)}
                        value={firstNumber}
                    />
                </View>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter a number"
                        placeholderTextColor={"black"}
                        onChangeText={secondNumber => setSecondNumber(secondNumber)}
                        value={secondNumber}
                    />
                </View>

                <View style={
                    {
                        flexDirection: "row",
                        alignItems: "center"
                    }
                }>
                    <Button
                        onPress={buttonPlus}
                        title="+"
                        color={"black"}
                    >
                    </Button>

                    <Button
                        onPress={buttonMinus}
                        title="-"
                        color={"black"}
                    >
                    </Button>

                </View>




            </View>





        </View >


    )
}

const styles = StyleSheet.create({
    // input -elementtien tyylitys
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold"
    }
})