import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Passe20min(props){


    const [data,setdata]=useState([
        {p:'1', color:'white', conteudo:'Passe de peito: Fique em pé, com as pernas afastadas na largura dos ombros. Segure a bola com ambas as mãos na altura do peito. Faça 30 passes de peito para um alvo ou parede, concentrando-se na precisão e velocidade do passe. Mantenha os cotovelos apontados para fora e siga a trajetória do passe com os olhos.', sub1:'', sub2:'', sub3:''},
        {p:'2', color:'white', conteudo:'Passe por cima da cabeça: Levante a bola acima da cabeça, com as duas mãos segurando-a na parte de trás da bola. Faça 30 passes por cima da cabeça para um alvo ou parede. Concentre-se em lançar a bola suavemente, usando a força dos braços e ombros. Mantenha os cotovelos retos durante o passe.', sub1:'', sub2:'', sub3:''},
        {p:'3', color:'white', conteudo:'Passe de bala: Fique em pé, com as pernas afastadas na largura dos ombros. Segure a bola com uma mão na altura do quadril. Faça 30 passes de bala com força para um alvo ou parede, usando um movimento rápido e explosivo do pulso. Concentre-se em lançar a bola diretamente para o alvo.', sub1:'', sub2:'', sub3:''},
        {p:'4', color:'white', conteudo:'Passe com uma mão: Pratique passes com cada mão individualmente para melhorar a coordenação e precisão. Faça 15 passes de peito e 15 passes por cima da cabeça com cada mão. Concentre-se na técnica correta e na precisão do passe.', sub1:'', sub2:'', sub3:''},
        {p:'5', color:'white', conteudo:'Passe com desafios adicionais:', sub1:'Passe em movimento: Ande ou corra pela quadra enquanto faz passes de peito ou por cima da cabeça para um parceiro ou parede. Pratique a precisão do passe mesmo durante o movimento.', sub2:'Passe com oponente imaginário: Visualize um defensor à sua frente e pratique passes em torno dele, simulando uma situação de jogo. Foque em passes rápidos e precisos para evitar que o defensor intercepte a bola.', sub3:''},
        {p:'6', color:'white', conteudo:'Passe com variações:', sub1:'Passe com efeito: Experimente adicionar um pouco de efeito na bola, como um passe com efeito lateral ou um passe com efeito de backspin. Pratique diferentes variações de passes para melhorar suas habilidades de controle da bola.', sub2:'', sub3:''},



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

        <TouchableOpacity onPress={props.passe}>
            <View style={{backgroundColor:'rgba(80,80,80,0.8)', alignItems:'center', marginTop:15, flexDirection:'row'}}>
                <Image source={require('../../../../imagens/passe.png')} style={{height:80,width:80}}/>
                <Text style={{fontSize:60, color:'white',marginLeft:15}}>passe</Text>
            </View>
        </TouchableOpacity>

        <View style={{alignItems:'center'}}>
        <View style={{width:"95%"}}>
        <Text style={{color:'white', textAlign:'center', fontSize:30}}><MaterialCommunityIcons name="clock-outline" size={30} color="white"/> 20 minutos</Text>
      
        {/* CONTEUDO */}

    <Text style={{color:'white', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'#F88036',color:'black',fontWeight:'bold', marginTop:5}}>
    Lembre-se de usar a técnica adequada em cada tipo de passe, mantendo os olhos no alvo, os cotovelos altos e lançando a bola com a força e precisão necessárias. Pratique regularmente para aprimorar suas habilidades de passe e adaptar-se a diferentes situações de jogo.
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


