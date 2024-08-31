import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Equilibriodezmin(props){


    const [data,setdata]=useState([
        {p:'1', color:'white', conteudo:'Equilíbrio em uma perna:',
        sub1:'Fique em pé com os pés afastados na largura dos ombros.',
        sub2:'Levante um dos pés do chão e mantenha o equilíbrio em uma perna.',
        sub3:'Mantenha a posição pelo maior tempo possível, visando pelo menos 30 segundos.',
        sub4:'Concentre-se em manter o corpo estável e alinhado.',
        sub5:'Alterne para a outra perna e repita o exercício.',
        sub6:'Realize 3 séries de equilíbrio em cada perna, com intervalos de descanso entre as séries.',
        sub7:'',
        sub8:''},

        {p:'2', color:'white', conteudo:'Caminhada de calcanhar aos dedos:',
        sub1:'Fique em pé com os pés juntos.',
        sub2:'Comece levantando os calcanhares, ficando na ponta dos pés.',
        sub3:'Em seguida, abaixe os calcanhares e levante os dedos dos pés.',
        sub4:'Continue alternando entre levantar os calcanhares e os dedos dos pés enquanto caminha para a frente.',
        sub5:'Tente manter o equilíbrio e a estabilidade durante todo o movimento.',
        sub6:'Caminhe por cerca de 10 metros em cada direção, repetindo o exercício por 2-3 minutos.',
        sub7:'',
        sub8:''},

        {p:'3', color:'white', conteudo:'Prancha lateral com equilíbrio:',
        sub1:'Deite-se de lado no chão, apoiando-se no antebraço e mantendo o corpo em linha reta.',
        sub2:'Levante o quadril do chão, apoiando-se no antebraço e no pé lateral.',
        sub3:'Mantenha o equilíbrio nessa posição lateral da prancha pelo maior tempo possível, visando pelo menos 30 segundos.',
        sub4:'Desça o quadril e descanse por alguns segundos.',
        sub5:'Repita o exercício do outro lado.',
        sub6:'Realize 3 séries de prancha lateral com equilíbrio em cada lado, com intervalos de descanso entre as séries.',
        sub7:'',
        sub8:''},

        {p:'4', color:'white', conteudo:'Posição da cadeira:',
        sub1:'Fique em pé com os pés juntos.',
        sub1:'Abaixe o corpo como se estivesse sentando em uma cadeira imaginária.',
        sub2:'Mantenha as coxas paralelas ao chão e os joelhos alinhados com os tornozelos.',
        sub3:'Mantenha a posição por pelo menos 30 segundos.',
        sub4:'Aumente gradualmente o tempo de permanência na posição da cadeira conforme você se sentir mais confortável.',
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
        <Text style={{color:'white', textAlign:'center', fontSize:30}}><MaterialCommunityIcons name="clock-outline" size={30} color="white"/> 10 minutos</Text>
      
        {/* CONTEUDO */}

        <Text style={{color:'black', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'white',fontWeight:'bold', marginTop:5}}>
    Lembre-se de focar na qualidade do equilíbrio e não na quantidade de tempo que você consegue ficar na posição. Se você é iniciante ou tem alguma condição pré-existente, é importante consultar um profissional de saúde antes de realizar qualquer exercício de equilíbrio.
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





