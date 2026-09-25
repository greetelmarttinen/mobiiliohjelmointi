import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

// tyypitetään repository -objekti
type Repository = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
};

export default function Recipes() {

    // määritellään avainsanan state (aluksi tyhjäksi)
    const [keyword, setKeyword] = useState("");

    const [repositories, setRepositories] = useState<Repository[]>([]);



    // hakutoiminto funktio
    const handleFetch = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyword}`)
            .then(response => {
                if (!response.ok)
                    throw new Error("Error in fetch:" + response.statusText);
                return response.json()
            })
            .then(data => setRepositories(data.items))
            .catch(err => console.error(err));

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
                        value={keyword}
                        onChangeText={text => setKeyword(text)}
                    />
                </View>

                <View>
                    {/** hakupainike */}
                    <Pressable onPress={handleFetch}>
                        <Text style={styles.button}>
                            Find
                        </Text>
                    </Pressable>
                </View>

                <View>
                    {/** flatlist haetusta datasta */}
                    <FlatList
                        data={repositories}
                        renderItem={({ item }) =>
                            <View>
                                <Text>
                                    {item.strMealThumb}
                                </Text>
                                <Text>
                                    {item.strMeal}
                                </Text>
                            </View>
                        }
                    />
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





