import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Forca10min(props){


    const [data,setdata]=useState([
        {p:'1', color:'white', conteudo:'Agachamentos com salto: Faça agachamentos completos, descendo o máximo que puder e, em seguida, salte o mais alto possível. Faça 10 repetições.'},
        {p:'2', color:'white', conteudo:'Flexões de braço: Faça flexões de braço, mantendo o corpo reto e descendo o máximo que conseguir. Se necessário, faça as flexões apoiando-se nos joelhos. Faça 10 repetições.'},
        {p:'3', color:'white', conteudo:'Lunges: Dê um passo à frente com uma perna, flexionando ambos os joelhos até que a coxa da perna da frente esteja paralela ao chão. Volte à posição inicial e repita com a outra perna. Faça 10 repetições para cada perna.'},
        {p:'4', color:'white', conteudo:'Prancha: Deite-se de barriga para baixo e apoie-se nos antebraços e dedos dos pés, mantendo o corpo reto e paralelo ao chão. Segure a posição por 30 segundos.'},
        {p:'5', color:'white', conteudo:'Elevações de panturrilha: Fique na beira de um degrau ou plataforma elevada, apoiando-se na ponta dos pés. Eleve o corpo usando apenas os músculos da panturrilha e depois desça. Faça 15 repetições.'},


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
            </View>
            <View style={{backgroundColor:'#EC661B', marginTop:10, width:'100%', height:2}}></View>
        </View>
    )
    
    return(
      <ScrollView style={{backgroundColor:'black',}}>

        <TouchableOpacity onPress={props.forca}>
            <View style={{backgroundColor:'rgba(80,80,80,0.8)', alignItems:'center', marginTop:15, flexDirection:'row'}}>
                <Image source={require('../../../../imagens/forca.png')} style={{height:80,width:80}}/>
                <Text style={{fontSize:60, color:'white',marginLeft:15}}>força</Text>
            </View>
        </TouchableOpacity>
        
        <View style={{alignItems:'center'}}>
        <View style={{width:"95%"}}>
        <Text style={{color:'white', textAlign:'center', fontSize:30}}><MaterialCommunityIcons name="clock-outline" size={30} color="white"/> 10 minutos</Text>
      
        {/* CONTEUDO */}

    <Text style={{color:'white', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'#F88036',color:'black',fontWeight:'bold', marginTop:5}}>
    Repita o circuito de exercícios o máximo de vezes possível dentro dos 10 minutos. Concentre-se em manter uma boa forma e execute os movimentos de forma controlada.
</Text>
<Text style={{color:'white', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'#F88036',color:'black',fontWeight:'bold', marginTop:5}}>
Lembre-se de aquecer antes de iniciar o treino e de respeitar os limites do seu corpo. Se necessário, adapte os exercícios ou as repetições de acordo com o seu nível de condicionamento físico.
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


