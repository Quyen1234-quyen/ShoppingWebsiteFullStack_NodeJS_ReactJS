import axios from 'axios';

export default function setAuthorizationToken(token) {
    if(token) {
        axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
        console.log("1");
    } else {
        delete axios.defaults.headers.common['authorization'];
        console.log("2");
    }
}