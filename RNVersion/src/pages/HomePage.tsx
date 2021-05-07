import React,{useState} from 'react';
import {View,Text,Image,TextInput,TouchableOpacity} from 'react-native'
import {styles} from '../styles/HomePage'
import Logo from '../img/logo.png'
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({ domain: 'devalex.us.auth0.com', clientId: '2J2E6ovI6po2PTrJ4O3Wov9GtClXseMf' });

export function HomePage(props:any){
    const [Email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [placeholder,setPlaceholder] = useState<string>('#979797')
    const [empty,setEmpty] = useState<boolean>(false)
    const [border,setBorder] = useState<object>({})
    const [accessToken,setAccessToken] = useState<string>()

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
                {/*<View style={styles.field}>
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
                </View>*/}
                <View style={styles.line}/>
                <TouchableOpacity style={styles.button} onPress={()=>{
                    /*if([Email,password].includes('')){
                        changeColor()
                        return
                    }*/
                    auth0
                    .webAuth
                    .authorize({scope: 'openid profile email'})
                    .then(credentials =>
                    // Successfully authenticated
                    // Store the accessToken
                    setAccessToken(credentials.accessToken)
                    ).then(()=> {
                        props.navigation.navigate('Map')
                    })
                    .catch(error => console.log(error));
                }}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.account} onPress={()=>props.navigation.navigate('CreateAccount',{edit:false})}>Não tem uma conta? clique aqui para criar</Text>
            </View>
        </View>
    )
}