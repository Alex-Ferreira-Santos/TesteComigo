import React from 'react';
import {View,Text,Image,TextInput,TouchableOpacity} from 'react-native'
import {styles} from '../styles/HomePage'
import Logo from '../img/logo.png'

export function HomePage(){
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={Logo} style={styles.image}/>
                <Text style={styles.legend}>Veja sua posição atual no mapa!</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.title}>Faça Login para continuar!</Text>
                <View style={styles.line}/>
                <View style={styles.field}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput style={styles.input} placeholder='Digite seu e-mail aqui' placeholderTextColor='#979797'/>
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput style={styles.input} placeholder='Digite sua senha aqui' placeholderTextColor='#979797' secureTextEntry={true}/>
                </View>
                <View style={styles.line}/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>
                <Text style={styles.account}>Não tem uma conta? clique aqui para criar</Text>
            </View>
        </View>
    )
}