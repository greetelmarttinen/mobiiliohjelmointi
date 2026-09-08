import { Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";


export default function Shoppinglist() {

    const addButton = () => {

    }

    const clearButton = () => {

    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.components}>
                    <Text style={styles.headerText}>
                        Shoppinglist
                    </Text>

                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Add item "
                            placeholderTextColor={"black"}
                            textAlign="center"
                        />
                    </View>

                    <View style={styles.buttonRow}>
                        <Pressable onPress={addButton}>
                            <Text style={styles.button}>
                                Add
                            </Text>
                        </Pressable>
                        <Pressable onPress={clearButton}>
                            <Text style={styles.button}>
                                Clear
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
        backgroundColor: "#98d6ff",
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
        fontWeight: "bold",
        color: "black"
    },
    input: {
        height: 40,
        width: 160,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    buttonRow: {
        flexDirection: "row",
        gap: 10
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