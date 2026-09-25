import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

// tyypitetään repository -objekti
type Repository = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
};

export default function Recipes() {

    const handleFetch = () => {

    }


    return (
        <View style={styles.container}>
            <View style={styles.components}>
                <Text style={styles.headerText}>
                    Recipe search
                </Text>
                <View>
                    {/** hakukenttä */}
                    <TextInput
                        style={styles.input}
                        placeholder="Enter an ingredient..."
                        placeholderTextColor={"black"}
                        textAlign="center"
                    //value={keyword}
                    //onChangeText={text => setKeyword(text)}
                    />
                </View>

                <View>
                    <Pressable onPress={handleFetch}>
                        <Text style={styles.button}>
                            Find
                        </Text>
                    </Pressable>
                </View>

            </View>


        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e6a28a",
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
    input: {
        height: 40,
        width: 160,
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





