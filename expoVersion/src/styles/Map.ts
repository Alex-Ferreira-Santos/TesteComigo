import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    button:{
        backgroundColor: '#005eab',
        height: 50,
        width: '50%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    buttonText:{
        color: 'white',
        fontSize: 20,
    },
    loading:{
        fontSize: 50,
    },
    center:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});