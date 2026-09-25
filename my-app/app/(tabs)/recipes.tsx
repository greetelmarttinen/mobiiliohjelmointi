import { useState } from "react";
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

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

    // lisätään loading state, jolla voidaan seurata hakutoiminnon etenemistä
    const [loading, setLoading] = useState(false);

    // hakutoiminto funktio
    const handleFetch = () => {
        // asetetaan lataustoiminto true:ksi ennen kuin pyyntö suoritetaan
        setLoading(true);

        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyword}`)
            .then(response => {
                if (!response.ok)
                    throw new Error("Error in fetch:" + response.statusText);
                return response.json()
            })
            .then(data => setRepositories(data.items))
            .catch(err => console.error(err))
            // muutetaan lataus -state false:ksi, kun pyyntö on suoritettu
            .finally(() => setLoading(false));

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
                    {/** ehdollinen renderöinti ActivityIndicator -komponentin näyttämiseen */}
                    {
                        loading ?
                            <ActivityIndicator size="large" />
                            :

                            // flatlist haetusta datasta
                            < FlatList
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
                    }
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
        alignItems: "center"
    },
    components: {
        flexDirection: "column",
        alignItems: "center",
        gap: 15,
        marginTop: 150
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





