import * as React from 'react';
import { StyleSheet, Dimensions, View, Text } from "react-native";
import { useTheme } from 'react-native-paper';

const CurrentResult = (props) => {
    const theme = useTheme();


    return (<View style={styles.container}>
        {/* 수축 혈압 */}
        <View style={[styles.subContainer, styles.divider, {borderColor: theme.colors.primary}]}>
            <Text style={{fontSize: theme.fontSize.title, color: "#ffffff"}}>수축 혈압</Text>
            <View style={styles.container}>
                <Text style={styles.value}>{props.systolic}</Text>
                <Text style={styles.unit}>mmHg</Text>
            </View>
        </View>

        {/* 이완 혈압 */}
        <View style={[styles.subContainer, styles.divider, {borderColor: theme.colors.primary}]}>
            <Text style={{fontSize: theme.fontSize.title, color: "#ffffff"}}>이완 혈압</Text>
            <View style={styles.container}>
                <Text style={styles.value}>{props.diastolic}</Text>
                <Text style={styles.unit}>mmHg</Text>
            </View>
        </View>

        {/* 평균 혈압 */}
        <View style={styles.subContainer}>
            <Text style={{fontSize: theme.fontSize.title, color: "#ffffff"}}>평균 혈압</Text>
            <View style={styles.container}>
                <Text style={styles.value}>{Math.round(props.diastolic+(props.systolic-props.diastolic)/3)}</Text>
                <Text style={styles.unit}>mmHg</Text>
            </View>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    subContainer: {
        flex: 1/3,
        marginRight: 5,
    },
    divider: {
        borderRightWidth: 1,
    },
    value: {
        marginTop: 5,
        fontWeight: "700",
        fontSize: 24,
        color: "#ffffff",
    },
    unit: {
        alignSelf: 'flex-end',
        fontSize: 14,
        color: "#ffffff",
    }
})

export default CurrentResult;