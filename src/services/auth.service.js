import axios from "axios";

const API_URL = 'http://localhost:5282/api/auth/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'signin', {
                username: user.username,
                password: user.password
            })
            .then(response => {
                if (response.data.access_token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios
            .post(API_URL + 'signup', {
                username: user.username,
                email: user.email,
                phonenumber: user.phonenumber,
                password: user.password,
                donetasks: 0
            });
    }
}

export default new AuthService();