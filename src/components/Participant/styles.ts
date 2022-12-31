import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        borderRadius:5,
        flexDirection:'row',
        backgroundColor:'#1f1e25',
        alignItems:'center',
        marginBottom:10

    },
    name: {
        color:'#fff',
        flex:1,
        marginLeft:16,
        fontSize:16
    },
    buttonText:{
        color:'#fff',
        fontSize:24
    },
    button:{
        width:56,
        height:56,
        borderRadius: 5,
        backgroundColor:'#e23c44',
        alignItems:'center',
        justifyContent:'center'
    },
})