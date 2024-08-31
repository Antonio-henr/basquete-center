import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Dribleiniciante(props){


    const [data,setdata]=useState([
        {p:'1', color:'white', conteudo:'Drible com uma bola:', sub1:'Drible estacionário: Fique em pé e pratique o drible com uma mão, mantendo a bola próxima ao chão. Execute 30 segundos de dribles estacionários com cada mão.', sub2:'Drible em movimento: Ande pela quadra enquanto dribla a bola com uma mão. Concentre-se em manter o controle e a velocidade do drible. Faça duas voltas completas na quadra.', sub3:''},
        {p:'2', color:'white', conteudo:'Drible com duas bolas:', sub1:'Drible alternado: Segure uma bola em cada mão e alterne os dribles entre elas. Drible uma bola no chão enquanto a outra está em suas mãos. Execute 30 segundos de dribles alternados.', sub2:'Drible em círculo: Coloque uma bola no chão e circule ao seu redor enquanto dribla a outra bola. Execute 10 círculos completos em ambos os sentidos.', sub3:''},
        {p:'3', color:'white', conteudo:'Drible com movimentos simples:', sub1:'Drible com crossover: Pratique os crossovers básicos, alternando a bola entre as mãos. Faça 10 repetições de crossovers.', sub2:'Drible com mudança de direção: Drible em linha reta e, em seguida, mude de direção rapidamente. Execute 10 mudanças de direção em ambos os lados da quadra.', sub3:''},
        {p:'4', color:'white', conteudo:'Drible com desafios adicionais:', sub1:'Drible em espaços reduzidos: Utilize cones ou objetos para criar espaços mais estreitos e pratique driblar com precisão em torno desses obstáculos. Execute 10 repetições de dribles em espaços reduzidos.', sub2:'Drible com ritmo: Use uma música com um ritmo animado e pratique o drible em sincronia com a batida. Experimente diferentes ritmos e velocidades.', sub3:''},
        // {p:'5', color:'white', conteudo:'', sub1:'', sub2:'', sub3:''},


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
            {item.sub1!=''?<Text onPress={()=>mudandodecor(item)} style={{color:item.color, fontSize:17,padding:10}}>-{item.sub1}</Text>:<Text style={{display:'none'}}></Text>}
            {item.sub2!=''?<Text onPress={()=>mudandodecor(item)} style={{color:item.color, fontSize:17,padding:10}}>-{item.sub2}</Text>:<Text style={{display:'none'}}></Text>}
            {item.sub3!=''?<Text onPress={()=>mudandodecor(item)} style={{color:item.color, fontSize:17,padding:10}}>-{item.sub3}</Text>:<Text style={{display:'none'}}></Text>}
            
            </View>
            <View style={{backgroundColor:'#EC661B', marginTop:10, width:'100%', height:2}}></View>
        </View>
    )
    
    return(
      <ScrollView style={{backgroundColor:'black',}}>

        <TouchableOpacity onPress={props.drible}>
            <View style={{backgroundColor:'rgba(80,80,80,0.8)', alignItems:'center', marginTop:15, flexDirection:'row'}}>
                <Image source={require('../../../../imagens/dribleavancado.png')} style={{height:80,width:80}}/>
                <Text style={{fontSize:60, color:'white',marginLeft:15}}>drible</Text>
            </View>
        </TouchableOpacity>

        
        <View style={{alignItems:'center'}}>
        <View style={{width:"95%"}}>
        <Text style={{color:'white', textAlign:'center', fontSize:30}}><MaterialCommunityIcons name="clock-outline" size={30} color="white"/> iniciante</Text>
      
        {/* CONTEUDO */}

    <Text style={{color:'white', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'#F88036',color:'black',fontWeight:'bold', marginTop:5}}>
    Lembre-se de manter a postura adequada, manter a bola próxima ao chão e usar os dedos para controlar o drible. Pratique regularmente para aprimorar suas habilidades de drible e gradualmente aumente a dificuldade dos exercícios à medida que se sentir mais confortável.
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


