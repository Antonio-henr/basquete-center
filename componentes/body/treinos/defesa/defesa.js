import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Defesa(props){

    
    return(


        <View style={{height:"100%", backgroundColor:'black', alignItems:'center'}}>
            <View style={{backgroundColor:'rgba(80,80,80,0.8)', alignItems:'center', marginTop:15, flexDirection:'row', width:'100%'}}>
                 <Image source={require('../../../../imagens/defesa.png')} style={{height:80,width:80}}/>
                 <Text style={{fontSize:60, color:'white',marginLeft:15}}>defesa</Text>
            </View>

            <View style={{width:'95%'}}>
            {/* ÚNICO */}
            <TouchableOpacity 
            onPress={props.treinounico}
            style={{flexDirection:"row", alignItems:'center', marginTop:20}}>
                <View style={{height:90,width:90,backgroundColor:'#EC661B',borderRadius:45,justifyContent:'center',alignItems:'center'}}>
                    <MaterialCommunityIcons name="clock-outline" size={85} color="black" />
                </View>
                <View>
                    <Text style={{color:'white', margin:20, fontSize:40}}>treino único</Text>
                </View>
            </TouchableOpacity>
        </View>

        


        </View>
     )
}


