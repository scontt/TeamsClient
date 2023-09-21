import axios from "axios";

function getUserByUsername(username) {
    const response = axios.get('http://localhost:5282/api/User/getbyusername/' + username);
    return response;
}

function createGroup(groupBody) {
    const response = axios.post('http://localhost:5282/api/Group', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: { groupBody }
    });
    return response;
}

async function getJwtToken(body) {
    const response = await fetch('http://localhost:5282/api/User/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( body )
            });
    return response;
}