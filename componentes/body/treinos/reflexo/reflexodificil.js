import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Reflexodificil(props){


    const [data,setdata]=useState([
        {p:'1', color:'white', conteudo:'Dribles de duas bolas: Segure uma bola de basquete em cada mão e comece a driblar simultaneamente. Tente manter um ritmo constante e controlado enquanto mantém a atenção em ambas as bolas. Você pode variar a velocidade e a altura dos dribles para aumentar a dificuldade.'},
        {p:'2', color:'white', conteudo:'Passe e reaja com obstáculos: Coloque obstáculos, como cones ou cadeiras, no caminho entre você e seu parceiro. Faça passes rápidos e variados, mas agora você terá que reagir aos obstáculos e ajustar seus passes de acordo. Isso ajudará a melhorar sua capacidade de tomar decisões rápidas e precisas enquanto mantém a atenção no jogo.'},
        {p:'3', color:'white', conteudo:'Leitura de jogo com defensores simulados: Peça a alguns amigos ou colegas de equipe para simular defensores enquanto você se movimenta com a bola. Eles podem tentar bloquear seus passes ou dificultar seus arremessos. Enquanto dribla e procura oportunidades, você terá que manter a atenção nos movimentos dos defensores e tomar decisões rápidas para superá-los.'},
        {p:'4', color:'white', conteudo:'Arremessos rápidos e em sequência: Posicione-se em diferentes posições ao redor da quadra e faça arremessos rápidos em sequência. Defina um objetivo, como fazer 10 arremessos consecutivos em diferentes posições antes de se mover para o próximo local. Isso ajudará a desenvolver sua concentração e foco durante arremessos rápidos e sucessivos.'},
        {p:'5', color:'white', conteudo:'Tomada de decisão rápida: Utilize um aplicativo ou um colega para apresentar diferentes situações de jogo, como um jogo de perguntas e respostas sobre basquete. Você terá que ler e entender rapidamente cada situação apresentada e tomar decisões corretas em resposta às perguntas. Isso ajudará a desenvolver sua capacidade de processar informações rapidamente e tomar decisões precisas durante o jogo.'},


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

        <TouchableOpacity onPress={props.reflexo}>
            <View style={{backgroundColor:'rgba(80,80,80,0.8)', alignItems:'center', marginTop:15, flexDirection:'row'}}>
                <Image source={require('../../../../imagens/reflexo.png')} style={{height:80,width:80}}/>
                <Text style={{fontSize:60, color:'white',marginLeft:15}}>reflexo</Text>
            </View>
        </TouchableOpacity>

        <View style={{alignItems:'center'}}>
        <View style={{width:"95%"}}>
        <Text style={{color:'white', textAlign:'center', fontSize:30}}><MaterialCommunityIcons name="clock-outline" size={30} color="white"/> avançado</Text>
      
        {/* CONTEUDO */}

    <Text style={{color:'white', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'#F88036',color:'black',fontWeight:'bold', marginTop:5}}>
    Lembre-se de se desafiar durante o treino e manter a intensidade e o foco. À medida que você se sentir mais confortável com esses exercícios, você pode aumentar a velocidade, adicionar mais obstáculos ou modificar as situações para torná-las ainda mais desafiadoras.
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


