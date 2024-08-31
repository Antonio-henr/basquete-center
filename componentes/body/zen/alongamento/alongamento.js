import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Alongamento(props){

    
    return(


        <ScrollView style={{height:"100%", backgroundColor:'#06122B'}}>
            <View style={{alignItems:'center'}}>
            <View style={{backgroundColor:'#082157', alignItems:'center', marginTop:15, flexDirection:'row', width:'100%'}}>
                 <Image source={require('../../../../imagens/alongamento.png')} style={{height:80,width:80}}/>
                 <Text style={{fontSize:40, color:'white',marginLeft:15}}>alongamento</Text>
            </View>

            <View style={{width:'95%'}}>
            {/* panturrilhas*/}
            <TouchableOpacity 
            onPress={props.panturrilhas}
            style={{flexDirection:"row", alignItems:'center', marginTop:20}}>
                <View style={{height:90,width:90,backgroundColor:'#082157',borderRadius:45,justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../../../../imagens/alongamentoicon.png')} style={{height:60,width:60}}/>
                </View>
                <View>
                    <Text style={{color:'white', margin:20, fontSize:36}}>panturrilhas</Text>
                </View>
            </TouchableOpacity>


             {/* isquiotibiais*/}
             <TouchableOpacity 
            onPress={props.isquiotibiais}
            style={{flexDirection:"row", alignItems:'center', marginTop:20}}>
                <View style={{height:90,width:90,backgroundColor:'#082157',borderRadius:45,justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../../../../imagens/alongamentoicon.png')} style={{height:60,width:60}}/>
                </View>
                <View>
                    <Text style={{color:'white', margin:20, fontSize:36}}>isquiotibiais</Text>
                </View>
            </TouchableOpacity>



            {/* quadríceps*/}
            <TouchableOpacity 
            onPress={props.quadriceps}
            style={{flexDirection:"row", alignItems:'center', marginTop:20}}>
                <View style={{height:90,width:90,backgroundColor:'#082157',borderRadius:45,justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../../../../imagens/alongamentoicon.png')} style={{height:60,width:60}}/>
                </View>
                <View>
                    <Text style={{color:'white', margin:20, fontSize:36}}>quadríceps</Text>
                </View>
            </TouchableOpacity>



             {/* ombros*/}
             <TouchableOpacity 
            onPress={props.ombros}
            style={{flexDirection:"row", alignItems:'center', marginTop:20}}>
                <View style={{height:90,width:90,backgroundColor:'#082157',borderRadius:45,justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../../../../imagens/alongamentoicon.png')} style={{height:60,width:60}}/>
                </View>
                <View>
                    <Text style={{color:'white', margin:20, fontSize:36}}>ombros</Text>
                </View>
            </TouchableOpacity>



             {/*  flexores do quadril */}
            <TouchableOpacity 
            onPress={props.quadril}
            style={{flexDirection:"row", alignItems:'center', marginTop:20, marginBottom:110}}>
                <View style={{height:90,width:90,backgroundColor:'#082157',borderRadius:45,justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../../../../imagens/alongamentoicon.png')} style={{height:60,width:60}}/>
                </View>
                <View>
                    <Text style={{color:'white', margin:20, fontSize:27}}> flexores do quadril</Text>
                </View>
            </TouchableOpacity>
            </View>

          



            </View>
        </ScrollView>
     )
}


