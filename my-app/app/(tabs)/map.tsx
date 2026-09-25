import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";


export default function Map() {
    const [region, setRegion] = useState({
        latitude: 60.200692,
        longitude: 24.934302,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
    })


    return (
        <View style={styles.container}>
            <View style={styles.components} >
                <Text style={styles.headerText}>
                    Search from map
                </Text>
                <MapView
                    style={styles.mapView}
                    region={region}
                >

                    <Marker
                        coordinate={{
                            latitude: 60.201373,
                            longitude: 24.934041
                        }}
                        title="Haaga-Helia"
                    />
                </MapView>



            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#d6f1aa",
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
    mapView: {
        width: 370,
        height: 570
    }
})