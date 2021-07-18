import React, {useEffect} from 'react'
import axios from 'axios';

function LandingPage(){//Functional Component 만들기

    useEffect(() => {
        axios.get('/api/hello') //endpoint. getRequest를 server 즉 indexjs로 보내질 것
        .then(response => {console.log(response)}) //server 에서 돌아온 response를 콘솔창에 출력해봄
    }, [])
}