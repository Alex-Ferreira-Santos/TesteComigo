import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white'
    },
    title:{
        fontSize: 30
    },
    subtitle:{
        fontSize: 24,
        alignSelf: 'center',
        margin: 30,
        marginTop: 0
    },
    button:{
        backgroundColor: '#005eab',
        height: 50,
        width: '80%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    buttonText:{
        color: 'white',
        fontSize: 20,
    },
    dataContainer:{
        backgroundColor: '#f0f0f0',
        width: '90%',
        borderRadius: 20,
        borderColor: '#c4c4c4',
        borderWidth: 1,
        padding: 10,
    },
    buttons:{
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    data:{
        fontSize: 20,
        margin: 10
    },
    exit:{
        backgroundColor: '#D60000'
    },
    edit:{
        backgroundColor: '#8bb63c',
    },
    loading:{
        fontSize: 50,
    },
    center:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})