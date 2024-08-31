import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Bandejaearremesso20min(props){


    const [data,setdata]=useState([
        {p:'1', color:'white', conteudo:'Arremesso de média distância: Posicione-se na zona de arremesso de média distância (por exemplo, na linha de lance livre). Faça 15 arremessos com boa técnica e foco na precisão. Concentre-se em seguir a mecânica correta de arremesso, incluindo a posição das mãos, o equilíbrio e o seguimento.'},
        {p:'2', color:'white', conteudo:'Arremesso de três pontos: Posicione-se atrás da linha de três pontos. Faça 10 arremessos de três pontos com boa técnica. Concentre-se em estender completamente o braço, manter o equilíbrio e o seguimento do arremesso. Tente acertar a maior quantidade possível de arremessos.'},
        {p:'3', color:'white', conteudo:'Bandejas: Coloque-se próximo ao aro e pratique bandejas alternando entre a mão direita e a mão esquerda. Faça 15 bandejas com cada mão, focando na técnica adequada de finalização. Concentre-se em saltar com força, usar a mão de apoio corretamente e finalizar suavemente ao redor do aro.'},
        {p:'4', color:'white', conteudo:'Arremessos em movimento: Posicione-se na linha de lance livre e comece a se movimentar ao redor da quadra, simulando situações de jogo. Receba passes de um parceiro ou faça dribles antes de arremessar. Execute 15 arremessos em movimento, trabalhando na habilidade de arremessar com precisão em diferentes posições e momentos do jogo.'},
        {p:'5', color:'white', conteudo:'Finalização após contato: Peça a um parceiro para fornecer leve contato físico enquanto você faz uma bandeja. Pratique finalizações em diferentes ângulos e posições, focando em terminar a jogada mesmo após o contato. Execute 15 finalizações após contato, mantendo o equilíbrio e a força para converter o arremesso.'},
        {p:'6', color:'white', conteudo:'Lances livres: Termine o treino com uma série de lances livres. Faça 10 lances livres, concentrando-se na técnica e na confiança. Imagine-se em uma situação de jogo e mantenha a calma e a concentração durante cada arremesso.'},


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

        <TouchableOpacity onPress={props.bandejaearremesso}>
            <View style={{backgroundColor:'rgba(80,80,80,0.8)', alignItems:'center', marginTop:15, flexDirection:'row'}}>
                <Image source={require('../../../../imagens/arremesso.png')} style={{height:80,width:80}}/>
                <Text style={{fontSize:30, color:'white',marginLeft:15}}>bandeja/arremesso</Text>
            </View>
        </TouchableOpacity>

        <View style={{alignItems:'center'}}>
        <View style={{width:"95%"}}>
        <Text style={{color:'white', textAlign:'center', fontSize:30}}><MaterialCommunityIcons name="clock-outline" size={30} color="white"/> 20 minutos</Text>
      
        {/* CONTEUDO */}

    <Text style={{color:'white', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'#F88036',color:'black',fontWeight:'bold', marginTop:5}}>
    Lembre-se de se concentrar na técnica adequada e no controle do corpo durante o treino. Use o tempo disponível para executar cada exercício com foco e precisão. À medida que ganhar mais confiança e habilidade, você poderá aumentar a intensidade e a complexidade dos exercícios.
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


