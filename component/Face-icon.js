/*지표에 따른 표정 아이콘, 측정 지표 텍스트*/
import * as React from 'react';
import Icon from 'react-native-vector-icons/Fontisto'

//저혈압 
export const LowIcon = () => {
    return(
        <Icon name="zipper-mouth" size={30} color="#ffffff"/>
    );
};
//정상
export const NormalIcon = () => {
    return(
        <Icon name="heart-eyes" size={30} color="#ffffff"/>
    );
};
//주의 혈압
export const CautionIcon = () => {
    return(
        <Icon name="confused" size={30} color="#ffffff"/>
    );
};
//고혈압 전 단계
export const PrehighIcon = () => {
    return(
        <Icon name="nervous" size={30} color="#ffffff"/>
    );
};
//고혈압
export const HighIcon = () => {
    return(
        <Icon name="dizzy" size={30} color="#ffffff"/>
    );
};