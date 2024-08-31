import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Joelhonacadeira(props){


    const [data,setdata]=useState([
        {p:'1', color:'white', conteudo:'Encontre uma cadeira resistente ou banco e sente-se nele.',
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'2', color:'white', conteudo:'Mantenha as costas retas e os pés apoiados no chão.',
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'3', color:'white', conteudo:'Estenda uma perna à sua frente, mantendo-a reta.',
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'4', color:'white', conteudo:'Contraia os músculos da coxa e levante a perna estendida até que fique paralela ao chão (ou o mais próximo possível).',
        sub1:'',
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'5', color:'white', conteudo:'Mantenha a posição por alguns segundos, contraindo os músculos do quadríceps.',
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},
        
        {p:'6', color:'white', conteudo:'Abaixe a perna de volta à posição inicial de forma controlada.',
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'7', color:'white', conteudo:'Repita o exercício por 10 a 15 repetições com cada perna.',
        sub1:'',
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

        <TouchableOpacity onPress={props.poslesao}>
            <View style={{backgroundColor:'#082157', alignItems:'center', marginTop:15, flexDirection:'row'}}>
                <Image source={require('../../../../imagens/poslesao.png')} style={{height:80,width:80}}/>
                <Text style={{fontSize:40, color:'white',marginLeft:15}}>pós lesão</Text>
            </View>
        </TouchableOpacity>

        <View style={{alignItems:'center'}}>
        <View style={{width:"95%"}}>
        <Text style={{color:'white', textAlign:'center', fontSize:25}}><MaterialCommunityIcons name="clock-outline" size={30} color="white"/> dor no joelho</Text>
      
        {/* CONTEUDO */}

    <Text style={{color:'black', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'white',fontWeight:'bold', marginTop:5}}>
    Se você está sofrendo com dor no joelho, é importante lembrar que exercícios podem ajudar a fortalecer os músculos ao redor do joelho, proporcionando estabilidade e suporte. No entanto, é fundamental que você consulte um profissional de saúde, como um fisioterapeuta ou médico, para uma avaliação adequada e um plano de tratamento personalizado. Aqui está um exercício geralmente recomendado para fortalecer os músculos do joelho:
    </Text>
    
    <Text style={{color:'white', fontSize:22, textAlign:'center', marginBottom:10, fontWeight:'bold', marginTop:5}}>
    Extensão de quadríceps com cadeira:
    </Text>
    <FlatList
        data={data}
        renderItem={renderItem}
      />

<Text style={{color:'black', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'white',fontWeight:'bold', marginTop:5}}>
Lembre-se de não realizar o exercício se ele causar dor intensa no joelho. Se você sentir qualquer desconforto, pare o exercício e consulte um profissional de saúde. Além disso, lembre-se de aquecer adequadamente antes de iniciar o exercício e não force a articulação além do limite de dor ou desconforto. A orientação de um profissional de saúde é fundamental para um tratamento adequado e para determinar se esse exercício é adequado para o seu caso específico de dor no joelho.
</Text>

      <View style={{margin:60}}></View>
      </View>
      </View>

    </ScrollView>

     )
}





