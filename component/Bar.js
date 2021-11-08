import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';

const Bar = () => (
    <Appbar.Header style={{backgroundColor: "#ffff"}}>
        <Appbar.Action icon="menu" onPress={() => {}} />
        <Appbar.Action icon="share" style={{flexDirection: "column", alignItems: "flex-end"}} onPress={() => {}} />
    </Appbar.Header>
);

export default Bar;