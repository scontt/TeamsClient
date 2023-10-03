import store from "@/store";
import authHeader from "./auth-header";
import getBaseURL from "@/assets/api/queries";

export default class GroupService {
    async saveChanges(groupId, _body) {
        await fetch(getBaseURL() + 'api/Group/update?groupId=' +
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
        await fetch(getBaseURL() + 'api/Group/deletegroup?groupId=' + groupId , {
            method: 'DELETE',
            headers: {
                'Authorization': authHeader()
            }
        });
    }

    async inviteUser() {
        
    }
}