import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Poslesao(props){

    
    return(


        <ScrollView style={{height:"100%", backgroundColor:'#06122B'}}>
            <View style={{alignItems:'center'}}>
            <View style={{backgroundColor:'#082157', alignItems:'center', marginTop:15, flexDirection:'row', width:'100%'}}>
                 <Image source={require('../../../../imagens/poslesao.png')} style={{height:80,width:80}}/>
                 <Text style={{fontSize:40, color:'white',marginLeft:15}}>pós lesão</Text>
            </View>

            <View style={{width:'95%'}}>
            {/* tornozelo torcido*/}
            <TouchableOpacity 
            onPress={props.tornozelo}
            style={{flexDirection:"row", alignItems:'center', marginTop:20}}>
                <View style={{height:90,width:90,backgroundColor:'#082157',borderRadius:45,justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../../../../imagens/ossoquebrado.png')} style={{height:60,width:60}}/>
                </View>
                <View>
                    <Text style={{color:'white', margin:20, fontSize:27}}>tornozelo torcido</Text>
                </View>
            </TouchableOpacity>


             {/* tornozelo torcido com banda*/}
             <TouchableOpacity 
            onPress={props.tornozelocombanda}
            style={{flexDirection:"row", alignItems:'center', marginTop:20}}>
                <View style={{height:90,width:90,backgroundColor:'#082157',borderRadius:45,justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../../../../imagens/ossoquebrado.png')} style={{height:60,width:60}}/>
                </View>
                <View>
                    <Text style={{color:'white', margin:20, fontSize:22}}>tornozelo torcido{'\n'}(exercício com banda)</Text>
                </View>
            </TouchableOpacity>



            {/* dor no joelho*/}
            <TouchableOpacity 
            onPress={props.joelho}
            style={{flexDirection:"row", alignItems:'center', marginTop:20}}>
                <View style={{height:90,width:90,backgroundColor:'#082157',borderRadius:45,justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../../../../imagens/ossoquebrado.png')} style={{height:60,width:60}}/>
                </View>
                <View>
                    <Text style={{color:'white', margin:20, fontSize:32}}>dor no joelho</Text>
                </View>
            </TouchableOpacity>



             {/* dor no joelho na cadeira*/}
             <TouchableOpacity 
            onPress={props.Joelhonacadeira}
            style={{flexDirection:"row", alignItems:'center', marginTop:20}}>
                <View style={{height:90,width:90,backgroundColor:'#082157',borderRadius:45,justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../../../../imagens/ossoquebrado.png')} style={{height:60,width:60}}/>
                </View>
                <View>
                    <Text style={{color:'white', margin:20, fontSize:22}}>dor no joelho{'\n'}(exercício com cadeira)</Text>
                </View>
            </TouchableOpacity>



             {/*  dor no ombro */}
            <TouchableOpacity 
            onPress={props.ombro}
            style={{flexDirection:"row", alignItems:'center', marginTop:20, marginBottom:110}}>
                <View style={{height:90,width:90,backgroundColor:'#082157',borderRadius:45,justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../../../../imagens/ossoquebrado.png')} style={{height:60,width:60}}/>
                </View>
                <View>
                    <Text style={{color:'white', margin:20, fontSize:32}}> dor no ombro</Text>
                </View>
            </TouchableOpacity>
            </View>

          



            </View>
        </ScrollView>
     )
}


