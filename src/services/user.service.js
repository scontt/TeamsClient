import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'http://localhost:5282/api/';

class UserService {
    getUserGroups (userId) {
        return axios.get(API_URL + 'usergroups?userId=' + userId, {
            headers: authHeader()
        });
    }
}