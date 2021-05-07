import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface PopUpProps{
    name: string;
}

export function PopUp(props:PopUpProps){
    return(
        <View>
            <View>
                <Text>Usuário {props.name} criado com sucesso</Text>
                <TouchableOpacity>
                    <Text>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}