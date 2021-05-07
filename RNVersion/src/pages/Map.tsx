import React,{useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,ActivityIndicator} from 'react-native'
import MapView,{Marker} from 'react-native-maps'
import {styles} from '../styles/Map'
//import {getCurrentPositionAsync,LocationObject,requestForegroundPermissionsAsync} from 'expo-location';

export function Map(props: any) {
    /*const [location, setLocation] = useState<LocationObject>();

    useEffect(() => {
        (async () => {
            let { status } = await requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }

            let location = await getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);
    if(location === undefined){
        return(
            <View style={styles.center}>
                <Text style={styles.loading}>Carregando</Text>
                <ActivityIndicator size='large' color='black'/>
            </View>
        )
    }*/
    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
                style={styles.map}
            >
                <Marker coordinate={{latitude: location.coords.latitude, longitude:location.coords.longitude}} title='Você está aqui!'/>
            </MapView>
            <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('Profile')}>
                <Text style={styles.buttonText}>Ver perfil</Text>
            </TouchableOpacity>

        </View>
    )
}
