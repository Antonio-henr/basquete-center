import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import estilo from "../body/body_treinos_estilo";
import Agilidade from "./treinos/agilidade/agilidade";

var display = 'flex'

export default function BodyTreinos(props){

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
            <Text style={estilo.titulo}>TREINOS</Text>
        </View>

        {/* AGILIDADE */}
        <View>
            <TouchableOpacity style={estilo.containeropcoes} onPress={props.agilidade}>
                <View style={estilo.containerIcones}>
                    <Image source={require('../../imagens/agilidade.png')} style={{height:80,width:80}}/>
                </View>
                <Text style={estilo.nomeicone}>agilidade</Text>
            </TouchableOpacity>
        </View>
        
        {/* IMPULSÃO */}
        <View>
            <TouchableOpacity style={estilo.containeropcoes} onPress={props.impulsao}>
                <View style={estilo.containerIcones}>
                <Image source={require('../../imagens/impulsao.png')} style={{height:80,width:80}}/>
                </View>
                <Text style={estilo.nomeicone}>impulsão</Text>
            </TouchableOpacity>
        </View>
        
        {/* REFLEXO */}
        <View>
            <TouchableOpacity style={estilo.containeropcoes} onPress={props.reflexo}>
                <View style={estilo.containerIcones}>
                <Image source={require('../../imagens/reflexo.png')} style={{height:80,width:80}}/>
                </View>
                <Text style={estilo.nomeicone}>reflexo</Text>
            </TouchableOpacity>
        </View>
        
        {/* FORÇA */}
        <View>
            <TouchableOpacity style={estilo.containeropcoes} onPress={props.forca}>
                <View style={estilo.containerIcones}>
                <Image source={require('../../imagens/forca.png')} style={{height:80,width:80}}/>
                </View>
                <Text style={estilo.nomeicone}>força</Text>
            </TouchableOpacity>
        </View>
        
        {/* BANDEJA ARREMESSO */}
        <View>
            <TouchableOpacity style={estilo.containeropcoes} onPress={props.bandejaearremesso}>
                <View style={estilo.containerIcones}>
                <Image source={require('../../imagens/arremesso.png')} style={{height:80,width:80}}/>
                </View>
                <Text style={estilo.nomeiconeMenor}>bandeja/arremesso</Text>
            </TouchableOpacity>
        </View>
        
        
        {/* DRIBLE */}
        <View>
            <TouchableOpacity style={estilo.containeropcoes}onPress={props.drible}>
                <View style={estilo.containerIcones}>
                <Image source={require("../../imagens/dribleavancado.png")} style={{height:80,width:80}}/>
                </View>
                <Text style={estilo.nomeicone}>drible</Text>
            </TouchableOpacity>
        </View>
        
        {/* DEFESA */}
        <View>
            <TouchableOpacity style={estilo.containeropcoes} onPress={props.defesa}>
                <View style={estilo.containerIcones}>
                <Image source={require('../../imagens/defesa.png')} style={{height:80,width:80}}/>
                </View>
                <Text style={estilo.nomeicone}>defesa</Text>
            </TouchableOpacity>
        </View>
        
        {/* CONTROLE DE BOLA */}
        <View>
            <TouchableOpacity style={estilo.containeropcoes} onPress={props.controle}>
                <View style={estilo.containerIcones}>
                <Image source={require('../../imagens/controle.png')} style={{height:80,width:80}}/>
                </View>
                <Text style={estilo.nomeiconeMenor}>controle de bola</Text>
            </TouchableOpacity>
        </View>
        
        {/* PASSE */}
        <View>
            <TouchableOpacity style={estilo.containeropcoesLast} onPress={props.passe}>
                <View style={estilo.containerIcones}>
                <Image source={require('../../imagens/passe.png')} style={{height:80,width:80}}/>
                </View>
                <Text style={estilo.nomeicone}>passe</Text>
            </TouchableOpacity>
        </View>

        
    </ScrollView>
    </View>
     )
}


