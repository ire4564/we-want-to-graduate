import * as React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import { View, Text } from "react-native";

//Data -> 0: 저혈압, 1: 정상, 2: 주의, 3: 고혈압 전, 4: 고혈압
import std from "../data/standard.json";

//저혈압 
export const LowIcon = () => {
    return(
        <View>
            <Icon name="zipper-mouth" size={120} color="#ffffff" style={{alignSelf:'center'}}/>
            <Text style={{color: "#ffffff", alignSelf:'center', fontSize: 30, marginTop: 10}}>
                {std.standard.Low[0]}
            </Text>
            <Text style={{color: "#ffffff", alignSelf:'center', fontSize: 20, marginTop: 5}}>
                {std.standard.Low[1]}
            </Text>
        </View>
    );
};
//정상
export const NormalIcon = () => {
    return(
        <View>
            <Icon name="heart-eyes" size={120} color="#ffffff" style={{alignSelf:'center'}}/>
            <Text style={{color: "#ffffff", alignSelf:'center', fontSize: 30, marginTop: 10}}>
                {std.standard.Normal[0]}
            </Text>
            <Text style={{color: "#ffffff", alignSelf:'center', fontSize: 20, marginTop: 5}}>
                {std.standard.Normal[1]}
            </Text>
        </View>
    );
};
//주의 혈압
export const CautionIcon = () => {
    return(
        <View>
            <Icon name="confused" size={120} color="#ffffff" style={{alignSelf:'center'}}/>
            <Text style={{color: "#ffffff", alignSelf:'center', fontSize: 30, marginTop: 10}}>
                {std.standard.Caution[0]}
            </Text>
            <Text style={{color: "#ffffff", alignSelf:'center', fontSize: 20, marginTop: 5}}>
                {std.standard.Caution[1]}
            </Text>
        </View>
    );
};
//고혈압 전 단계
export const PrehighIcon = () => {
    return(
        <View>
            <Icon name="nervous" size={120} color="#ffffff" style={{alignSelf:'center'}}/>
            <Text style={{color: "#ffffff", alignSelf:'center', fontSize: 30, marginTop: 10}}>
                {std.standard.Prehigh[0]}
            </Text>
            <Text style={{color: "#ffffff", alignSelf:'center', fontSize: 20, marginTop: 5}}>
                {std.standard.Prehigh[1]}
            </Text>
        </View>
    );
};
//고혈압
export const HighIcon = () => {
    return(
        <View>
            <Icon name="dizzy" size={120} color="#ffffff" style={{alignSelf:'center'}}/>
            <Text style={{color: "#ffffff", alignSelf:'center', fontSize: 30, marginTop: 10}}>
                {std.standard.High[0]}
            </Text>
            <Text style={{color: "#ffffff", alignSelf:'center', fontSize: 20, marginTop: 5}}>
                {std.standard.High[1]}
            </Text>
        </View>
    );
};

