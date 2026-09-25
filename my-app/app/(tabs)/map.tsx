import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";


export default function Map() {

    // state, johon sijainti tallennetaan
    const [location, setLocation] = useState<Location.LocationObject | null>(null);

    useEffect(() => {
        // lupa sijainnin käyttämiseen
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                Alert.alert("No permission to get location")
                return;
            }
            const currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
        })();
    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.components} >
                <Text style={styles.headerText}>
                    Search from map
                </Text>
                {
                    // kun sovellus saa käyttäjältä luvan käyttää sijaintia,
                    // location muuttuu todeksi ja karttanäkymä renderöidään
                    location && (

                        <MapView
                            style={styles.mapView}
                            initialRegion={{
                                //käyttäjän koordinaatit
                                latitude: location.coords.latitude,
                                longitude: location?.coords.longitude,
                                // zoomaustason määrittely
                                latitudeDelta: 0.01,
                                longitudeDelta: 0.01
                            }}
                            showsUserLocation={true}
                        >
                        </MapView>
                    )}


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