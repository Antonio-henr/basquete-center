import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Fortalecimentoavancado1(props){


    const [data,setdata]=useState([
        {p:'1', color:'white', conteudo:'Burpees: 1 minuto',
        sub1:'Fique em pé com os pés na largura dos ombros.',
        sub2:'Agache-se e coloque as mãos no chão à frente de você.',
        sub3:'Dê um impulso com as pernas para trás, fazendo um movimento de prancha.',
        sub4:'Faça uma flexão de braço.',
        sub5:'Em seguida, salte para frente, trazendo os pés de volta para as mãos.',
        sub6:'Salte o mais alto que puder, estendendo completamente o corpo.',
        sub7:'Repita os burpees por 1 minuto.',
        sub8:''},

        {p:'2', color:'white', conteudo:'Pistol Squats (Agachamentos Pistola): 1 minuto (30 segundos para cada perna)',
        sub1:'Fique em pé com os pés afastados na largura dos ombros.',
        sub2:'Levante uma perna do chão, estendendo-a à frente.',
        sub3:'Agache-se lentamente, mantendo a perna levantada estendida à frente.',
        sub4:'Desça o máximo que puder, mantendo o equilíbrio.',
        sub5:'Empurre-se de volta à posição inicial.',
        sub6:'Repita o exercício por 30 segundos com uma perna e, em seguida, troque para a outra perna por mais 30 segundos.',
        sub7:'',
        sub8:''},

        {p:'3', color:'white', conteudo:'Flexões explosivas: 1 minuto',
        sub1:'Realize uma flexão de braço, mas empurre o corpo para cima com tanta força que as mãos saiam do chão.',
        sub2:'Tente atingir a maior altura possível.',
        sub3:'Ao descer, aterrize suavemente e repita o movimento explosivo.',
        sub4:'Faça as flexões explosivas por 1 minuto.',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'4', color:'white', conteudo:'Levantamento terra com uma perna: 1 minuto (30 segundos para cada perna)',
        sub1:'Fique em pé com os pés afastados na largura dos ombros.',
        sub2:'Segure um halter ou uma barra com uma das mãos.',
        sub3:'Levante a perna oposta do chão e estenda-a para trás.',
        sub4:'Agache-se, abaixando o halter (ou a barra) até o chão.',
        sub5:'Levante o peso, mantendo a perna levantada estendida para trás.',
        sub6:'Repita o levantamento terra com uma perna por 30 segundos e, em seguida, troque de perna por mais 30 segundos.',
        sub7:'',
        sub8:''},

        {p:'5', color:'white', conteudo:'Prancha com elevação de perna e braço: 2 minutos (1 minuto para cada lado)',
        sub1:'Fique na posição de prancha, com os antebraços apoiados no chão e os cotovelos alinhados com os ombros.',
        sub2:'Levante uma perna e o braço oposto, mantendo o equilíbrio e uma linha reta com o corpo.',
        sub3:'Mantenha essa posição por alguns segundos e, em seguida, abaixe a perna e o braço.',
        sub4:'Alterne os lados, realizando a prancha com elevação de perna e braço por 1 minuto para cada lado.',
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

        <TouchableOpacity onPress={props.fortalecimento}>
            <View style={{backgroundColor:'#082157', alignItems:'center', marginTop:15, flexDirection:'row'}}>
                <Image source={require('../../../../imagens/fortalecimento.png')} style={{height:80,width:80}}/>
                <Text style={{fontSize:40, color:'white',marginLeft:15}}>fortalecimento</Text>
            </View>
        </TouchableOpacity>

        <View style={{alignItems:'center'}}>
        <View style={{width:"95%"}}>
        <Text style={{color:'white', textAlign:'center', fontSize:30}}><MaterialCommunityIcons name="clock-outline" size={30} color="white"/> avançado 1</Text>
      
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





