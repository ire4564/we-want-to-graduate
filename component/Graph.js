import * as React from 'react';
import { StyleSheet, Dimensions, View, Text } from "react-native";
import { LineChart } from 'react-native-chart-kit';
import * as e4api from '../api/v1/e4-connect-api';

//const data = JSON.stringify(Data.EDA.microsecond); //e4api.getLastSessionData();

const screenWidth = Dimensions.get("window").width/1.3;
const chartConfig = {
    backgroundColor: "#FFFFFF",
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientTo: "#FFFFFF",
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

const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

const Graph = (props) => {
  const [now, setNow] = React.useState(0);
  const [SampleData, setSampleData] = React.useState([108, 107, 110, 109, 106, 107, 108, 105, 107, 106, 108]);

  let graph_SampleData = {
    datasets: [
      {
        data: SampleData.slice(now, now+10),
        color: (opacity = 1) => hex2rgba(props.color, opacity), // 그래프 색상
        strokeWidth: 6 // 선굵기
      }
    ],
  };
  React.useEffect(()=>{
    const interval = setInterval(()=>{
      let data = Math.floor(Math.random()*6)+103;
      setSampleData([...SampleData, data]);
      setNow(now=>now+1);
    }, 2000);
    return () => clearInterval(interval);
  });

  function selectData(){
    if(props.data==="sample"){
      return graph_SampleData;
    }
  };
  return(
    <View>
      <View
      style={styles.graphView}>
      <LineChart
        data={selectData()}
        width={screenWidth}
        height={90}
        chartConfig={chartConfig}
        bezier
      />
       <View
      style={[styles.textView, {borderColor: hex2rgba(props.color)}]}
      >
        <Text
        style={{
          fontSize: 15,
        }}
        >{average(SampleData)}</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  graphView:{
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 20,
    paddingRight: 5,
  },
});