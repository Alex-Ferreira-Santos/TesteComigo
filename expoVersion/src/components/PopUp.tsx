import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {styles} from '../styles/PopUp'

interface PopUpProps{
    name: string;
    navigate: (string:string) => void
}

export function PopUp(props:PopUpProps){
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.message}>Usuário {props.name} criado com sucesso</Text>
                <TouchableOpacity onPress={()=>props.navigate('HomePage')} style={styles.button}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}