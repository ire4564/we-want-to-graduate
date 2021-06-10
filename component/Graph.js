import * as React from 'react';
import { Dimensions, View, Text } from "react-native";
import {LineChart} from 'react-native-chart-kit';
import * as e4api from '../api/v1/e4-connect-api';
import Data from '../data/test.json';

var data = Data//e4api.getLastSessionData();

const screenWidth = Dimensions.get("window").width;
const graph_data = {
    // labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [1, 2, 3, 4, 5], //data['ACC']['x'],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // 그래프 색상
        strokeWidth: 2 // 선굵기
      }
    ],
    legend: ["Rainy Days"] // 옵션 이름
};
const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFFFFF",
    //backgroundGradientToOpacity: 0.1,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,    //보조선 색상
    strokeWidth: 1, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: true // 그래프 아래 그라데이션
};

const Graph_component = () => (
    <View>
        <LineChart
        data={graph_data}
        width={screenWidth}
        height={256}
        verticalLabelRotation={50}
        chartConfig={chartConfig}
        bezier
        />
        <Text>{JSON.stringify(data)}</Text>
    </View>
    
);
export default Graph_component;