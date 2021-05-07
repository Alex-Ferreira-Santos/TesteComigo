import React from 'react';
import {View,Text,StyleSheet} from 'react-native'
import MapView from 'react-native-maps'

export function Map() {
    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: -22.8766101315794,
                    longitude: -43.4218955039978,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
                style={styles.map}
            />
            <Text>Mapa</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
