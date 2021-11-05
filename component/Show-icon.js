/*지표에 따른 표정 아이콘, 측정 지표 텍스트*/
import * as React from 'react';
import { LowIcon, NormalIcon, CautionIcon, PrehighIcon, HighIcon } from './Face-icon';
import { View, Text } from 'react-native';


// (+) 혈압의 조건을 조금 더 고려해 볼 필요가 있을 것 같다 *경우 정확히 이해
function ShowIcon(props) {
    //1 - 정상 혈압일 경우
    if(props.systolic >= 91 && props.systolic <= 120 && props.relaxa >= 61 && props.relaxa <= 80) {
        return( <NormalIcon/> );
    } 
    //2 - 저혈압일 경우
    else if(props.systolic >= 0 && props.systolic <= 90 && props.relaxa >= 0 && props.relaxa <= 60) {
        return ( <LowIcon/> );
    }
    //3 - 주의 혈압일 경우
    else if(props.systolic >= 120 && props.systolic <= 129 && props.relaxa >= 61 && props.relaxa <= 80) {
        return ( <CautionIcon/> );
    }
    //4 - 고혈압 전 단계일 경우
    else if(props.systolic >= 130 && props.systolic <= 139 && props.relaxa >= 80 && props.relaxa <= 89) {
        return ( <PrehighIcon/> );
    }
    //5 - 고혈압일 경우
    else if(props.systolic >= 140 && props.systolic <= 999 && props.relaxa >= 90 && props.relaxa <= 999) {
        return ( <HighIcon/> );
    }
};  

export default ShowIcon;
