export default class GroupService {
    async saveChanges(groupId) {
        const response = await fetch('http://localhost:5282/api/Group?groupId=' +
        groupId)
    }
}