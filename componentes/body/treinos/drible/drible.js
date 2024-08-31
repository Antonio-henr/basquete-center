import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Drible(props){

    
    return(


        <View style={{height:"100%", backgroundColor:'black', alignItems:'center'}}>
            <View style={{backgroundColor:'rgba(80,80,80,0.8)', alignItems:'center', marginTop:15, flexDirection:'row', width:'100%'}}>
                 <Image source={require('../../../../imagens/dribleavancado.png')} style={{height:80,width:80}}/>
                 <Text style={{fontSize:60, color:'white',marginLeft:15}}>drible</Text>
            </View>

            <View style={{width:'95%'}}>
            {/* INICIANTE */}
            <TouchableOpacity 
            onPress={props.facil}
            style={{flexDirection:"row", alignItems:'center', marginTop:20}}>
                <View style={{height:90,width:90,backgroundColor:'#EC661B',borderRadius:45,justifyContent:'center',alignItems:'center'}}>
                    <AntDesign name="dribbble" size={75} color="black" />
                </View>
                <View>
                    <Text style={{color:'white', margin:20, fontSize:40}}>INICIANTE</Text>
                </View>
            </TouchableOpacity>


             {/* AVANÇADP */}
            <TouchableOpacity 
            onPress={props.dificil}
            style={{flexDirection:"row", alignItems:'center', marginTop:20}}>
                <View style={{height:90,width:90,backgroundColor:'#EC661B',borderRadius:45,justifyContent:'center',alignItems:'center'}}>
                    <AntDesign name="dribbble" size={75} color="black" />
                </View>
                <View>
                    <Text style={{color:'white', margin:20, fontSize:40}}>AVANÇADO</Text>
                </View>
            </TouchableOpacity>
            </View>




        </View>
     )
}


