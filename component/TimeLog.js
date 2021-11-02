import * as React from 'react';
import { StyleSheet, Dimensions, View, Text } from "react-native";
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Fontisto'

const TimeLog = (props) => {
    const sampleData = [
        {time:"2021-11-2-12-10", systolic: 102, diastolic: 79,},
        {time:"2021-11-2-13-10", systolic: 102, diastolic: 79,},
        {time:"2021-11-2-14-10", systolic: 102, diastolic: 79,},
        {time:"2021-11-2-15-10", systolic: 102, diastolic: 79,},
        {time:"2021-11-2-16-10", systolic: 102, diastolic: 79,},
        {time:"2021-11-2-17-10", systolic: 102, diastolic: 79,},
    ]

    // 최근 3개의 기록에 대해 노출
    const logList = sampleData.splice(sampleData.length-3).map((item, index)=>{
        let hour = item.time.split("-")[3]
        let min = item.time.split("-")[4]
        
        return (
        <View key={"log-"+index} style={styles.subContainer}>
            <Text style={styles.time}>{hour-12}:{min} {hour<12?"AM":"PM"}</Text>
            <Icon name="heart-eyes" size={30} color="#ffffff"/>
            <View style={styles.container}>
                <Text style={styles.value}>{Math.round(item.diastolic+(item.systolic-item.diastolic)/3)}</Text>
                <Text style={styles.unit}>mmHg</Text>
            </View>
        </View>
    )})
    return(
        <View style={styles.container}>
            {logList}
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    subContainer: {
        alignItems: 'center',
        flex: 1/3,
    },
    time: {
        fontSize: 18,
        color: "#ffffff",
        marginBottom: 5,
    },
    value: {
        marginTop: 2,
        fontWeight: "700",
        fontSize: 20,
        color: "#ffffff",
    },
    unit: {
        alignSelf: 'flex-end',
        fontSize: 10,
        color: "#ffffff",
    }
})

export default TimeLog;