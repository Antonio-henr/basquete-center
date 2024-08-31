import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Fortalecimentoiniciante(props){


    const [data,setdata]=useState([
        {p:'1', color:'white', conteudo:'Agachamento com salto: 1 minuto',
        sub1:'Fique em pé com os pés na largura dos ombros.',
        sub2:'Agache-se lentamente, mantendo os joelhos alinhados com os dedos dos pés.',
        sub3:'Quando estiver na posição mais baixa do agachamento, salte o mais alto que puder.',
        sub4:'Aterrisse suavemente e repita o agachamento e o salto por 1 minuto.'},

        {p:'2', color:'white', conteudo:'Prancha: 1 minuto',
        sub1:'Deite-se de bruços com os antebraços apoiados no chão e os cotovelos alinhados com os ombros.',
        sub2:'Levante o corpo, apoiando-se nos antebraços e nos dedos dos pés, formando uma linha reta dos ombros aos tornozelos.',
        sub3:'Mantenha essa posição por 1 minuto, contraindo o abdômen e mantendo a coluna reta.',
        sub4:''},

        {p:'3', color:'white', conteudo:'Flexões: 1 minuto',
        sub1:'Coloque as mãos no chão, um pouco mais largas do que a largura dos ombros.',
        sub2:'Estenda as pernas para trás, apoiando-se nos dedos dos pés.',
        sub3:'Abaixe o corpo lentamente, mantendo os cotovelos próximos ao corpo, até que o peito quase toque o chão.',
        sub4:'Empurre o corpo de volta à posição inicial e repita as flexões por 1 minuto.'},

        {p:'4', color:'white', conteudo:'Afundos alternados: 2 minutos (1 minuto para cada perna)',
        sub1:'Fique em pé com os pés na largura dos ombros.',
        sub2:'Dê um passo à frente com o pé direito, flexionando o joelho até que a coxa fique paralela ao chão.',
        sub3:'Empurre o corpo de volta à posição inicial e repita o movimento com a perna esquerda.',
        sub4:'Alterne as pernas, fazendo afundos alternados por 2 minutos no total.'},

        {p:'5', color:'white', conteudo:'Prancha lateral: 2 minutos (1 minuto para cada lado)',
        sub1:'Deite-se de lado, apoiando-se no antebraço e no lado externo do pé.',
        sub2:'Levante o corpo, formando uma linha reta dos ombros aos tornozelos.',
        sub3:'Mantenha essa posição por 1 minuto, contraindo os músculos abdominais.',
        sub4:'Vire para o outro lado e repita a prancha lateral por mais 1 minuto.'},
        
        {p:'6', color:'white', conteudo:'Abdominais: 2 minutos',
        sub1:'Deite-se de costas com os joelhos dobrados e os pés apoiados no chão.',
        sub2:'Coloque as mãos atrás da cabeça ou cruzadas sobre o peito.',
        sub3:'Levante o tronco, contraindo os músculos abdominais, e depois abaixe-o lentamente.',
        sub4:'Repita os abdominais por 2 minutos.'},



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
            {item.sub4!=''?<Text onPress={()=>mudandodecor(item)} style={{color:item.color, fontSize:17,padding:10}}>-{item.sub3}</Text>:<Text style={{display:'none'}}></Text>}
            </View>
            <View style={{backgroundColor:'#082157', marginTop:10, width:'100%', height:2}}></View>
        </View>
    )
    
    return(
      <ScrollView style={{backgroundColor:'#06122B',}}>

        <TouchableOpacity onPress={props.fortalecimento}>
            <View style={{backgroundColor:'#082157', alignItems:'center', marginTop:15, flexDirection:'row'}}>
                <Image source={require('../../../../imagens/fortalecimento.png')} style={{height:80,width:80}}/>
                <Text style={{fontSize:40, color:'white',marginLeft:15}}>fortalecimento</Text>
            </View>
        </TouchableOpacity>

        <View style={{alignItems:'center'}}>
        <View style={{width:"95%"}}>
        <Text style={{color:'white', textAlign:'center', fontSize:30}}><MaterialCommunityIcons name="clock-outline" size={30} color="white"/> iniciante</Text>
      
        {/* CONTEUDO */}

    <Text style={{color:'black', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'white',fontWeight:'bold', marginTop:5}}>
    Lembre-se de aquecer antes de começar o exercício e de alongar ao finalizar. Se você tiver alguma condição médica ou lesão, consulte um profissional de saúde antes de iniciar qualquer programa de exercícios
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





