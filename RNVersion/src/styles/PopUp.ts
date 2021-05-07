import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        height: '100%',
        top: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    box:{
        backgroundColor: 'white',
        width: '60%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    message:{
        fontSize: 25
    },
    button:{
        backgroundColor: '#8bb63c',
        height: 50,
        width: '90%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    buttonText:{
        color: 'white',
        fontSize: 20,
    },
})