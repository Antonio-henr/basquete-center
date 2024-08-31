import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Tornozelo(props){


    const [data,setdata]=useState([
        {p:'1', color:'white', conteudo:'Sente-se em uma superfície plana, com as pernas estendidas à sua frente.',
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'2', color:'white', conteudo:'Prenda uma banda de resistência em volta da parte média de um dos pés e segure a outra extremidade com as mãos.',
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'3', color:'white', conteudo:'Mantendo a perna reta, gire o tornozelo para dentro (em direção à linha média do corpo) contra a resistência da banda.',
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'4', color:'white', conteudo:'Em seguida, gire o tornozelo para fora (afastando-o da linha média do corpo) contra a resistência da banda.',
        sub1:'',
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:''},

        {p:'5', color:'white', conteudo:'Realize 2 séries de 10 repetições para cada direção, alternando entre a torção para dentro e a torção para fora.',
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
        <Text style={{color:'white', textAlign:'center', fontSize:25}}><MaterialCommunityIcons name="clock-outline" size={30} color="white"/> tornozelo torcido(com  banda)</Text>
      
        {/* CONTEUDO */}

    <Text style={{color:'black', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'white',fontWeight:'bold', marginTop:5}}>
    Lembre-se de começar com uma banda de resistência mais leve e, à medida que você se sentir mais confortável e forte, poderá progredir para uma resistência mais forte. É importante realizar o exercício de forma controlada e dentro dos limites de conforto, evitando qualquer dor ou desconforto excessivo.
    </Text>
    
    <Text style={{color:'white', fontSize:25, textAlign:'center', marginBottom:10, fontWeight:'bold', marginTop:5}}>
    Exercício com banda:
    </Text>
    <FlatList
        data={data}
        renderItem={renderItem}
      />

<Text style={{color:'black', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'white',fontWeight:'bold', marginTop:5}}>
    Se você tiver alguma condição pré-existente no tornozelo ou estiver se recuperando de uma lesão, é recomendável consultar um profissional de saúde antes de iniciar qualquer programa de exercícios específico.(Se você não possui uma banda de resistência poderá fazer os exercícios com o auxílio de um cinto)
    </Text>

      <View style={{margin:60}}></View>
      </View>
      </View>

    </ScrollView>

     )
}





