import * as React from 'react';
import { Dimensions, View, StyleSheet,Platform } from "react-native";

const Block = ({content}) => {
    return (
        <View style={styles.container}>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        width: Dimensions.get('window').width-30,
        borderRadius: 15,
        padding: 15,
        marginBottom: 20,
        marginHorizontal: 15,

        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                // 추후 android용 shadow library 이용
            },
        })
    }
});

export default Block;