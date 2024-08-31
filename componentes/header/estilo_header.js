import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";




export default StyleSheet.create({

    

    header:{
        backgroundColor:'#F88036',
        width:'100%',
        height:80,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        padding:7
    },

    headerImgEsquerda:{
        width:60,
        height:60,
    },


    paiTxt:{
        width:'80%',
        alignItems: 'center' 

    },

    textheader:{
      fontSize:50,
    },
})