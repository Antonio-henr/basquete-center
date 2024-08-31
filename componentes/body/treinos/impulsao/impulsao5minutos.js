import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Impulsao5min(props){


    const [data,setdata]=useState([
        {p:'1', color:'white', conteudo:'Saltos de agachamento: Fique em pé com os pés na largura dos ombros e agache-se. Em seguida, dê um salto explosivo, estendendo os braços acima da cabeça. Aterrisse suavemente e repita o movimento. Faça 10 repetições.'},
        {p:'2', color:'white', conteudo:'Saltos com uma perna só: Fique em pé com uma perna dobrada, enquanto a outra perna fica estendida à frente. Salte o mais alto que puder, trocando a posição das pernas no ar. Aterrisse suavemente e repita o salto alternando as pernas.'},
        {p:'3', color:'white', conteudo:'Salto em caixa: Encontre uma caixa resistente ou um banco seguro. Fique em frente à caixa, agache-se ligeiramente e dê um salto para cima, aterrissando suavemente na caixa. Desça da caixa e repita o salto. Faça 10 repetições.'},
        {p:'4', color:'white', conteudo:'Saltos laterais: Coloque um objeto ou linha no chão para marcar o ponto de partida. Fique ao lado do objeto e dê um salto lateral para o outro lado, usando o máximo de força possível. Volte para o ponto de partida e repita o salto lateral. Faça 10 saltos para cada lado.'},
        {p:'5', color:'white', conteudo:'Saltos em profundidade: Encontre uma plataforma ou degrau elevado. Fique em cima da plataforma e dê um salto para frente, caindo em um agachamento profundo quando aterrissar. Em seguida, dê um salto explosivo para cima e repita o movimento. Faça 10 repetições.'},


    ])

    const mudandodecor = (item)=>{
        const novadat = data.map((novoiten)=>{
            if(novoiten.p==item.p){
                return{...novoiten,color:novoiten.color== 'white'?'green':'white'}
            }
            return novoiten
        })
        setdata(novadat)
    }

    const renderItem=({item})=>(

        <View>
            <View style={{marginTop:10}}>
                <Text onPress={()=>mudandodecor(item)} style={{color:item.color, fontSize:20,padding:10}}>{item.p}. {item.conteudo}</Text>
            </View>
            <View style={{backgroundColor:'#EC661B', marginTop:10, width:'100%', height:2}}></View>
        </View>
    )
    
    return(
      <ScrollView style={{backgroundColor:'black',}}>

        <TouchableOpacity onPress={props.impulsao}>
            <View style={{backgroundColor:'rgba(80,80,80,0.8)', alignItems:'center', marginTop:15, flexDirection:'row'}}>
                <Image source={require('../../../../imagens/impulsao.png')} style={{height:80,width:80}}/>
                <Text style={{fontSize:60, color:'white',marginLeft:15}}>agilidade</Text>
            </View>
        </TouchableOpacity>

        <View style={{alignItems:'center'}}>
        <View style={{width:"95%"}}>
        <Text style={{color:'white', textAlign:'center', fontSize:30}}><MaterialCommunityIcons name="clock-outline" size={30} color="white"/> 5 minutos</Text>
      
        {/* CONTEUDO */}

    <Text style={{color:'white', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'#F88036',color:'black',fontWeight:'bold', marginTop:5}}>
    Lembre-se de fazer um aquecimento leve antes do treino para preparar seus músculos e articulações. Durante o treino, mantenha uma boa técnica e aterrisse suavemente para evitar lesões. Aumente gradualmente a intensidade e o número de repetições conforme seu condicionamento físico melhora.
    </Text>

    <FlatList
        data={data}
        renderItem={renderItem}
      />

      <View style={{margin:60}}></View>
        </View>
        </View>
        
    </ScrollView>

     )
}


