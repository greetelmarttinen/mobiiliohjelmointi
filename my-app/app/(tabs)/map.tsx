import { StyleSheet, Text, View } from "react-native";


export default function Map() {



    return (
        <View style={styles.container}>
            <View style={styles.components} >
                <Text style={styles.headerText}>
                    Search from map
                </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#d6f1aa",
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
    }
})