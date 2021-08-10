import * as React from 'react';
import { StyleSheet, Dimensions, View, Text } from "react-native";
import {LineChart, ProgressChart} from 'react-native-chart-kit';
import * as e4api from '../api/v1/e4-connect-api';
import Data from '../data/sample-data.json';

//const data = Data//e4api.getLastSessionData();
const screenWidth = Dimensions.get("window").width/1.3;
const chartConfig = {
    backgroundColor: "#E0E0E0",
    backgroundGradientFrom: "#E0E0E0",
    backgroundGradientTo: "#E0E0E0",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(100, 100, 100, ${opacity})`,//보조선 색상
    style: {
    borderRadius: 16,
    },
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: true // 그래프 아래 그라데이션 색상 반영
};

function average(array){
  let sum = 0.;
  for(let i = 0; i <array.length; i++){
    sum += array[i];
  }
  return (sum/array.length).toFixed(2);
};

const Graph = () => {
  const [now, setNow] = React.useState(0);
  const [bp_MAX, setBp_MAX] = React.useState([108, 107, 110, 109, 106, 107, 108, 105, 107, 106, 108]);
  const [bp_MIN, setBp_MIN] = React.useState([84, 88, 86, 89, 90, 84, 85, 86, 87, 85, 88]);
  const [bp_AVG, setBp_AVG] = React.useState([92.0, 94.33, 94.0, 95.67, 95.33, 91.67, 92.67, 92.33, 93.67, 92.0, 94.67]);


  //const data = Data;
  let graph_data_MAX = {
    datasets: [
      {
        data: bp_MAX.slice(now, now+10),
        color: (opacity = 1) => `rgba(50, 200, 200, ${opacity})`, // 그래프 색상
        strokeWidth: 6 // 선굵기
      }
    ],
};
let graph_data_MIN = {
  datasets: [
    {
      data: bp_MIN.slice(now, now+10),
      color: (opacity = 1) => `rgba(50, 200, 200, ${opacity})`, // 그래프 색상
      strokeWidth: 6 // 선굵기
    }
  ],
};
let graph_data_AVG = {
  datasets: [
    {
      data: bp_AVG.slice(now, now+10),
      color: (opacity = 1) => `rgba(50, 200, 200, ${opacity})`, // 그래프 색상
      strokeWidth: 6 // 선굵기
    }
  ],
};
  React.useEffect(()=>{
    const interval = setInterval(()=>{
      let max = Math.floor(Math.random()*6)+103;
      let min = Math.floor(Math.random()*6)+81;
      let avg = min + (max-min)/3;
      setBp_MAX([...bp_MAX, max]);
      setBp_MIN([...bp_MIN, min]);
      setBp_AVG([...bp_AVG, avg.toFixed(2)]);
      setNow(now=>now+1);
      //graph_data.datasets.data = bp_MAX;
    }, 2000);
    return () => clearInterval(interval);
  });

  return(
    <View>
      <Text>  최고혈압</Text>
      <View
      style={styles.graphView}>
      <LineChart
        data={graph_data_MAX}
        width={screenWidth}
        height={90}
        chartConfig={chartConfig}
        bezier
      />
       <View
      style={styles.textView}
      >
        <Text
        style={{
          fontSize: 18,
        }}
        >{average(bp_MAX)}</Text>
      </View>
      </View>
      <Text>  최저혈압</Text>
      <View
      style={styles.graphView}>
      <LineChart
        data={graph_data_MIN}
        width={screenWidth}
        height={90}
        chartConfig={chartConfig}
        bezier
      />
      <View
      style={styles.textView}
      >
        <Text
        style={{
          fontSize: 18,
        }}
        >{average(bp_MIN)}</Text>
      </View>
      </View>
      <Text>  평균혈압</Text>
      <View
      style={styles.graphView}>
      <LineChart
        data={graph_data_AVG}
        width={screenWidth}
        height={90}
        chartConfig={chartConfig}
        bezier
      />
       <View
      style={styles.textView}
      >
        <Text
        style={{
          fontSize: 18,
        }}
        >{ 90.21//average(bp_AVG)
        }</Text>
      </View>
      </View>
    </View>
  );
}
export default Graph;

const styles = StyleSheet.create({
  textView: {
    width: screenWidth/4,
    height : screenWidth/4,
    borderRadius: 100,
    borderWidth: 10,
    borderColor: "#32C8C8",
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  graphView:{
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: "#E0E0E0",
    borderRadius: 20,
    paddingVertical: 20,
    paddingRight: 5,
  },
});