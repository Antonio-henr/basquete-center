import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Reflexofacil(props){


    const [data,setdata]=useState([
        {p:'1', color:'white', conteudo:'Dribles com variação de velocidade: Segure uma bola de basquete e comece a driblar enquanto se move ao redor de uma área designada. Varie a velocidade dos dribles, alternando entre dribles rápidos e dribles lentos e controlados. Isso ajudará a desenvolver sua capacidade de ajustar sua atenção e coordenação enquanto dribla em diferentes ritmos.'},
        {p:'2', color:'white', conteudo:'Passe e reaja: Encontre um parceiro ou posicione-se próximo a uma parede. Faça passes rápidos e variados para seu parceiro ou para a parede. Assim que lançar a bola, esteja pronto para reagir imediatamente. Esteja preparado para receber a bola de volta de diferentes ângulos e alturas, e reaja rapidamente para receber e controlar a bola.'},
        {p:'3', color:'white', conteudo:'Leitura de jogo rápido: Coloque alguns cones ou objetos no chão para criar um padrão de treino. Enquanto dribla ao redor dos cones, esteja atento a sinais visuais, como cones virados ou cores diferentes em cones específicos. Responda rapidamente aos sinais, realizando movimentos específicos, como cruzar a bola ou fazer um arremesso. Isso ajudará a melhorar sua capacidade de ler o jogo e reagir com rapidez e precisão.'},
        {p:'4', color:'white', conteudo:'Arremessos aleatórios: Posicione-se em diferentes posições ao redor da quadra de basquete. Peça a um amigo que fale tipos de arremessos diferentes e aleatórios( como bandeja, chute de 3 etc). Esteja preparado para receber a bola e fazer arremessos rápidos de diferentes posições e ângulos, desenvolvendo sua capacidade de ajustar sua atenção e precisão nos arremessos.'},
        {p:'5', color:'white', conteudo:'Simulação de defesa: Coloque cones ou objetos no chão para simular jogadores adversários. Drible ao redor dos cones e, a qualquer momento, reaja como se estivesse sendo desafiado por um jogador adversário. Execute movimentos defensivos rápidos, como recuar, saltar ou desviar, em resposta à simulação do ataque. Isso ajudará a desenvolver sua habilidade de manter a atenção e reagir rapidamente às situações defensivas.'},


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
        <Text style={{color:'white', textAlign:'center', fontSize:30}}><MaterialCommunityIcons name="clock-outline" size={30} color="white"/> INICIANTE</Text>
      
        {/* CONTEUDO */}

    <Text style={{color:'white', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'#F88036',color:'black',fontWeight:'bold', marginTop:5}}>
    Lembre-se de manter a intensidade e o foco durante o treino de múltipla atenção. A medida que você ganha mais habilidade, você pode aumentar a complexidade dos exercícios ou prolongar o tempo de duração.
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


