export default function authHeader() {
    let token = localStorage.getItem('access_token');

    if (token) {
        return 'Bearer ' + token;
    }
    else {
        return {};
    }
}