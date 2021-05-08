import React,{useState,useContext} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {styles} from '../styles/Profile'
import Auth0 from 'react-native-auth0';
import { UserContext } from '../Context/UserContext';

const auth0 = new Auth0({ domain: 'devalex.us.auth0.com', clientId: '2J2E6ovI6po2PTrJ4O3Wov9GtClXseMf' });

export function Profile(props:any){
    const {auth0,name,phone,email,accessToken} = useContext(UserContext)
    auth0.auth.userInfo({token:accessToken}).then( val => {
        auth0.users(accessToken).getUser({id: val.sub}).then( val => console.log(val)).catch( err => console.log(err))
    })
    fetch(`https://devalex.us.auth0.com/api/v2/userinfo`,{headers:{authorization: `Bearer ${accessToken}`}}).then(response => response.json()).then( val => console.log(val))
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>
            <View style={styles.dataContainer}>
                <Text style={styles.subtitle}>Olá, {name}</Text>
                <Text style={styles.subtitle}>Veja seus dados abaixo</Text>
                <Text style={styles.data}>E-mail: {email}</Text>
                <Text style={styles.data}>Telefone: {phone}</Text>
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