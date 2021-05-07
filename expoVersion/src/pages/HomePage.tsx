import React,{useState} from 'react';
import {View,Text,Image,TextInput,TouchableOpacity} from 'react-native'
import {styles} from '../styles/HomePage'
import Logo from '../img/logo.png'

export function HomePage(props:any){
    const [Email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [placeholder,setPlaceholder] = useState<string>('#979797')
    const [empty,setEmpty] = useState<boolean>(false)
    const [border,setBorder] = useState<object>({})

    function changeColor(){
        setPlaceholder('red')
        setBorder({
            borderColor: 'red'
        })
        setEmpty(true)
    }
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={Logo} style={styles.image}/>
                <Text style={styles.legend}>Veja sua posição atual no mapa!</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.title}>Faça Login para continuar!</Text>
                {empty && (<Text style={styles.fill}>Preencha todos os dados para continuar!</Text>)}
                <View style={styles.line}/>
                <View style={styles.field}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput style={[styles.input,border]} placeholder='Digite seu e-mail aqui' placeholderTextColor={placeholder} onChangeText={value => {
                        setPlaceholder('#979797')
                        setBorder({})
                        setEmail(value)
                    }}/>
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput style={[styles.input,border]} placeholder='Digite sua senha aqui' placeholderTextColor={placeholder} secureTextEntry={true} onChangeText={value => {
                        setPlaceholder('#979797')
                        setBorder({})
                        setPassword(value)
                    }}/>
                </View>
                <View style={styles.line}/>
                <TouchableOpacity style={styles.button} onPress={()=>{
                    if([Email,password].includes('')){
                        changeColor()
                        return
                    }
                    props.navigation.navigate('Map')
                }}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>
                <Text style={styles.account} onPress={()=>props.navigation.navigate('CreateAccount',{edit:false})}>Não tem uma conta? clique aqui para criar</Text>
            </View>
        </View>
    )
}