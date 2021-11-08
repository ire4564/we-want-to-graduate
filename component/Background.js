import React from 'react';

export function Background(systolic, relaxa) {
    //1 - 정상 혈압일 경우
   if(systolic >= 91 && systolic <= 120 && relaxa >= 61 && relaxa <= 80) {
        return "#3D64AF";
    } 
    //2 - 저혈압일 경우
    else if(systolic >= 0 && systolic <= 90 && relaxa >= 0 && relaxa <= 60) {
        return "#1AB157";
    }
    //3 - 주의 혈압일 경우
    else if(systolic >= 120 && systolic <= 129 && relaxa >= 61 && relaxa <= 80) {
        return "#ECC819";
    }
    //4 - 고혈압 전 단계일 경우
    else if(systolic >= 130 && systolic <= 139 && relaxa >= 80 && relaxa <= 89) {
        return "#F89C1D";
    }
    //5 - 고혈압일 경우
    else if(systolic >= 140 && systolic <= 999 && relaxa >= 90 && relaxa <= 999) {
        return "#E42F2F";
    }
};