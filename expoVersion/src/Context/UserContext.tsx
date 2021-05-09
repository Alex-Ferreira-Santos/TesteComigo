import React,{createContext,useState} from 'react'
import Auth0 from 'react-native-auth0';

interface UserContextProps{
    auth0: Auth0,
    accessToken: string,
    setAccessToken: (string:string)=>void
}

export const UserContext = createContext({} as UserContextProps)

const auth0 = new Auth0({ domain: 'devalex.us.auth0.com', clientId: '2J2E6ovI6po2PTrJ4O3Wov9GtClXseMf' });

export function UserProvider(props:any){
    const [accessToken,setAccessToken] = useState<string>('')
    return(
        <UserContext.Provider value={{
            auth0,
            accessToken,
            setAccessToken,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}