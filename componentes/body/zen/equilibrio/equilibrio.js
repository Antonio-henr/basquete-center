import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Equilibrio(props){

    
    return(


        <View style={{height:"100%", backgroundColor:'#06122B',alignItems:'center'}}>
            <View style={{backgroundColor:'#082157', alignItems:'center', marginTop:15, flexDirection:'row', width:"100%"}}>
                 <Image source={require('../../../../imagens/equilibrio.png')} style={{height:80,width:80}}/>
                 <Text style={{fontSize:40, color:'white',marginLeft:15}}>equilibrio</Text>
            </View>

            <View style={{width:'95%'}}>
            {/* equilibrio dez minutos*/}
            <TouchableOpacity 
            onPress={props.equilibriodezmin}
            style={{flexDirection:"row", alignItems:'center', marginTop:20}}>
                <View style={{height:90,width:90,backgroundColor:'#082157',borderRadius:45,justifyContent:'center',alignItems:'center'}}>
                    <MaterialCommunityIcons name="clock-outline" size={85} color="white" />
                </View>
                <View>
                    <Text style={{color:'white', margin:20, fontSize:36}}>10 minutos</Text>
                </View>
            </TouchableOpacity>


             {/* isquiotibiais*/}
             <TouchableOpacity 
            onPress={props.combola}
            style={{flexDirection:"row", alignItems:'center', marginTop:20}}>
                <View style={{height:90,width:90,backgroundColor:'#082157',borderRadius:45,justifyContent:'center',alignItems:'center'}}>
                    <AntDesign name="dribbble" size={75} color="white" />
                </View>
                <View>
                    <Text style={{color:'white', margin:20, fontSize:36}}>com bola</Text>
                </View>
            </TouchableOpacity>
            </View>


           

          




        </View>
     )
}


