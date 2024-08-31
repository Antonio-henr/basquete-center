import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Agilidade10min(props){


    const [data,setdata]=useState([
        {p:'1', color:'white', conteudo:'Pular corda: Comece pulando corda por 2 minutos, alternando entre saltos simples, saltos duplos e cruzamentos de corda para aumentar a intensidade.'},
        {p:'2', color:'white', conteudo:'Agachamentos com salto: Fique em pé com os pés na largura dos ombros e agache-se. Em seguida, dê um salto explosivo, levantando os braços acima da cabeça. Faça 15 repetições.'},
        {p:'3', color:'white', conteudo:'Deslocamentos laterais com agilidade: Coloque dois cones ou objetos a uma distância de aproximadamente 1 metro um do outro. Faça deslocamentos laterais, tocando cada cone com a mão enquanto se move o mais rápido possível. Faça isso por 1 minuto.'},
        {p:'4', color:'white', conteudo:'Corrida estacionária com mudança de direção: Corra no lugar, levantando bem os joelhos. A cada 10 segundos, mude a direção, virando-se rapidamente para a esquerda ou para a direita. Faça isso por 1 minuto.'},
        {p:'5', color:'white', conteudo:'Saltos em zigzag: Coloque cones ou objetos em um padrão de zigue-zague no chão, a uma distância de cerca de 50 centímetros entre eles. Pule lateralmente sobre os objetos, indo de um lado para o outro o mais rápido possível. Faça isso por 1 minuto.'},
        {p:'6', color:'white', conteudo:'Sprints alternados: Escolha uma distância, como 20 metros, e faça sprints de ida e volta o mais rápido que puder, alternando entre as idas e voltas. Faça isso por 2 minutos.'},
        {p:'7', color:'white', conteudo:'Escalada de degraus: Encontre um conjunto de escadas ou use um step. Suba e desça as escadas ou o step rapidamente por 1 minuto, concentrando-se em manter um ritmo rápido.'},
        {p:'8', color:'white', conteudo:'Burpees: Faça burpees por 1 minuto. Agache-se, coloque as mãos no chão, estenda as pernas para trás em uma posição de prancha, faça uma flexão e, em seguida, traga as pernas de volta para as mãos e salte no ar. Repita o movimento o mais rápido possível.'},



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

        <TouchableOpacity onPress={props.agilidade}>
            <View style={{backgroundColor:'rgba(80,80,80,0.8)', alignItems:'center', marginTop:15, flexDirection:'row'}}>
                <Image source={require('../../../../imagens/agilidade.png')} style={{height:80,width:80}}/>
                <Text style={{fontSize:60, color:'white',marginLeft:15}}>agilidade</Text>
            </View>
        </TouchableOpacity>

        <View style={{alignItems:'center'}}>
        <View style={{width:"95%"}}>
        <Text style={{color:'white', textAlign:'center', fontSize:30}}><MaterialCommunityIcons name="clock-outline" size={30} color="white"/> 10 minutos</Text>
      
        {/* CONTEUDO */}

    <Text style={{color:'white', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'#F88036',color:'black',fontWeight:'bold', marginTop:5}}>
        Lembre-se de aquecer antes do treino e de se alongar após a conclusão. Este treino de agilidade de 10 minutos é mais desafiador e completo. Ele ajudará a melhorar sua agilidade, coordenação e resistência. Aumente gradualmente a intensidade e o tempo conforme se sentir confortável.
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


