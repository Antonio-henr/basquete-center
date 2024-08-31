import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Fortalecimento(props){

    
    return(


        <View style={{height:"100%", backgroundColor:'#06122B', alignItems:'center'}}>
            <View style={{backgroundColor:'#082157', alignItems:'center', marginTop:15, flexDirection:'row', width:'100%'}}>
                 <Image source={require('../../../../imagens/fortalecimento.png')} style={{height:80,width:80}}/>
                 <Text style={{fontSize:40, color:'white',marginLeft:15}}>fortalecimento</Text>
            </View>

            <View style={{width:'95%'}}>
            {/* iniciante */}
            <TouchableOpacity 
            onPress={props.iniciante}
            style={{flexDirection:"row", alignItems:'center', marginTop:20}}>
                <View style={{height:90,width:90,backgroundColor:'#082157',borderRadius:45,justifyContent:'center',alignItems:'center'}}>
                    <MaterialCommunityIcons name="clock-outline" size={85} color="white" />
                </View>
                <View>
                    <Text style={{color:'white', margin:20, fontSize:40}}>iniciante</Text>
                </View>
            </TouchableOpacity>


             {/* avançado 1 */}
            <TouchableOpacity 
            onPress={props.avancado1}
            style={{flexDirection:"row", alignItems:'center', marginTop:20}}>
                <View style={{height:90,width:90,backgroundColor:'#082157',borderRadius:45,justifyContent:'center',alignItems:'center'}}>
                    <MaterialCommunityIcons name="clock-outline" size={85} color="white" />
                </View>
                <View>
                    <Text style={{color:'white', margin:20, fontSize:40}}>avançado 1</Text>
                </View>
            </TouchableOpacity>


             {/* avançado 2 */}
            <TouchableOpacity 
             onPress={props.avancado2}
            style={{flexDirection:"row", alignItems:'center', marginTop:20}}>
                <View style={{height:90,width:90,backgroundColor:'#082157',borderRadius:45,justifyContent:'center',alignItems:'center'}}>
                    <MaterialCommunityIcons name="clock-outline" size={85} color="white" />
                </View>
                <View>
                    <Text style={{color:'white', margin:20, fontSize:40}}>avançado 2</Text>
                </View>
            </TouchableOpacity>
            </View>



        </View>
     )
}


