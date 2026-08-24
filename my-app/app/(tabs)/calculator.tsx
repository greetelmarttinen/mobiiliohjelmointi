import { Text, View } from "react-native";

export default function Calculator() {

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
            <Text style={
                {
                    fontSize: 25,
                    fontWeight: "bold"
                }
            }>
                Calculator
            </Text>
        </View>
    )
}