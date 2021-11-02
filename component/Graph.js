import * as React from 'react';
import { StyleSheet, Dimensions, View, Text } from "react-native";
import { LineChart } from 'react-native-chart-kit';
import { useTheme } from 'react-native-paper';
import * as e4api from '../api/v1/e4-connect-api';

//const data = JSON.stringify(Data.EDA.microsecond); //e4api.getLastSessionData();

const screenWidth = Dimensions.get("window").width-60;


const chartConfig = {
  backgroundGradientTo: `#ffffff`,
  backgroundGradientToOpacity: 0,
  backgroundGradientFrom: `#ffffff`,
  backgroundGradientFromOpacity: 0,
  decimalPlaces: 0,
  color: (opacity = 0.25) => `rgba(255, 255, 255, ${opacity})`,//보조선 색상
  strokeWidth: 3, // optional, default 3
  barPercentage: 1,
};

function average(array){
  let sum = 0.;
  for(let i = 0; i <array.length; i++){
    sum += array[i];
  }
  return (sum/array.length).toFixed(2);
};


const Graph = (props) => {
  const [now, setNow] = React.useState(0);
  const [SampleData, setSampleData] = React.useState([108, 107, 110, 109, 106, 107, 108, 105, 107, 106, 108]);
  const theme = useTheme();
  
  let graph_SampleData = {
    datasets: [
      {
        data: SampleData.slice(now, now+10),
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // 그래프 색상
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
        height={100}
        chartConfig={chartConfig}
        bezier
      />
      </View>
    </View>
  );
}
export default Graph;

const styles = StyleSheet.create({
  graphView:{
    left : -15,
    alignSelf: 'center',
  },
});