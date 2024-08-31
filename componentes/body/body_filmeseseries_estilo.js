import { StyleSheet } from "react-native";


export default StyleSheet.create({

    container:{
        backgroundColor:'black',
        height:200,
        
    },

    titulo:{
        color:'white',
        fontSize:45
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
        height:110,
        width:110,
        borderRadius:14,
        backgroundColor:'#F88036',
        justifyContent:'center',
        alignItems:'center',
        margin:20,
        marginRight:10,
        marginLeft:10,
        marginBottom:15
    },

    nomeicone:{
        color:'white',
        fontSize:23
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