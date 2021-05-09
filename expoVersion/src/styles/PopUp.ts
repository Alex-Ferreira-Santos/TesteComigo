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
        width: '70%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    message:{
        fontSize: 25,
        textAlign: 'center',
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
    field:{
        width:'100%',
    },
    label:{
        fontSize: 18
    },
    input:{
        width: '100%',
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        paddingVertical: 0,
        height: 40,
        color: 'black',
        paddingLeft: 10,
    },
    line:{
        width: '95%',
        marginVertical: 20,
        backgroundColor: '#757575',
        height: .5,
    },
    backButton:{
        backgroundColor: '#797979',
        height: 50,
        width: '90%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
})