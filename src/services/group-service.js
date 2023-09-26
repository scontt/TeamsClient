import store from "@/store";
import authHeader from "./auth-header";

export default class GroupService {
    async saveChanges(groupId, _body) {
        await fetch('http://localhost:5282/api/Group/update?groupId=' +
        groupId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authHeader()
            },
            body: _body
        });
    }

    async deleteGroup(groupId) {
        await fetch('http://localhost:5282/api/Group/deletegroup?groupId=' + groupId , {
            method: 'DELETE',
            headers: {
                'Authorization': authHeader()
            }
        });
    }
}