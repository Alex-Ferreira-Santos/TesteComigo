import React,{useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,ActivityIndicator, PermissionsAndroid} from 'react-native'
import MapView,{Marker} from 'react-native-maps'
import {styles} from '../styles/Map'
import Geolocation from 'react-native-geolocation-service'

interface CoordsProps{
    latitude: number
    longitude: number
}

export function Map(props: any) {
    const [hasLocationPermission, setHasLocationPermission] = useState(false);
    const [userPosition, setUserPosition] = useState<CoordsProps>();

    async function verifyLocationPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setHasLocationPermission(true);
        } else {
          setHasLocationPermission(false);
        }
      } catch (err) {
        console.warn(err);
      }
    }

    useEffect(() => {
        verifyLocationPermission();
        if (hasLocationPermission) {
          Geolocation.getCurrentPosition( position => {
              setUserPosition({latitude: position.coords.latitude, longitude: position.coords.longitude,});
            },
            error => {
              console.log(error.code, error.message);
            }
          );
        }
    }, [hasLocationPermission]);

    if(userPosition === undefined){
        return(
            <View style={styles.center}>
                <Text style={styles.loading}>Carregando</Text>
                <ActivityIndicator size='large' color='black'/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: userPosition.latitude,
                    longitude: userPosition.longitude,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
                style={styles.map}
            >
                <Marker coordinate={{latitude: userPosition.latitude, longitude:userPosition.longitude}} title='Você está aqui!'/>
            </MapView>
            <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('Profile')}>
                <Text style={styles.buttonText}>Ver perfil</Text>
            </TouchableOpacity>

        </View>
    )
}
