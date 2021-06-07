import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Avatar from './component/Avatar';
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
    {/* API 사용 예제 */}
    // var data = e4api.getLastSessionData();

    return (
        <PaperProvider theme={theme}>
            <View style={styles.container}>
            <StatusBar style="auto" />
            <Avatar></Avatar>
            <Text>23 years old</Text>
            <Text>MIN PARK</Text>

            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});