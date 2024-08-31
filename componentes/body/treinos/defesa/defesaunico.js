import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BodyTreinos from "../../body_treinos";


export default function Defesaunico(props){


    const [data,setdata]=useState([
        {p:'1', color:'white', conteudo:'Aquecimento defensivo: Deslocamento lateral: Fique na posição defensiva, com os joelhos flexionados e os pés afastados na largura dos ombros. Realize deslocamentos laterais de um lado para o outro da quadra, mantendo-se baixo e com as mãos ativas. Faça isso por 2 minutos.'},
        {p:'2', color:'white', conteudo:'Defesa individual: Marcação individual: Encontre um parceiro e pratique a defesa individual. Seu objetivo é impedir que o seu oponente avance e marque pontos. Concentre-se em manter uma postura baixa, com os olhos no peito do oponente, e use movimentos rápidos e ativos para contestar os arremessos. Alterne os papéis de defensor e atacante a cada 2 minutos.'},
        {p:'3', color:'white', conteudo:'Defesa de corta-luz: Pratique a defesa em situações de corta-luz, em que um jogador tenta passar por um bloqueio do oponente. Trabalhe em sua capacidade de se desvencilhar do bloqueio e continuar marcando o jogador ofensivo. Execute 5 repetições de defesa em corta-luz em ambos os lados da quadra.'},
        {p:'4', color:'white', conteudo:'Defesa em transição: Simule situações de defesa em transição, em que você precisa correr de volta para a defesa e marcar um jogador adversário em velocidade. Pratique a mudança rápida de direção, a comunicação defensiva e a contestação de arremessos. Execute 5 sequências de defesa em transição, alternando os papéis de defensor e atacante.'},
        {p:'5', color:'white', conteudo:'Defesa em equipe: Jogue um pequeno jogo ou pratique a defesa em equipe em situações de jogo. Trabalhe em sua capacidade de se comunicar com seus companheiros de equipe, alternar marcações, fazer marcação dupla e ajudar na defesa. Execute um jogo de 5 contra 5 por 5 minutos ou faça 10 sequências de defesa em equipe, alternando os papéis de defensor e atacante.'},


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

        <TouchableOpacity onPress={props.defesa}>
            <View style={{backgroundColor:'rgba(80,80,80,0.8)', alignItems:'center', marginTop:15, flexDirection:'row'}}>
                <Image source={require('../../../../imagens/defesa.png')} style={{height:80,width:80}}/>
                <Text style={{fontSize:60, color:'white',marginLeft:15}}>defesa</Text>
            </View>
        </TouchableOpacity>

        <View style={{alignItems:'center'}}>
        <View style={{width:"95%"}}>
        <Text style={{color:'white', textAlign:'center', fontSize:30}}><MaterialCommunityIcons name="clock-outline" size={30} color="white"/> treino único</Text>
      
        {/* CONTEUDO */}

    <Text style={{color:'white', fontSize:17, textAlign:'center', marginBottom:10,backgroundColor:'#F88036',color:'black',fontWeight:'bold', marginTop:5}}>
    Durante todo o treino, lembre-se de manter uma postura baixa, ter as mãos ativas, se comunicar com seus companheiros de equipe e estar pronto para reagir rapidamente às jogadas do adversário. Pratique regularmente para melhorar suas habilidades defensivas e se tornar um defensor eficaz no basquete.
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


