import React,{useState,useContext} from 'react';
import {View,Text,Image,TextInput,TouchableOpacity} from 'react-native'
import {styles} from '../styles/HomePage'
import Logo from '../img/logo.png'
import { UserContext } from '../Context/UserContext';

export function HomePage(props:any){
    const [placeholder,setPlaceholder] = useState<string>('#979797')
    const [empty,setEmpty] = useState<boolean>(false)
    const [border,setBorder] = useState<object>({})
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [message,setMessage] = useState<string>('Preencha todos os dados para continuar!')
    const {auth0,setAccessToken} = useContext(UserContext)

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
                {empty && (<Text style={styles.fill}>{message}</Text>)}
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
                <TouchableOpacity style={styles.button} onPress={async ()=>{
                    if([email,password].includes('')){
                        changeColor()
                        return
                    }

                    await auth0.auth.passwordRealm({
                        username:email, 
                        password:password,
                        realm:'Username-Password-Authentication',
                        scope : 'read:current_user update:current_user_metadata openid',
                        audience:'https://devalex.us.auth0.com/api/v2/',
                    }).then(Credentials => {
                        setAccessToken(Credentials.accessToken)
                    }).then(() => {
                        props.navigation.navigate('Map')
                    })
                    .catch((err) => {
                        console.error(err)
                        setMessage('E-mail ou senha incorretos!!!')
                        setEmpty(true)
                    });
                }}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.account} onPress={()=>props.navigation.navigate('CreateAccount',{edit:false})}>Não tem uma conta? clique aqui para criar</Text>
            </View>
        </View>
    )
}