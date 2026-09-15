import { FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

export default function CalculatorHistory() {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.headerText}>History:</Text>


                <FlatList
                    data={history}
                    renderItem={({ item }) =>
                        <View>
                            <Text>{item}</Text>
                        </View>
                    }
                />
            </View>
        </TouchableWithoutFeedback>

    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#7ec7a8",
        borderWidth: 5,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        fontSize: 25,
        fontWeight: "bold"
    },
    arrayItem: {
        textAlign: "center",
        fontSize: 17
    }
})

