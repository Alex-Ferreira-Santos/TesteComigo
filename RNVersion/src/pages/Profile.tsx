import React,{useState,useContext,useEffect} from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import {styles} from '../styles/Profile'
import { UserContext } from '../Context/UserContext';
import { Auth0User } from 'react-native-auth0';


export function Profile(props:any){
    const [userData,setUserData] = useState<Auth0User<any>>()
    const {auth0,name,phone,email,accessToken} = useContext(UserContext)
    

    useEffect(()=>{
        auth0.auth.userInfo({token:accessToken}).then( val => {
            auth0.users(accessToken).getUser({id: val.sub}).then( val => {
                setUserData(val)
            }).catch( err => console.log(err))
        })
    },[])

    if( userData === undefined){
        return(
            <View style={styles.center}>
                <Text style={styles.loading}>Carregando</Text>
                <ActivityIndicator size='large' color='black'/>
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>
            <View style={styles.dataContainer}>
                <Text style={styles.subtitle}>Olá, {userData.userMetadata.name}</Text>
                <Text style={styles.subtitle}>Veja seus dados abaixo</Text>
                <Text style={styles.data}>E-mail: {userData.email}</Text>
                <Text style={styles.data}>Telefone: {userData.userMetadata.phone}</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={[styles.button,styles.exit]} onPress={()=>{
                    auth0.webAuth
                    .clearSession()
                    .then(() => {
                        props.navigation.navigate('HomePage')
                    })
                    .catch(error => {
                        console.log('Log out cancelled');
                    });
                }}>
                    <Text style={styles.buttonText}>Sair da Conta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('CreateAccount',{edit:true})}>
                    <Text style={styles.buttonText}>Editar Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,styles.edit]} onPress={()=>props.navigation.navigate('Map')}>
                    <Text style={styles.buttonText}>Voltar ao mapa</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}