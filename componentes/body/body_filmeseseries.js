import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import estilo from "../body/body_filmeseseries_estilo";
import Agilidade from "./treinos/agilidade/agilidade";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';




var display = 'flex'

export default function Bodyfilmeseseries(props){

    const[treino,settreino]=useState('')

    // function inicio(){
    //     settreino('nada')
    //     display = "flex"
    // }
    function agilidade(){
        settreino('agilidade')
        display = "none"
    }
    
    const fechando =()=>{
        settreino('nada')
        display = "flex"
    }
    
    return(
        <View style={{height:"100%", paddingBottom:80}}>



     <ScrollView style={{backgroundColor:'black',
        height:200,display:display}}>

        <View style={estilo.containertitulo}>
            <Text style={estilo.titulo}>FILMES E SÉRIES</Text>
        </View>

        {/* FILMES */}
        <View>
            <TouchableOpacity style={estilo.containeropcoes} onPress={props.filmes}>
                <View style={estilo.containerIcones}>
                <MaterialIcons name="local-movies" size={100} color='black' />
                </View>
                <Text style={{color:'white', fontSize:23}}>filmes que todos{`\n`}os jogadores de{`\n`}basquete devem{`\n`}assistir</Text>
            </TouchableOpacity>
        </View>
        
        {/*  SÉRIES */}
        <View>
            <TouchableOpacity style={estilo.containeropcoes} onPress={props.series}>
                <View style={estilo.containerIcones}>
                <Feather name="tv" size={90} color="black" />
                </View>
                <Text style={{color:'white', fontSize:27}}>séries para quem{`\n`}ama basquete</Text>
            </TouchableOpacity>
        </View>
        

       

        
    </ScrollView>
    </View>
     )
}


