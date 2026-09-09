import { useState } from "react";
import { Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";


export default function Guesser() {

    // arvauksen tallentaminen stateen
    const [guess, setGuess] = useState(0);

    // arvauksien määrän tallentaminen stateen
    const [guesses, setGuesses] = useState<number[]>([]);

    // oikea vastaus
    const [correctAnsw, setCorrectAnsw] = useState(0);

    // viesti käyttäjälle
    const [message, setMessage] = useState("");


    const guessButton = () => {

        setGuesses([...guesses, guess]);

        // oikean vastauksen viesti
        if (guess === correctAnsw) {
            setMessage(`WOHOOO you guessed it! The number was  ${correctAnsw} and it took you ${guesses.length + 1} guesses!`)
        }

        // arvaus on pienempi kuin oikea vastaus
        if (guess < correctAnsw) {
            setMessage("Na a aaa 😕 Your guess was too low")
        }

        // arvaus on suurempi kuin oikea vastaus
        if (guess > correctAnsw) {
            setMessage("Noupp 🤯 Your guess was too low")
        }

    }



    return (
        // sallitaan avoinna olevan näppäimistön sulkeminen, kun käyttäjä painaa alueesta
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.components}>
                    {/* otsikkoteksti */}
                    <Text style={styles.headerText}>
                        Guesser game
                    </Text>

                    {/* "ohjeet" pelin pelaamiseen */}
                    <Text style={styles.infoText}>
                        Guess a number between 1-100
                    </Text>

                    {/* viesti */}
                    <Text style={styles.messageText}>
                        {message}
                    </Text>

                    {/* arvauksen syöttökenttä */}
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter a number"
                            placeholderTextColor={"black"}
                            inputMode="numeric"
                            textAlign="center"
                        />
                    </View>

                    {/* arvaus -näppäin */}
                    <View>
                        <Pressable onPress={guessButton}>
                            <Text style={styles.button}>
                                Make a guess!
                            </Text>
                        </Pressable>
                    </View>

                </View>
            </View>

        </TouchableWithoutFeedback>
    )

}

// tyylit
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#D8B4FE",
        borderWidth: 5,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    components: {
        flexDirection: "column",
        alignItems: "center",
        gap: 15
    },
    headerText: {
        fontSize: 25,
        fontWeight: "bold"
    },
    infoText: {
        fontSize: 17
    },
    messageText: {
        textAlign: "center"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    button: {
        backgroundColor: "black",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontWeight: "bold"
    }
})