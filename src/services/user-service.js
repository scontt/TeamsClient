import getBaseURL from "@/assets/api/queries";

export default class UserService {
    async registerUser(_body) {
        const response = await fetch(getBaseURL() + 'api/User/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: _body
        });
        return response;
    }
}