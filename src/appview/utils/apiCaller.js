import axios from 'axios';


export default function callAPI(endpoint,method='GET',data,header){
    return(
        axios({
            method:method,
            url:`/${endpoint}`,
            data:data,
            headers:header
        })
    )
}