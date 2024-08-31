import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Dribleavancado(props){


    const [data,setdata]=useState([
        {p:'1', color:'white', conteudo:'Drible com uma bola:', sub1:'Drible baixo: Drible a bola rapidamente, mantendo-a o mais próximo possível do chão. Execute 30 segundos de dribles baixos.', sub2:'Drible alto: Drible a bola acima da cabeça, estendendo completamente os braços. Execute 30 segundos de dribles altos.', sub3:'Drible de velocidade: Drible a bola o mais rápido possível, alternando as mãos. Execute 30 segundos de dribles de velocidade.'},
        {p:'2', color:'white', conteudo:'Drible com duas bolas:', sub1:'Drible cruzado: Drible uma bola em cada mão, cruzando os braços e mantendo os dribles baixos e controlados. Execute 30 segundos de dribles cruzados.', sub2:'Drible de avanço e recuo: Drible uma bola em cada mão, avançando com um drible e recuando com o outro. Execute 30 segundos de dribles de avanço e recuo.', sub3:'Drible de crossovers rápidos: Drible uma bola em cada mão, realizando crossovers rápidos e controlados. Execute 30 segundos de dribles de crossovers rápidos.'},
        {p:'3', color:'white', conteudo:'Drible em movimento:', sub1:'Zigzag dribble: Coloque cones ou obstáculos em uma linha reta e drible rapidamente em zigue-zague ao redor deles. Execute 5 idas e voltas completas.', sub2:'Drible em velocidade: Drible a toda velocidade, realizando mudanças de direção e acelerações rápidas. Execute 5 sprints curtos com dribles intensos.', sub3:''},
        {p:'4', color:'white', conteudo:'Drible com desafios adicionais:', sub1:'Drible com oponente imaginário: Visualize um defensor à sua frente e pratique driblar ao redor dele, usando crossovers e mudanças de direção para superá-lo. Execute 10 sequências de dribles com movimentos simulando a presença de um defensor.', sub2:'Drible em espaços reduzidos: Utilize cones ou cadeiras para criar espaços mais estreitos e pratique driblar com precisão em torno desses obstáculos. Execute 10 repetições de dribles em espaços reduzidos.', sub3:''},


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
        <Text style={{color:'white', textAlign:'center', fontSize:30}}><MaterialCommunityIcons name="clock-outline" size={30} color="white"/> avançado</Text>
      
        {/* CONTEUDO */}

    <Text style={{color:'white', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'#F88036',color:'black',fontWeight:'bold', marginTop:5}}>
    Lembre-se de manter a concentração, a velocidade e a precisão em todos os exercícios. Pratique regularmente para aprimorar suas habilidades de drible e desafie-se a progredir cada vez mais.
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


