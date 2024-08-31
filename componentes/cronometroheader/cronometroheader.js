import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ImageBackground,
} from "react-native";
import { Audio } from "expo-av";
import { MaterialIcons } from "@expo/vector-icons";

export default function CronometroHeader(props) {
  const [minutos, setMinutos] = useState("");
  const [segundos, setSegundos] = useState("");
  const [tempoTotal, setTempoTotal] = useState(0);
  const [tempoRestante, setTempoRestante] = useState(0);
  const [ativo, setAtivo] = useState(false);
  const [confparasom,setconfparasom] = useState(0)


  const sound = useRef(null);

  useEffect(() => {
    if (ativo && tempoRestante > 0) {
      const intervalo = setInterval(() => {
        setTempoRestante((tempoRestante) => tempoRestante - 1);
      }, 1000);
      return () => clearInterval(intervalo);
    } else if (tempoRestante === 0) {
      setAtivo(false);
      setconfparasom(confparasom+1)
      if(confparasom != 0)
      playSound();
    }
  }, [ativo, tempoRestante]);

  const iniciarTemporizador = (tempo) => {
    const totalSegundos = tempo * 60;
    setTempoTotal(totalSegundos);
    setTempoRestante(totalSegundos);
    setAtivo(true);
  };

 


  const zerarTemporizador = () => {
    setMinutos("");
    setSegundos("");
    setTempoTotal('0');
    setTempoRestante('0');
    setAtivo(false);
  };

  const formatarTempo = () => {
    const minutosFormatados = Math.floor(tempoRestante / 60);
    const segundosFormatados = tempoRestante % 60;
    return `${minutosFormatados < 10 ? "0" : ""}${minutosFormatados}:${
      segundosFormatados < 10 ? "0" : ""
    }${segundosFormatados}`;
  };

  const playSound = async () => {
    try {
      const { sound: soundObject } = await Audio.Sound.createAsync(
        require("../../imagens/somdefinal.mp3"),
        { shouldPlay: true }
      );
      sound.current = soundObject;
    } catch (error) {
      console.log("Erro ao reproduzir o som:", error);
    }
  };

  return (
    <View style={styles.container}>
      
     

        <View
          style={{
            backgroundColor: "#F88036",
            alignItems: "center",
            width:'100%',
            height:80,
            justifyContent: "center",
            flexDirection:'row'
          }}
        > 
        
          <View style={{width:'35%', alignItems:'center'}}>
            <Text style={styles.temporizador}>{formatarTempo()}</Text>
          </View>


          <View  style={{width:'65%'}}>
          {!ativo ? (
            <View style={{ alignItems: "center", width:'100%' ,flexDirection:'row', justifyContent:'space-around' }}>
         
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => iniciarTemporizador(5)}
                >
                  <Text style={styles.botaoTexto}>5 Min</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => iniciarTemporizador(10)}
                >
                  <Text style={styles.botaoTexto}>10 Min</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => iniciarTemporizador(15)}
                >
                  <Text style={styles.botaoTexto}>15 Min</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => iniciarTemporizador(20)}
                >
                  <Text style={styles.botaoTexto}>20 Min</Text>
                </TouchableOpacity>
          
              
              
             
            </View>
          ) : (
             <TouchableOpacity style={styles.botao2} onPress={zerarTemporizador}>
            <Text style={styles.botaoTexto2}>ZERAR</Text>
          </TouchableOpacity>
          )}
          </View>
         
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',

  },
  temporizador: {
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 10,
  },
  
  botao: {
    backgroundColor: "black",
    width: 45,
    height: 45,
    borderRadius: 22.5,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  botao2: {
    backgroundColor: "black",
    width: "100%",
    height: 80,
    margin: 15,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  botaoTexto: {
    fontSize: 10,
    color: "white",
  },
  botaoTexto2: {
    fontSize: 30,
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: 'space-between',
    width: "95%",
  
    
  },
  input: {
    height: 60,
    width: 120,
    fontSize:20,
    textAlign: "center",
    borderColor: "gray",
    backgroundColor: "white",
    borderRadius: 40,
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
});
