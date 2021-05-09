import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {styles} from '../styles/PopUp'

interface PopUpProps{
    navigate: (string:string,object:object) => void
    message: string,
    page: string
}

export function PopUp(props:PopUpProps){
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.message}>{props.message}</Text>
                <TouchableOpacity onPress={()=>props.navigate(props.page,{reload:true})} style={styles.button}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}