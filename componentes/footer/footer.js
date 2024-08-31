import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import estilofooter from "./estilo_footer";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



export default function Footer(props){
 


    const[treino,settreino]=useState('#F88036')
    const[zen,setzen]=useState('#F88036')



    return(

<View style={estilofooter.footer}>
            <TouchableOpacity onPress={props.Modo1}>
                <View style={estilofooter.botoes}>
                <AntDesign name="dribbble" size={45} color={props.cor1} />
                </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={props.Modo2}>
                <View style={estilofooter.botoes}>
                    <MaterialCommunityIcons name="meditation" size={45} color={props.cor2} />
                </View>
            </TouchableOpacity>

        <TouchableOpacity onPress={props.Modo3}>
                <View style={estilofooter.botoes}>
                    <MaterialIcons name="local-movies" size={45} color={props.cor3} />
                </View>
            </TouchableOpacity>

        <TouchableOpacity onPress={props.Modo4}>
                <View style={estilofooter.botoes}>
                    <MaterialIcons name="timer" size={45} color={props.cor4} />
                </View>
            </TouchableOpacity>

        </View>
     )
}


