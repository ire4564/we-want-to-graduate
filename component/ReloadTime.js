import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

export default function ReloadTime() {
    let today = new Date();   
    const [date, setDate] = useState(today.toLocaleString());

    const clickLoad = () => {
        setDate(today.toLocaleString());
    };

    return(
        <View style={styles.view}>
            <Text style={styles.title}>오늘의 혈압</Text>
            <Text style={styles.detail}>최근 측정 일시</Text>
            <Text style={styles.detail}>{date}   <Icon name="reload1" onPress={clickLoad} size={15} color="#ffffff"/></Text>
            <Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        marginTop: -20,
        justifyContent: "center", 
        alignItems:'center'
    },  
    title: {
        fontWeight: 'bold',
        color: "#ffffff", 
        alignSelf:'center', 
        fontSize: 25, 
        marginTop: 10,
        marginBottom: 5
    },
    detail: {
        color: "#ffffff", 
        alignSelf:'center', 
        fontSize: 15, 
    }
});