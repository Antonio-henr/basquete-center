import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Joelho(props){


    const [data,setdata]=useState([
        {p:'1', color:'white', conteudo:'Deite-se de costas em uma superfície confortável, como um colchonete.',
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'2', color:'white', conteudo:'Mantenha uma perna estendida e a outra dobrada com o pé apoiado no chão.',
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'3', color:'white', conteudo:'Mantendo a perna estendida, levante-a lentamente em direção ao teto, mantendo-a reta.',
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'4', color:'white', conteudo:'Segure por alguns segundos no ponto mais alto e, em seguida, abaixe a perna de volta à posição inicial.',
        sub1:'',
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'5', color:'white', conteudo:'Realize 2 séries de 10 repetições para cada perna.',
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},
        
        {p:'6', color:'white', conteudo:'Repita o exercício no outro pé.',
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
    Se você está enfrentando dor no joelho, é importante lembrar que os exercícios podem variar dependendo da causa da dor. No entanto, aqui está um exercício suave e de baixo impacto que pode ajudar a aliviar a dor no joelho.
    </Text>
    
    <Text style={{color:'white', fontSize:25, textAlign:'center', marginBottom:10, fontWeight:'bold', marginTop:5}}>
    Elevação da perna reta:
    </Text>
    <FlatList
        data={data}
        renderItem={renderItem}
      />

<Text style={{color:'black', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'white',fontWeight:'bold', marginTop:5}}>
Esse exercício ajuda a fortalecer os músculos ao redor do joelho e pode proporcionar alívio para algumas pessoas com dor no joelho. No entanto, é importante respeitar seus limites e evitar qualquer movimento ou posição que cause dor intensa. Se a dor no joelho persistir ou piorar, é recomendado procurar a avaliação de um profissional de saúde, como um médico ou fisioterapeuta, para um diagnóstico preciso e orientações personalizadas.
</Text>

      <View style={{margin:60}}></View>
      </View>
      </View>

    </ScrollView>

     )
}





