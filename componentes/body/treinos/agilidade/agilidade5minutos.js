import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Agilidade5min(props){


    const [data,setdata]=useState([
        {p:'1', color:'white', conteudo:'Pular corda: Pule corda por 1 minuto, alternando entre saltos simples e saltos duplos para aumentar a intensidade.'},
        {p:'2', color:'white', conteudo:'Agachamentos com salto: Fique em pé com os pés na largura dos ombros e agache-se. Em seguida, dê um salto explosivo, levantando os braços acima da cabeça. Faça 10 repetições.'},
        {p:'3', color:'white', conteudo:'Deslocamentos laterais: Coloque dois cones ou objetos a uma distância de aproximadamente 1 metro um do outro. Faça deslocamentos laterais, pulando de um lado para o outro, tocando cada cone. Faça isso por 1 minuto.'},
        {p:'4', color:'white', conteudo:'Corrida estacionária: Corra no lugar elevando bem os joelhos por 1 minuto.'},
        {p:'5', color:'white', conteudo:'Sprint: Termine o treino com uma corrida de alta intensidade por 1 minuto. Corra o mais rápido que puder em linha reta ou em um espaço aberto.'}

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
      <ScrollView  style={{backgroundColor:'black',}} >

        <TouchableOpacity onPress={props.agilidade}>
            <View style={{backgroundColor:'rgba(80,80,80,0.8)', alignItems:'center', marginTop:15, flexDirection:'row'}}>
                <Image source={require('../../../../imagens/agilidade.png')} style={{height:80,width:80}}/>
                <Text style={{fontSize:60, color:'white',marginLeft:15}}>agilidade</Text>
            </View>
        </TouchableOpacity>

        <View style={{alignItems:'center'}}>
        <View style={{width:"95%"}}>
        <Text style={{color:'white', textAlign:'center', fontSize:30}}><MaterialCommunityIcons name="clock-outline" size={30} color="white"/> 5 minutos</Text>
      
        {/* CONTEUDO */}

    <Text style={{color:'white', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'#F88036',color:'black',fontWeight:'bold', marginTop:5}}>
        Lembre-se de aquecer antes de iniciar o treino e de se alongar após a conclusão. Este treino de agilidade é curto, mas intenso, e deve ajudar a melhorar sua agilidade e coordenação em apenas 5 minutos. Aumente gradualmente a intensidade e o tempo conforme se sentir confortável
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


