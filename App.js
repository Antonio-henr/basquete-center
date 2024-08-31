import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Header from './componentes/header/header.js';
import React, { useState } from "react";
import Footer from './componentes/footer/footer.js';
import BodyTreinos from './componentes/body/body_treinos.js';
import { useEffect } from 'react';
import * as Font from "expo-font"
import BodyAutocontrole from './componentes/body/body_autocontrole.js';
import Agilidade from './componentes/body/treinos/agilidade/agilidade.js';
import Agilidade5min from './componentes/body/treinos/agilidade/agilidade5minutos.js';
import Agilidade10min from './componentes/body/treinos/agilidade/agilidade10minutos.js';
import Agilidade15min from './componentes/body/treinos/agilidade/agilidade15minutos.js';
import Impulsao from './componentes/body/treinos/impulsao/impulsao.js';
import Impulsao5min from './componentes/body/treinos/impulsao/impulsao5minutos.js';
import Impulsao10min from './componentes/body/treinos/impulsao/impulsao10minutos.js';
import Impulsao15min from './componentes/body/treinos/impulsao/impulsao15minutos.js';
import Reflexo from './componentes/body/treinos/reflexo/reflexo.js';
import Reflexofacil from './componentes/body/treinos/reflexo/reflexofacil.js';
import Reflexodificil from './componentes/body/treinos/reflexo/reflexodificil.js';
import Forca from './componentes/body/treinos/forca/forca.js';
import Forca10min from './componentes/body/treinos/forca/forca10min.js';
import Forca20min from './componentes/body/treinos/forca/forca20min.js';
import Bandejaearremesso from './componentes/body/treinos/bandejaearremesso/bandejaearremesso.js';
import Bandejaearremesso10min from './componentes/body/treinos/bandejaearremesso/bandejaearremesso10min.js';
import Bandejaearremesso20min from './componentes/body/treinos/bandejaearremesso/bandejaearremesso20min.js';
import Drible from './componentes/body/treinos/drible/drible.js';
import Dribleiniciante from './componentes/body/treinos/drible/dribleiniciante.js';
import Dribleavancado from './componentes/body/treinos/drible/dribleavancado.js';
import Defesa from './componentes/body/treinos/defesa/defesa.js';
import Defesaunico from './componentes/body/treinos/defesa/defesaunico.js';
import Controledebola from './componentes/body/treinos/controle de bola/controledebola.js';
import Controleunico from './componentes/body/treinos/controle de bola/controledebolaunico.js';
import Passe from './componentes/body/treinos/passe/passe.js';
import Passe10min from './componentes/body/treinos/passe/passe10min.js';
import Passe20min from './componentes/body/treinos/passe/passe20min.js';
import Fortalecimento from './componentes/body/zen/fortalecimento/fortalecimento.js';
import Fortalecimentoiniciante from './componentes/body/zen/fortalecimento/fortalecimentoiniciante.js';
import Fortalecimentoavancado1 from './componentes/body/zen/fortalecimento/fortalecimentoavancado1.js';
import Fortalecimentoavancado2 from './componentes/body/zen/fortalecimento/fortalecimentoavancado2.js';
import Poslesao from './componentes/body/zen/poslesao/poslesao.js';
import Tornozelo from './componentes/body/zen/poslesao/tornozelo.js';
import Tornozelocombanda from './componentes/body/zen/poslesao/tornozelocombanda.js';
import Joelho from './componentes/body/zen/poslesao/joelho.js';
import Joelhonacadeira from './componentes/body/zen/poslesao/Joelhonacadeira.js';
import Ombro from './componentes/body/zen/poslesao/ombro.js';
import Autocontrole from './componentes/body/zen/autocontrole/autocontrole.js';
import Alongamento from './componentes/body/zen/alongamento/alongamento.js';
import Panturrilhas from './componentes/body/zen/alongamento/panturrilhas.js';
import Isquiotibiais from './componentes/body/zen/alongamento/isquiotibiais.js';
import Quadriceps from './componentes/body/zen/alongamento/quadriceps.js';
import Ombros from './componentes/body/zen/alongamento/ombros.js';
import Flexoresdequadril from './componentes/body/zen/alongamento/quadril.js';
import Equilibrio from './componentes/body/zen/equilibrio/equilibrio.js';
import Equilibriodezmin from './componentes/body/zen/equilibrio/equilibriodezmin.js';
import Equilibriocombola from './componentes/body/zen/equilibrio/equilibriocombola.js';
import Bodyfilmeseseries from './componentes/body/body_filmeseseries.js';
import Filmes from './componentes/body/filmeseseries/filmes.js';
import Series from './componentes/body/filmeseseries/series.js';
import Cronometro from './componentes/cronometro/cronometro.js';
import CronometroHeader from './componentes/cronometroheader/cronometroheader.js';
import { LogBox } from 'react-native';
// import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads'
import { BannerAd, TestIds } from '@react-native-admob/admob';
import { BannerAdSize } from '@react-native-admob/admob';
import { useRef } from 'react';


const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-3846010131997423/5312303056';


export default function App(props) {


  LogBox.ignoreLogs(['Warning: ...', 'Error: ...']);

  const [carregado, setCarregado] = useState(true);
  const[modo,setmodo]=useState('treino')



  const loadFont = async () => {
    await Font.loadAsync({
      Anton: require("./assets/fonts/Anton-Regular.ttf"),
    });
  };
  
  useEffect(() => {
    loadFont();
    setCarregado(false)
  }, [0]);
 

if(carregado==false){
  return (
    <View style={{height:'100%'}}>
      <StatusBar hidden={true}/>
      {modo == 'treino' ? <Header/> :
      modo == 'zen' ? <Header/>:
      modo == 'cronometro' ? <Header/>:
      modo == 'filmeseseries' ? <Header/>:
      modo == 'filmes' ? <Header/>:
      modo == 'series' ? <Header/>:
      modo == 'agilidade' ? <Header/>:
      modo == 'impulsao' ? <Header/>:
      modo == 'reflexo' ? <Header/>:
      modo == 'forca' ? <Header/>:
      modo == 'bandejaearremesso' ? <Header/>:
      modo == 'drible' ? <Header/>:
      modo == 'defesa' ? <Header/>:
      modo == 'controle' ? <Header/>:
      modo == 'passe' ? <Header/>:
      modo == 'fortalecimento' ? <Header/>:
      modo == 'poslesao' ? <Header/>:
      modo == 'alongamento' ? <Header/>:
      modo == 'equilibrio' ? <Header/>:
      <CronometroHeader/>}


<BannerAd
      unitId={adUnitId}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
      


      {modo === 'treino' ? <BodyTreinos agilidade={()=>setmodo('agilidade')} impulsao={()=>setmodo('impulsao')} reflexo={()=>setmodo('reflexo')} forca={()=>setmodo('forca')}  bandejaearremesso={()=>setmodo('bandejaearremesso')} drible={()=>setmodo('drible')} defesa={()=>setmodo('defesa')} controle={()=>setmodo('controle')} passe={()=>setmodo('passe')}/> : 
        // AGILIDADE
      modo === 'agilidade' ? <Agilidade Fechar={()=>setmodo('treino')}  agilidade5min={()=>setmodo('agilidade5min')}  agilidade10min={()=>setmodo('agilidade10min')}  agilidade15min={()=>setmodo('agilidade15min')}/> :
        modo === 'agilidade5min' ? <Agilidade5min agilidade={()=>setmodo('agilidade')}/> :
        modo === 'agilidade10min' ? <Agilidade10min agilidade={()=>setmodo('agilidade')}/> :
        modo === 'agilidade15min' ? <Agilidade15min agilidade={()=>setmodo('agilidade')}/> :
        // IMPULSÃO
      modo === 'impulsao' ? <Impulsao Fechar={()=>setmodo('treino')}  cincomin={()=>setmodo('impulsao5min')}  dezmin={()=>setmodo('impulsao10min')}  quinzemin={()=>setmodo('impulsao15min')}/> :
        modo === 'impulsao5min' ? <Impulsao5min impulsao={()=>setmodo('impulsao')}/> :
        modo === 'impulsao10min' ? <Impulsao10min impulsao={()=>setmodo('impulsao')}/> :
        modo === 'impulsao15min' ? <Impulsao15min impulsao={()=>setmodo('impulsao')}/> :
        //REFLEXO  
      modo === 'reflexo' ? <Reflexo Fechar={()=>setmodo('treino')}  facil={()=>setmodo('reflexofacil')}  dificil={()=>setmodo('reflexodificil')}/> :
        modo === 'reflexofacil' ? <Reflexofacil reflexo={()=>setmodo('reflexo')}/> :
        modo === 'reflexodificil' ? <Reflexodificil reflexo={()=>setmodo('reflexo')}/> :
        // FORÇA
      modo === 'forca' ? <Forca Fechar={()=>setmodo('treino')}  dezmin={()=>setmodo('forca10min')}  vintemin={()=>setmodo('forca20min')} /> :
        modo === 'forca10min' ? <Forca10min forca={()=>setmodo('forca')}/> :
        modo === 'forca20min' ? <Forca20min forca={()=>setmodo('forca')}/> :
        // BANDEJA E ARREMESSO
      modo === 'bandejaearremesso' ? <Bandejaearremesso Fechar={()=>setmodo('treino')}  dezmin={()=>setmodo('bandejaearremesso10min')}  vintemin={()=>setmodo('bandejaearremesso20min')} /> :
        modo === 'bandejaearremesso10min' ? <Bandejaearremesso10min bandejaearremesso={()=>setmodo('bandejaearremesso')}/> :
        modo === 'bandejaearremesso20min' ? <Bandejaearremesso20min bandejaearremesso={()=>setmodo('bandejaearremesso')}/> :
        // DRIBLE
      modo === 'drible' ? <Drible Fechar={()=>setmodo('treino')}  facil={()=>setmodo('dribleiniciante')}  dificil={()=>setmodo('dribleavancado')} /> :
        modo === 'dribleiniciante' ? <Dribleiniciante drible={()=>setmodo('drible')}/> :
        modo === 'dribleavancado' ? <Dribleavancado drible={()=>setmodo('drible')}/> :
        // DEFESA
      modo === 'defesa' ? <Defesa Fechar={()=>setmodo('treino')}  treinounico={()=>setmodo('defesaunico')} /> :
       modo === 'defesaunico' ? <Defesaunico defesa={()=>setmodo('defesa')}/> :
        // CONTROLE DE BOLA
      modo === 'controle' ? <Controledebola Fechar={()=>setmodo('treino')}  treinounico={()=>setmodo('controleunico')} /> :
       modo === 'controleunico' ? <Controleunico drible={()=>setmodo('controle')}/> :
        // PASSE
      modo === 'passe' ? <Passe Fechar={()=>setmodo('treino')}  dezmin={()=>setmodo('passe10min')}  vintemin={()=>setmodo('passe20min')} /> :
      modo === 'passe10min' ? <Passe10min passe={()=>setmodo('passe')}/> :
      modo === 'passe20min' ? <Passe20min passe={()=>setmodo('passe')}/> :   

      // ESPAÇO ZEN ------------------------------------------------------------------------------
      modo === 'zen' ? <BodyAutocontrole fortalecimento={()=>setmodo('fortalecimento')} poslesao={()=>setmodo('poslesao')} autocontrole={()=>setmodo('autocontrole')} alongamento={()=>setmodo('alongamento')}  equilibrio={()=>setmodo('equilibrio')}/> :
      //FORTALECIMENTO  
      modo === 'fortalecimento' ? <Fortalecimento Fechar={()=>setmodo('zen')}  iniciante={()=>setmodo('fortalecimentoiniciante')}  avancado1={()=>setmodo('fortalecimentoavancado1')} avancado2={()=>setmodo('fortalecimentoavancado2')}/> :
       modo === 'fortalecimentoiniciante' ? <Fortalecimentoiniciante fortalecimento={()=>setmodo('fortalecimento')}/> :
       modo === 'fortalecimentoavancado1' ? <Fortalecimentoavancado1 fortalecimento={()=>setmodo('fortalecimento')}/> :
       modo === 'fortalecimentoavancado2' ? <Fortalecimentoavancado2 fortalecimento={()=>setmodo('fortalecimento')}/> :
      //POS-LESÃO  
      modo === 'poslesao' ? <Poslesao Fechar={()=>setmodo('zen')}  tornozelo={()=>setmodo('tornozelo')}  tornozelocombanda={()=>setmodo('tornozelocombanda')} joelho={()=>setmodo('joelho')} Joelhonacadeira={()=>setmodo('joelhonacadeira')} ombro={()=>setmodo('ombro')}/> :
        modo === 'tornozelo' ? <Tornozelo poslesao={()=>setmodo('poslesao')}/> :
        modo === 'tornozelocombanda' ? <Tornozelocombanda poslesao={()=>setmodo('poslesao')}/> :
        modo === 'joelho' ? <Joelho poslesao={()=>setmodo('poslesao')}/> :
        modo === 'joelhonacadeira' ? <Joelhonacadeira poslesao={()=>setmodo('poslesao')}/> :
        modo === 'ombro' ? <Ombro poslesao={()=>setmodo('poslesao')}/> :
      //AUTOCONTROLE
      modo === 'autocontrole' ? <Autocontrole zen={()=>setmodo('zen')}/> :
       //ALONGAMENTO  
      modo === 'alongamento' ? <Alongamento Fechar={()=>setmodo('zen')}  panturrilhas={()=>setmodo('panturrilhas')}  isquiotibiais={()=>setmodo('isquiotibiais')} quadriceps={()=>setmodo('quadriceps')} ombros={()=>setmodo('ombros')} quadril={()=>setmodo('quadril')}/> :
        modo === 'panturrilhas' ? <Panturrilhas alongamento={()=>setmodo('alongamento')}/> :
        modo === 'isquiotibiais' ? <Isquiotibiais alongamento={()=>setmodo('alongamento')}/> :
        modo === 'quadriceps' ? <Quadriceps alongamento={()=>setmodo('alongamento')}/> :
        modo === 'ombros' ? <Ombros alongamento={()=>setmodo('alongamento')}/> :
        modo === 'quadril' ? <Flexoresdequadril alongamento={()=>setmodo('alongamento')}/> :
       //EQUILIBRIO  
       modo === 'equilibrio' ? <Equilibrio Fechar={()=>setmodo('zen')}  equilibriodezmin={()=>setmodo('equilibriodezmin')}  combola={()=>setmodo('combola')}/> :
       modo === 'equilibriodezmin' ? <Equilibriodezmin equilibrio={()=>setmodo('equilibrio')}/> :
       modo === 'combola' ? <Equilibriocombola equilibrio={()=>setmodo('equilibrio')}/> :
      // ESPAÇO FILMES E SÉRIES------------------------------------------------------------------------------
       modo === 'filmeseseries' ? <Bodyfilmeseseries filmes={()=>setmodo('filmes')} series={()=>setmodo('series')}/> :
      //FILMES E SÉRIES
       modo == 'filmes' ? <Filmes filmeseseries={()=>setmodo('filmeseseries')}/>:
       modo == 'series' ? <Series filmeseseries={()=>setmodo('filmeseseries')}/>:
      //CRÔNOMETRO
      modo == 'cronometro' ? <Cronometro/>:










        <Text>olá</Text>}

       {/* <BannerAd 
      unitId={"ca-app-pub-3846010131997423~5479027854"} 
      size={BannerAdSize.FULL_BANNER} 
      requestOptions={{ 
        requestNonPersonalizedAdsOnly: true, 
      }} 
    />  */}






      <Footer Modo1={()=>setmodo('treino')} Modo2={()=>setmodo('zen')} Modo3={()=>setmodo('filmeseseries')} Modo4={()=>setmodo('cronometro')}
      cor1={modo=='treino'?'white':'black'}
      cor2={modo=='zen'?'white':'black'}
      cor3={modo=='filmeseseries'?'white':'black'}
      cor4={modo=='cronometro'?'white':'black'}
      ></Footer>
    </View>
  );
}
}