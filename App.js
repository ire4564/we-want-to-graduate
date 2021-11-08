import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Graph from './component/Graph';
import Block from './component/Block';
import CurrentResult from './component/CurrentResult';
import TimeLog from './component/TimeLog';
import ReloadTime from './component/ReloadTime';
import * as e4api from './api/v1/e4-connect-api';

import * as ChangeColor from './component/Background';
import ShowIcon from './component/Show-icon';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    //배경 색 바꾸기
    primary: '#f1c40f',
    accent: '#f1c40f',
  },
  fontSize: {
    title: 20,
    text: 18,
  },
};

export default function App() {
  //{ API 사용 예제 }
  //var data = e4api.getLastSessionData();
  
  //혈압 값 예측
  const [systolics, setSystolics] = useState(139);
  const [relaxas, setRelaxas] = useState(80);
  
  // 그래프 컴포넌트
  const graph = (<>
  <Text style={{color: "#ffffff", fontSize: 20, marginBottom: 10}}>혈압 그래프(mmHg)</Text>
  <Graph data="sample" />
  </>)

  return (
    <PaperProvider theme={theme}>
      <View style={{flex: 0.5, justifyContent: "center", alignItems:'center',backgroundColor: ChangeColor.Background(systolics, relaxas)}}>
        <ReloadTime/>
        <ShowIcon systolic={systolics} relaxa={relaxas}/>
      </View>
      <View style={{flex: 0.5, backgroundColor:(ChangeColor.Background(systolics, relaxas))}}>
        <Block content={<CurrentResult systolic={systolics} diastolic={relaxas}/>}/>
        <Block content={<TimeLog />}/>
        <Block content={graph}/>
      </View>
    </PaperProvider>
    );
}

const styles = StyleSheet.create({
  scroll:{
    marginTop: 15,
  },
  profile: {
    flex: 0.5,
    backgroundColor: '#fff', // '#fff'
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusIconContainer: {
    flex: 0.8,
    backgroundColor: '#fff', // '#fff'
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  StatusIconItem: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  summaryGraph: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptySpace_1: {
    flex: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  subfont: {
    fontSize: 15,
    marginTop: 10
  },
  mainfont: {
    fontSize: 23
  }
});