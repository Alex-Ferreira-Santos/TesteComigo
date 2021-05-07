import {StyleSheet,Dimensions} from 'react-native'

const width = Dimensions.get('screen').width

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    imageContainer:{
        alignItems: 'center',
        marginTop: 40
    },
    legend:{
        fontSize: 20
    },
    title:{
        fontSize: 24,
        marginBottom: 20,
    },
    image:{
        width: width/1.5,
    },
    form:{
        width: '90%',
        backgroundColor: '#B9D783',
        alignItems: 'center',
        borderRadius: 20,
        marginVertical: 30,
        paddingVertical: 20,
        borderColor: '#8bb63c',
        borderWidth: 1,
    },
    field:{
        width: '90%',
        marginVertical: 10,
    },
    label:{
        fontSize: 16,
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
    account:{
        color: 'blue',
        fontSize: 16,
    },
    line:{
        width: '95%',
        backgroundColor: '#757575',
        height: .5,
    },
    fill:{
        color: 'red',
        fontSize: 16,
        marginBottom: 10
    },
})