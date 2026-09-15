import { useRouter } from "expo-router";
import { useContext } from "react";
import { FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { CalculatorContext } from "../../contexts/calculatorProvider";

export default function CalculatorHistory() {

    // asetetaan historialle state
    const { history, setHistory } = useContext(CalculatorContext);

    const router = useRouter();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.headerText}>History:</Text>


                <FlatList
                    data={history}
                    renderItem={({ item }) =>
                        <View>
                            <Text>{item.a} {item.op} {item.b} = {item.result}</Text>
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

