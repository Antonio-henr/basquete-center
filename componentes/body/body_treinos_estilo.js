import { StyleSheet } from "react-native";


export default StyleSheet.create({

    container:{
        backgroundColor:'black',
        height:200,
        
    },

    titulo:{
        color:'white',
        fontSize:60
    },

    containertitulo:{
        backgroundColor:'rgba(80,80,80,0.8)',
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
        backgroundColor:'#F88036',
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
        fontSize:24
    },
    
    containeropcoesLast:{
        flexDirection:'row',
        alignItems:"center",
        marginBottom:200
    },
})