import { StyleSheet } from "react-native";


export default StyleSheet.create({

    container:{
        backgroundColor:'#06122B',
        height:200
    },

    titulo:{
        color:'white',
        fontSize:60
    },

    containertitulo:{
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,
    },

    containeropcoes:{
        flexDirection:'row',
        alignItems:"center"
    },

    containerIcones:{
        height:90,
        width:90,
        borderRadius:9,
        backgroundColor:'#38B6FF',
        justifyContent:'center',
        alignItems:'center',
        margin:20,
        marginBottom:15
    },

    nomeicone:{
        color:'white',
        fontSize:40
    },

    nomeiconeMenor:{
        color:'white',
        fontSize:29
    },
    
    containeropcoesLast:{
        flexDirection:'row',
        alignItems:"center",
        marginBottom:100
    },
})