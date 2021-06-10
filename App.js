import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Avatar from './component/Avatar';
import HeartIcon from './component/heart-icon'
import GraphIcon from './component/graph-icon'
import BarbellIcon from './component/barbell-icon'
import Graph from './component/Graph'
import * as e4api from './api/v1/e4-connect-api'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default function App() {
  //{ API 사용 예제 }
  // var data = e4api.getLastSessionData();

  return (
    <PaperProvider theme={theme}>
      <View style={styles.emptySpace_1}></View>
      <View style={styles.profile}>
        <StatusBar style="auto" />
        <Avatar></Avatar>
        <Text>23 years old</Text>
        <Text>PARK MIN</Text>
      </View>
      <View style={styles.statusIconContainer}>
        <View style={styles.StatusIconItem}>
          <HeartIcon></HeartIcon>
          <Text style={styles.subfont}>당신의 건강 점수</Text>
          <Text style={styles.mainfont}>99점</Text>
        </View>
        <View style={styles.StatusIconItem}>
          <GraphIcon></GraphIcon>
          <Text style={styles.subfont}>또래 대비</Text>
          <Text style={styles.mainfont}>건강합니다.</Text>
        </View>
        <View style={styles.StatusIconItem}>
          <BarbellIcon></BarbellIcon>
          <Text style={styles.subfont}>오늘의 운동량</Text>
          <Text style={styles.mainfont}>부족합니다</Text>
        </View>        
      </View>
      <View style={styles.summaryGraph}>
        <ScrollView style={styles.scroll}>
        <Graph/>
        </ScrollView>
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