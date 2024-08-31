import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Autocontrole(props){


    const [data,setdata]=useState([
        {p:'1', color:'white', conteudo:'Meditação:',
        sub1:'Reserve alguns minutos antes de começar seu treino para praticar a meditação. Sente-se em uma posição confortável, feche os olhos e concentre-se na sua respiração. Tente acalmar sua mente e cultivar um estado de relaxamento e presença. A meditação pode ajudar a melhorar sua capacidade de se concentrar e permanecer calmo em situações desafiadoras.',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'2', color:'white', conteudo:'Visualização:',
        sub1:'Antes de entrar na quadra, dedique um tempo para visualizar-se executando habilidades com sucesso. Imagine-se fazendo passes precisos, chutes precisos ou movimentos rápidos e ágeis. Visualize-se jogando com confiança e alcançando seus objetivos. A visualização ajuda a reforçar padrões mentais positivos e fortalece a autoconfiança.',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'3', color:'white', conteudo:'Técnica de respiração:',
        sub1:'A respiração consciente pode ajudar a acalmar a mente e reduzir a ansiedade. Pratique técnicas de respiração profunda antes, durante e após o treino. Inspire profundamente pelo nariz, segure por alguns segundos e expire lentamente pela boca. Concentre-se em sua respiração para manter-se presente e focado.',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'4', color:'white', conteudo:'Controle emocional:',
        sub1:"Durante o treino, é importante manter a calma e lidar com as emoções de forma construtiva. Reconheça suas emoções, mas não permita que elas o dominem. Pratique a autorregulação emocional, mantendo-se positivo, controlando a raiva ou frustração e mantendo uma atitude equilibrada.",
        sub2:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'5', color:'white', conteudo:'Definição de metas:',
        sub1:'Estabeleça metas claras e realistas para o seu treino. Concentre-se em objetivos específicos e mensuráveis, tanto a curto prazo quanto a longo prazo. Ter metas claras ajuda a manter o foco e o comprometimento, além de fornecer um senso de direção e propósito.',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},
        
  


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
            {item.sub5!=''?<Text onPress={()=>mudandodecor(item)} style={{color:item.color, fontSize:17,padding:10}}>-{item.sub1}</Text>:<Text style={{display:'none'}}></Text>}
            {item.sub6!=''?<Text onPress={()=>mudandodecor(item)} style={{color:item.color, fontSize:17,padding:10}}>-{item.sub2}</Text>:<Text style={{display:'none'}}></Text>}
            {item.sub7!=''?<Text onPress={()=>mudandodecor(item)} style={{color:item.color, fontSize:17,padding:10}}>-{item.sub3}</Text>:<Text style={{display:'none'}}></Text>}
            {item.sub8!=''?<Text onPress={()=>mudandodecor(item)} style={{color:item.color, fontSize:17,padding:10}}>-{item.sub3}</Text>:<Text style={{display:'none'}}></Text>}
            </View>
            <View style={{backgroundColor:'#082157', marginTop:10, width:'100%', height:2}}></View>
        </View>
    )
    
    return(
      <ScrollView style={{backgroundColor:'#06122B',}}>

        <TouchableOpacity onPress={props.zen}>
            <View style={{backgroundColor:'#082157', alignItems:'center', marginTop:15, flexDirection:'row'}}>
                <Image source={require('../../../../imagens/autocontrole.png')} style={{height:80,width:80}}/>
                <Text style={{fontSize:40, color:'white',marginLeft:15}}>autocontrole</Text>
            </View>
        </TouchableOpacity>

        {/* <Text style={{color:'white', textAlign:'center', fontSize:25}}><MaterialCommunityIcons name="clock-outline" size={30} color="white"/> autocontrole</Text> */}
      
        {/* CONTEUDO */}

        <View style={{alignItems:'center'}}>
        <View style={{width:"95%"}}>
    <Text style={{color:'black', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'white',fontWeight:'bold', marginTop:5}}>
    Um treino de autocontrole para as quadras é uma ótima maneira de desenvolver habilidades mentais, como foco, concentração e capacidade de lidar com a pressão durante a prática de esportes. Aqui estão algumas atividades que você pode incorporar em seu treino:
    </Text>
    
    <Text style={{color:'white', fontSize:25, textAlign:'center', marginBottom:10, fontWeight:'bold', marginTop:5}}>
    Treino para autocontrole:
    </Text>
    <FlatList
        data={data}
        renderItem={renderItem}
      />

    <Text style={{color:'black', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'white',fontWeight:'bold', marginTop:5}}>
    Lembre-se de que o treino de autocontrole é um processo contínuo e requer prática regular. Seja paciente e gentil consigo mesmo à medida que desenvolve suas habilidades mentais. Aprenda a reconhecer seus limites e ajustar suas estratégias conforme necessário. Com o tempo, você verá uma melhora significativa em seu desempenho nas quadras.
    </Text>

      <View style={{margin:60}}></View>
      </View>
      </View>

    </ScrollView>

     )
}





