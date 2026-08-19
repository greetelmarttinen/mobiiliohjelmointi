import { Text, View } from "react-native";

export default function DemoScreen() {
    return (
        <View style={
            {
                backgroundColor: "pink",
                borderWidth: 5,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                gap: 15
            }
        }>
            <Text style={{ fontSize: 22, color: 'black', fontStyle: 'italic', fontWeight: 'bold' }}>
                I did this myself! :3
            </Text>
        </View>
    )
}