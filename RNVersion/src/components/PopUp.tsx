import React,{useState,useContext} from 'react';
import { Text, TouchableOpacity, View,TextInput } from 'react-native';
import { UserContext } from '../Context/UserContext';
import {styles} from '../styles/PopUp'

interface PopUpProps{
    navigate: (string:string,object:object) => void
    message: string,
    page: string,
    change: boolean,
    funcao?: () => void
}

export function PopUp(props:PopUpProps){
    const [email,setEmail] = useState<string>('')
    const {auth0} = useContext(UserContext)
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.message}>{props.message}</Text>
                {props.change && (<View style={styles.field}>
                    <View style={styles.line}/>
                    <Text style={styles.label}>Email</Text>
                    <TextInput placeholder='Digite seu email aqui' style={styles.input} placeholderTextColor='#979797' onChangeText={(val)=>{
                        setEmail(val)
                    }}/>
                </View>)}
                <TouchableOpacity onPress={()=>{
                    if(props.change){
                        auth0.auth.resetPassword({email:email, connection: 'Username-Password-Authentication'})
                    }else{
                      props.navigate(props.page,{reload:true})  
                    }
                }} style={styles.button}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>
                {props.change && (<TouchableOpacity onPress={()=>{
                    if(props.funcao != undefined){
                        props.funcao()
                    }
                }} style={styles.backButton}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>)}
            </View>
        </View>
    )
}