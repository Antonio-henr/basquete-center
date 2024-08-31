import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ImageBackground,
  Button,
} from "react-native";
import { Audio } from "expo-av";
import { MaterialIcons } from "@expo/vector-icons";

export default function Cronometro(props) {
  const [minutos, setMinutos] = useState("");
  const [segundos, setSegundos] = useState("");
  const [tempoTotal, setTempoTotal] = useState(0);
  const [tempoRestante, setTempoRestante] = useState(0);
  const [ativo, setAtivo] = useState(false);
  const [confparasom,setconfparasom] = useState(0)
  const [continuacao,setcontinuacao] = useState(false)
  const [regresso,setregresso] = useState(0)


  const sound = useRef(null);

  useEffect(() => {
    if (ativo && tempoRestante > 0) {
      const intervalo = setInterval(() => {
        setTempoRestante((tempoRestante) => tempoRestante - 1);
         setregresso(tempoRestante*2)
      }, 1000);
      setcontinuacao(true)
      return () => clearInterval(intervalo);
    } else if (tempoRestante === 0) {
      setAtivo(false);
      setconfparasom(confparasom+1)
      if(confparasom != 0)
      playSound();
      setcontinuacao(false)
    }


    
  }, [ativo, tempoRestante]);


  function continuar(){
    setAtivo(true)
  }

  const iniciarTemporizador = (tempo) => {
    const totalSegundos = tempo * 60;
    setTempoTotal(totalSegundos);
    setregresso('100%')
    setTempoRestante(totalSegundos);
    setAtivo(true);
  };

  const iniciarTemporizadorPersonalizado = () => {

    if(minutos || segundos == ''){

    }else{
    const minutosValidos = parseInt(minutos) || 0;
    const segundosValidos = parseInt(segundos) || 0;
    const totalSegundos = minutosValidos * 60 + segundosValidos;
    setTempoTotal(totalSegundos);
    setTempoRestante(totalSegundos);
    setAtivo(true);}
  };

  const pausarTemporizador = () => {
    setAtivo(false);
  };



  const zerarTemporizador = () => {
    setMinutos("");
    setSegundos("");
    setTempoTotal('0');
    setTempoRestante('0');
    setAtivo(false);
    setcontinuacao(false)
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
      <ImageBackground
        source={require("../../imagens/imagemdefundo.png")}
        style={{ height: "100%", width: "100%", alignItems:'center' }}
      >
        <View
          style={{
            width:'100%',
            backgroundColor: "black",
            justifyContent:'space-around',
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <Text style={{ color: "white", fontSize: 40 }}>
            CRONÔMETRO 
            <MaterialIcons name="timer" size={30} color="white"  />
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#F88036",
            alignItems: "center",
            width:400,
            maxWidth:'95%',
            marginTop: 20,
            borderRadius: 20,
            justifyContent: "center",
          }}
        >
          <Text style={styles.temporizador}>{formatarTempo()}</Text>
          {!ativo ? (
            <View style={{ alignItems: "center", width:'95%' }}>
              <View style={styles.botoesContainer}>
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
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Minutos"
                  keyboardType="numeric"
                  value={minutos}
                  onChangeText={setMinutos}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Segundos"
                  keyboardType="numeric"
                  value={segundos}
                  onChangeText={setSegundos}
                />
              </View>
              <TouchableOpacity
                style={styles.botao2}
                onPress={iniciarTemporizadorPersonalizado}
              >
                <Text style={styles.botaoTexto2}>INICIAR</Text>
              </TouchableOpacity>

              {continuacao ? (
                <TouchableOpacity style={styles.botao2} onPress={()=>continuar()}>
                  <Text style={styles.botaoTexto2}>CONTINUAR</Text>
                </TouchableOpacity>
              )
              : (
              <View style={{display:'none'}}></View>
              )}
            </View>
          ) : (
            <View style={{width:'100%', alignItems:'center'}}>
              {/* BARRA DE REGRESSO */}
          <View style={{width:regresso,maxWidth:'95%', backgroundColor:'red', height:20}}></View>
            <TouchableOpacity
              style={styles.botao2}
              onPress={pausarTemporizador}
            >
              <Text style={styles.botaoTexto2}>PAUSAR</Text>
            </TouchableOpacity>
            
            </View>
          )}
          <TouchableOpacity style={styles.botao2} onPress={zerarTemporizador}>
            <Text style={styles.botaoTexto2}>ZERAR</Text>
          </TouchableOpacity>

          
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center'

  },
  temporizador: {
    fontSize: 80,
    fontWeight: "bold",
    marginBottom: 10,
  },
  botoesContainer: {
    flexDirection: "row",
    marginBottom: 10,
    width: "100%",
    justifyContent: "space-around",
  },
  botao: {
    backgroundColor: "black",
    width: 80,
    height: 80,
    borderRadius: 40,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  botao2: {
    backgroundColor: "black",
    width: 300,
    height: 65,
    borderRadius:8,
    marginTop:5,
    marginBottom:5,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  botaoTexto: {
    fontSize: 20,
    color: "white",
  },
  botaoTexto2: {
    fontSize: 30,
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: 'space-around',
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
