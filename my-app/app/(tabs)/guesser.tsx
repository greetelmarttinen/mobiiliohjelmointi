import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";


export default function Guesser() {

    // arvauksen tallentaminen stateen

    // arvauksien määrä



    return (
        // sallitaan avoinna olevan näppäimistön sulkeminen, kun käyttäjä painaa alueesta
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.headerText}>
                        Guesser game
                    </Text>
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
    headerText: {
        fontSize: 25,
        fontWeight: "bold"
    }
})