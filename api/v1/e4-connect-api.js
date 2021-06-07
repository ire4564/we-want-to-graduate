{
    /*
        @author ParkMin
        @summary API 서버 접근 함수 with AXIOS
    */
}

const BASE_URL = 'http://34.64.244.145:3000' // 임시 서버임, 개발 완료시 이전 필요(박민꺼 GCP)

export async function getAllSessionInfo() {
    REQUEST_URL = BASE_URL + '/all_session_info';
    try {
        const response = await fetch(REQUEST_URL)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                return data;
            });
        return response;
    } catch(error) {
        console.log(error);
    }
    
}

export async function getLastSessionInfo() {
    REQUEST_URL = BASE_URL + '/last_session_info';
    try {
        const response = await fetch(REQUEST_URL)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                return data;
            });
        return response;
    } catch(error) {
        console.log(error);
    }
    
}

export async function getLastSessionData() {
    REQUEST_URL = BASE_URL + '/get_last_session';
    try {
        const response = await fetch(REQUEST_URL)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                return data;
            });
        return response;
    } catch(error) {
        console.log(error);
    }
    
}