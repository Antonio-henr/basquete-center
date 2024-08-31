import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';



var blau = []

export default function Series(props) {
  const [conteudo, setconteudo] = useState();
  const imag_compl = "https://image.tmdb.org/t/p/w500";
  const[abrir,setabrir]=useState([])
  const[erro,seterro]=useState(false)

  useEffect(()=>{
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWNjNmU4YTBhOTNhMTQ2ODlhNGY3ZGQzYjczZTRlOSIsInN1YiI6IjY0MWM0ZWJlOTVjMGFmMDBhMDIxN2QwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AixNDgr-_9cou4nj4grHGx0oB5iTFCSBPMUWt33ATcs",
      },
    };
  
    fetch(
      "https://api.themoviedb.org/3/account/18489537/favorite/tv?language=pt-BR&page=1&sort_by=created_at.asc",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setconteudo(data.results);
        // console.log(conteudo);

      
      })
      .catch((err)=>seterro(true));

  },[])








  

  const renderItem = ({ item }) => (
    <View>
      <View style={{ marginTop: 10, alignItems: "center" }}>
        <Text
          style={{color: "white", fontSize: 25, padding: 10, width: "90%", textAlign: "center",}}>
          {item.name}
        </Text>
        <Image
          style={{ height: 378, width: 270 }}
          source={{ uri: imag_compl + item.poster_path }}
        />
        
        
        <View style={{flexDirection:'row'}}>
          <Text style={{color: "white", fontSize: 30, fontWeight: "bold",}}>
          {item.vote_average}
          </Text>
          <EvilIcons name="star" size={40} color="yellow" />
        </View>

        <Text style={{color: "white", fontSize: 30, marginTop:10}}>
         SINOPSE:
        </Text>

        


        <Text style={{color: "white", fontSize: 18, textAlign: "center", display:item.display}}>
          {item.overview}
        </Text>

      </View>
      <View style={{backgroundColor: "#EC661B", marginTop: 10, width: "100%", height: 2,}}></View>
    </View>
  );

  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <TouchableOpacity onPress={props.filmeseseries}>
        <View
          style={{
            backgroundColor: "rgba(80,80,80,0.8)",
            alignItems: "center",
            marginTop: 15,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: 90,
              width: 100,
              backgroundColor: "#F88036",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather name="tv" size={90} color="black" />
          </View>
          <Text style={{ fontSize: 60, color: "white", marginLeft: 15 }}>
            séries
          </Text>
        </View>
      </TouchableOpacity>

      {/* CONTEUDO */}

      <Text
        style={{
          fontSize: 25,
          textAlign: "center",
          marginBottom: 10,
          backgroundColor: "#F88036",
          color: "black",
          fontWeight: "bold",
          marginTop: 10,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        Séries para você que gosta{"\n"}de jogar basquete
      </Text>

      <FlatList data={conteudo} renderItem={renderItem} />
      {(erro ? <Text    style={{color: "white", fontSize: 25, padding: 10, width: "100%", textAlign: "center",}}>ERRO AO CONECTAR AO SERVIDDOR...</Text> : <View></View>)}

      <View style={{ margin: 60 }}></View>
    </ScrollView>
  );
}
