import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import estilo from "../body/body_autocontrole_estilo";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function BodyAutocontrole(props){
    return(

    <ScrollView style={estilo.container}>
        <View style={estilo.containertitulo}>
            <Text style={estilo.titulo}>PRA VOCÊ</Text>
        </View>

        {/* FORTALECIMENTO */}
        <View>
            <TouchableOpacity onPress={props.fortalecimento} style={estilo.containeropcoes}>
                <View style={estilo.containerIcones}>
                    <Image source={require('../../imagens/fortalecimento.png')} style={{height:80,width:80}}/>
                </View>
                <Text style={{color:'white',
        fontSize:30}}>fortalecimento</Text>
            </TouchableOpacity>
        </View>
        
        {/* PÓS-LESÃO */}
        <View>
            <TouchableOpacity onPress={props.poslesao} style={estilo.containeropcoes}>
                <View style={estilo.containerIcones}>
                <Image source={require('../../imagens/poslesao.png')} style={{height:80,width:80}}/>
                </View>
                <Text style={estilo.nomeicone}>pós lesão</Text>
            </TouchableOpacity>
        </View>
        
        {/* AUTO-CONTROLE */}
        <View>
            <TouchableOpacity onPress={props.autocontrole} style={estilo.containeropcoes}>
                <View style={estilo.containerIcones}>
                <Image source={require('../../imagens/autocontrole.png')} style={{height:80,width:80}}/>
                </View>
                <Text style={{color:'white',
        fontSize:30}}>autocontrole</Text>
            </TouchableOpacity>
        </View>
        
        {/* ALONGAMENTO */}
        <View>
            <TouchableOpacity onPress={props.alongamento} style={estilo.containeropcoes}>
                <View style={estilo.containerIcones}>
                <Image source={require('../../imagens/alongamento.png')} style={{height:80,width:80}}/>
                </View>
                <Text style={{color:'white',
        fontSize:30}}>alongamento</Text>
            </TouchableOpacity>
        </View>
        
        {/* EQUILIBRIO */}
        <View>
            <TouchableOpacity onPress={props.equilibrio} style={estilo.containeropcoesLast}>
                <View style={estilo.containerIcones}>
                <Image source={require('../../imagens/equilibrio.png')} style={{height:80,width:80}}/>
                </View>
                <Text style={estilo.nomeicone}>equilibrio</Text>
            </TouchableOpacity>
        </View>
        
    </ScrollView>
     )
}


