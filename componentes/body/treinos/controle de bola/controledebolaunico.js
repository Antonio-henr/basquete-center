import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Controleunico(props){


    const [data,setdata]=useState([
        {p:'1', color:'white', conteudo:'Drible estático:', sub1:'Drible com uma mão: Fique em pé e pratique o controle de bola com uma mão, mantendo-a próxima ao chão. Experimente diferentes variações de toques na bola, como batidas suaves e rápidas. Execute 30 segundos de dribles estáticos com cada mão.', sub2:'Drible com duas mãos: Segure a bola com as duas mãos na altura do peito e faça movimentos rápidos de controle de bola, mantendo-a próxima ao corpo. Execute 30 segundos de dribles com as duas mãos.', sub3:''},
        {p:'2', color:'white', conteudo:'Drible em movimento:', sub1:'Caminhada com drible: Ande pela quadra enquanto controla a bola com uma mão. Concentre-se em manter o controle e a velocidade do drible. Faça duas voltas completas na quadra.', sub2:'Corrida com drible: Aumente a intensidade e corra pela quadra enquanto dribla a bola com uma mão. Concentre-se em manter o controle e a consistência do drible durante a corrida. Faça duas voltas completas na quadra.', sub3:''},
        {p:'3', color:'white', conteudo:'Drible com mudanças de direção:', sub1:'Drible com crossover: Pratique os crossovers, alternando a bola entre as mãos. Realize mudanças de direção rápidas e controladas enquanto mantém o controle da bola. Execute 10 repetições de crossovers em ambos os lados da quadra.', sub2:'Drible com giros: Drible em linha reta e, em seguida, gire rapidamente em torno de si mesmo enquanto mantém o controle da bola. Execute 10 giros completos em ambos os lados da quadra.', sub3:''},
        {p:'4', color:'white', conteudo:'Drible com desafios adicionais:', sub1:'Drible em espaços reduzidos: Utilize cones ou objetos para criar espaços mais estreitos e pratique driblar com precisão em torno desses obstáculos. Execute 10 repetições de dribles em espaços reduzidos.', sub2:'Drible com oponente imaginário: Visualize um defensor à sua frente e pratique driblar ao redor dele, usando movimentos de proteção da bola. Execute 10 sequências de dribles com movimentos simulando a presença de um defensor.', sub3:''},


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
                <Image source={require('../../../../imagens/controle.png')} style={{height:80,width:80}}/>
                <Text style={{fontSize:35, color:'white',marginLeft:15}}>controle de bola</Text>
            </View>
        </TouchableOpacity>

        <View style={{alignItems:'center'}}>
        <View style={{width:"95%"}}>
        <Text style={{color:'white', textAlign:'center', fontSize:30}}><MaterialCommunityIcons name="clock-outline" size={30} color="white"/> intermediário</Text>
      
        {/* CONTEUDO */}

    <Text style={{color:'white', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'#F88036',color:'black',fontWeight:'bold', marginTop:5}}>
    Lembre-se de manter a postura adequada, manter a bola próxima ao corpo e usar os dedos para controlar o drible. Pratique regularmente para aprimorar suas habilidades de controle de bola e gradualmente aumente a dificuldade dos exercícios à medida que se sentir mais confortável.
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


