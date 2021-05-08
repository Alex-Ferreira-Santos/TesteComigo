import React,{createContext,useState} from 'react'
import Auth0, { AuthParams } from 'react-native-auth0';

interface UserContextProps{
    name:string
    setName: (string:string)=>void
    email:string
    setEmail: (string:string)=>void
    password:string,
    setPassword: (string:string)=>void
    phone:string
    setPhone: (string:string)=>void
    auth0: Auth0,
    accessToken: string,
    setAccessToken: (string:string)=>void
}

export const UserContext = createContext({} as UserContextProps)

const auth0 = new Auth0({ domain: 'devalex.us.auth0.com', clientId: '2J2E6ovI6po2PTrJ4O3Wov9GtClXseMf' });

export function UserProvider(props:any){
    const [name,setName] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [phone,setPhone] = useState<string>('')
    const [accessToken,setAccessToken] = useState<string>('')
    return(
        <UserContext.Provider value={{
            name,
            email,
            password,
            phone,
            auth0,
            setName,
            setEmail,
            setPassword,
            setPhone,
            accessToken,
            setAccessToken
        }}>
            {props.children}
        </UserContext.Provider>
    )
}