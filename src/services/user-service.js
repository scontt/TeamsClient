export default class UserService {
    async registerUser(_body) {
        const response = await fetch('http://localhost:5282/api/User/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: _body
        });
        return response;
    }
}