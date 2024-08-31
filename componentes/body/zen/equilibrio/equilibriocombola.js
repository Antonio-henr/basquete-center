import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Equilibriocombola(props){


    const [data,setdata]=useState([
        {p:'1', color:'white', conteudo:'Fique em pé com os pés afastados na largura dos ombros, segurando uma bola de basquete.',
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'2', color:'white', conteudo:'Levante um dos pés do chão e mantenha o equilíbrio em uma perna.',
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'3', color:'white', conteudo:'Enquanto mantém o equilíbrio, passe a bola de basquete para a frente e para trás entre as mãos.',
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'4', color:'white', conteudo:'Concentre-se em manter o corpo estável e alinhado durante todo o exercício.',
        sub1:'',
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'4', color:'white', conteudo:'Concentre-se em manter o corpo estável e alinhado durante todo o exercício.',
        sub1:'',
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'5', color:'white', conteudo:'Realize o exercício por 1 minuto e, em seguida, alterne para a outra perna.',
        sub1:'',
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'6', color:'white', conteudo:'Repita a sequência alternando entre as pernas por um total de 10 minutos.',
        sub1:'',
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

        <TouchableOpacity onPress={props.equilibrio}>
            <View style={{backgroundColor:'#082157', alignItems:'center', marginTop:15, flexDirection:'row'}}>
                <Image source={require('../../../../imagens/equilibrio.png')} style={{height:80,width:80}}/>
                <Text style={{fontSize:40, color:'white',marginLeft:15}}>equilibrio</Text>
            </View>
        </TouchableOpacity>

        <View style={{alignItems:'center'}}>
        <View style={{width:"95%"}}>
        <Text style={{color:'white', textAlign:'center', fontSize:30}}><MaterialCommunityIcons name="clock-outline" size={30} color="white"/> equilibrio com bola</Text>
      
        {/* CONTEUDO */}

        <Text style={{color:'black', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'white',fontWeight:'bold', marginTop:5}}>
        Lembrando que a consistência é fundamental para desenvolver o equilíbrio. Portanto, tente incluir esse exercício regularmente em sua rotina de treinamento para obter melhores resultados.
        </Text>

        <Text style={{color:'black', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'white',fontWeight:'bold', marginTop:5}}>
        Certifique-se de manter um nível adequado de desafio durante o exercício, buscando a estabilidade e melhorando o equilíbrio a cada repetição. Se necessário, você pode começar apoiando-se em uma parede ou segurando em um suporte para obter mais estabilidade. Conforme você ganha confiança e equilíbrio, tente realizar o exercício sem apoio.
        </Text>

        <Text style={{color:'white', fontSize:26, textAlign:'center', marginBottom:10,fontWeight:'bold', marginTop:5}}>
        Equilíbrio em uma perna{'\n'}com passe de bola:
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





