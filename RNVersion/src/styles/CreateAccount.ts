import {StyleSheet,Dimensions} from 'react-native'

const width = Dimensions.get('screen').width

export const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    img:{
        width: width/2,
        height: width/2,
    },
    title:{
        fontSize: 25,
        textAlign: 'center'
    },
    form:{
        backgroundColor: '#c4c4c4',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        width: '90%',
        alignItems: 'center',
        marginBottom: 30,
    },
    field:{
        width: '90%',
        marginVertical: 15,
    },
    label:{
        fontSize: 20
    },
    input:{
        width: '100%',
        backgroundColor: '#F0F0F0',
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1,
        paddingVertical: 0,
        height: 40,
        color: 'black',
        paddingLeft: 10,
    },
    button:{
        backgroundColor: '#005eab',
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
    imageContainer:{
        
        width: '100%',
        alignItems: 'center',
    },
    fill:{
        color: 'red',
        fontSize: 15,
        marginTop: 10,
    },
})