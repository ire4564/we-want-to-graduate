import React, { useState } from 'react';
import { Appbar } from 'react-native-paper';
import { Text } from "react-native";
import * as ChangeColor from '../component/Background';

export default function Bar(props) {
    return (
        <Appbar.Header style={{backgroundColor: props.color,}}>
        <Appbar.Action icon="menu" style={{flex: 0.1}} onPress={() => {}} />
        <Text style={{flex: 0.8}}></Text>
        <Appbar.Action icon="share" style={{flex: 0.1}} onPress={() => {}} />
    </Appbar.Header>
    );
};
