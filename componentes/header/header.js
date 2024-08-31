import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import estilo from "./estilo_header"
import { useFonts } from "expo-font";
import * as Font from "expo-font"
import { useEffect } from "react";

export default function Header(){

    return(
    <View style={estilo.header}>
     
        {/* <Image source={require("../../imagens/coracaoDeBasquete2.png")} style={estilo.headerImgEsquerda}/> */}

    
            <Text style={{ fontSize:33, fontWeight:'bold',color:'black'}}>BASQUETE-CENTER</Text> 
            <Image source={require("../../imagens/coracaoDeBasquete2.png")} style={estilo.headerImgEsquerda}/>

    
        </View>)
}


