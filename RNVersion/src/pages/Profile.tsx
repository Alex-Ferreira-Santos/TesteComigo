import React,{useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {styles} from '../styles/Profile'
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({ domain: 'devalex.us.auth0.com', clientId: '2J2E6ovI6po2PTrJ4O3Wov9GtClXseMf' });

export function Profile(props:any){
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>
            <View style={styles.dataContainer}>
                <Text style={styles.subtitle}>Olá, Nome</Text>
                <Text style={styles.subtitle}>Veja seus dados abaixo</Text>
                <Text style={styles.data}>E-mail: email@gmail.com</Text>
                <Text style={styles.data}>Telefone: (21) 912345678</Text>
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