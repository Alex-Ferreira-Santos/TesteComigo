import React,{useState,useEffect,useContext} from 'react';
import {View,Text,Image,TextInput,TouchableOpacity} from 'react-native'
import { PopUp } from '../components/PopUp';
import Logo from '../img/logo.png'
import {styles} from '../styles/CreateAccount'
import {UserContext} from '../Context/UserContext'

import {CreateUserParams} from 'react-native-auth0';

export function CreateAccount(props:any){
    const [empty,setEmpty] = useState<boolean>(false)
    const [placeholderColor,setPlaceholderColor] = useState<string>('#979797')
    const [border,setBorder] = useState<object>({})
    const [showPopUp,setShowPopUp] = useState<boolean>(false)
    const [title,setTitle] = useState<string>('Crie sua conta aqui!')
    const [message,setMessage] = useState<string>('')
    const [name,setName] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [phone,setPhone] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [path,setPath] = useState<string>('')
    const {auth0,accessToken} = useContext(UserContext)

    function changeColor(){
        setPlaceholderColor('red')
        setBorder({
            borderColor: 'red'
        })
        setEmpty(true)
    }
    useEffect(() =>{
        if(props.route.params.edit){
            setTitle('Preencha os dados para editar sua conta')
        }
    },[])
    
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={Logo} style={styles.img}/>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.form}>
                {empty && (<Text style={styles.fill}>Preencha todos os campos para se cadastrar!</Text>)}
                <View style={styles.field}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput style={[styles.input, name === '' ? border: {}]} placeholder="Digite o seu nome aqui" placeholderTextColor={placeholderColor} onChangeText={value => {
                        setPlaceholderColor('#979797')
                        setBorder({})
                        setName(value.trim())
                    }}/>
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>Telefone</Text>
                    <TextInput style={[styles.input, phone === '' ? border: {}]} placeholder="Digite o seu Telefone aqui" placeholderTextColor={placeholderColor} keyboardType='numeric' maxLength={11} onChangeText={value => {
                        setPlaceholderColor('#979797')
                        setBorder({})
                        setPhone(value.trim())
                    }}/>
                </View>
                {!props.route.params.edit && (<><View style={styles.field}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput style={[styles.input, email === '' ? border: {}]} placeholder="Digite o seu E-mail aqui" placeholderTextColor={placeholderColor} onChangeText={value => {
                        setPlaceholderColor('#979797')
                        setBorder({})
                        setEmail(value.trim())
                    }}/>
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput style={[styles.input, password === '' ? border: {}]} placeholder="Digite o seu Senha aqui" secureTextEntry={true} placeholderTextColor={placeholderColor} onChangeText={value => {
                        setPlaceholderColor('#979797')
                        setBorder({})
                        setPassword(value.trim())
                    }}/>
                </View></>)}
                <TouchableOpacity style={styles.button} onPress={ async ()=>{
                    if(props.route.params.edit){
                        if([name,phone].includes('')){
                            changeColor()
                            return
                        }
                    }else{
                        if([name,phone,email,password].includes('')){
                            changeColor()
                            return
                        }
                    }
                    if(props.route.params.edit){
                        setMessage(`Usu??rio ${name} alterado com sucesso`)
                        await auth0.auth.userInfo({token: accessToken}).then(async val=>{
                            await auth0.users(accessToken).patchUser({id: val.sub,metadata:{phone:phone,name:name}}).then( val => {
                                setPath('Profile')
                                setShowPopUp(true)
                            }).catch(err => console.log(err))
                        })
                    }else{
                        await auth0.auth.createUser({ email: email, connection: 'Username-Password-Authentication', password: password, metadata: { phone: phone, name:name} } as CreateUserParams<unknown>).then(val => {
                            console.log('usuario criado com sucesso')
                            setMessage(`Usu??rio ${name} criado com sucesso`)
                            setShowPopUp(true)
                        }).catch(err => {
                            console.log('==========================')
                            console.log(JSON.stringify(err))
                        })
                    }
                }}>
                    <Text style={styles.buttonText}>{props.route.params.edit ? 'Atualizar dados' : 'Cadastrar'}</Text>
                </TouchableOpacity>
            </View>
            {showPopUp && (<PopUp message={message} navigate={props.navigation.navigate} change={false} page={path}/>)}
        </View>
    )
}