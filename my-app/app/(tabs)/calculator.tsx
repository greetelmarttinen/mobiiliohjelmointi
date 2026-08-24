import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";


export default function Calculator() {

    // luodaan state ja asetetaan sen alkuarvo tyhjäksi
    const [text, setText] = useState("");

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
            <View style={
                {
                    flexDirection: "column",
                    alignItems: "center"
                }
            }>
                <View>
                    <Text style={
                        {
                            fontSize: 25,
                            fontWeight: "bold"
                        }
                    }>
                        Calculator
                    </Text>
                </View>


                <View>
                    <Text style={
                        {
                            fontSize: 18,
                            color: "black"
                        }
                    }>
                        Result:
                    </Text>
                </View>



                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter a number"
                        placeholderTextColor={"black"}
                        onChangeText={text => setText(text)}
                        value={text}
                    />
                </View>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter a number"
                        placeholderTextColor={"black"}
                        onChangeText={text => setText(text)}
                        value={text}
                    />
                </View>







            </View>





        </View >


    )
}

const styles = StyleSheet.create({
    // input -elementtien tyylitys
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
})