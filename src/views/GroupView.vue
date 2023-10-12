<template>
    <body class="body">
        <Header></Header>
        <main class="main">
            <div class="container">
                <form class="edit-form">
                    <div class="edit-form__item edit-form__input">
                        <label>Название группы</label>
                        <input type="text" v-model="groupName" class="group-name-input">
                    </div>
                    <div class="edit-form__item edit-form__input">
                        <label>Описание группы</label>
                        <input type="textarea" v-model="groupDescription" class="group-description-form">
                    </div>
                </form>
                <div class="buttons-container">
                        <button type="button" @click="sendChanges" class="btn">Сохранить</button>
                        <button type="button" @click="cancelChanges" class="btn">Отменить</button>
                        <button type="button" @click="deleteGroup" class="btn delete-btn">Удалить</button>
                    </div>
                <div class="members">
                    <h3>Участники</h3>
                    <ul class="members-list">
                        <li class="members-list__item">
                            Данила Вдовенко
                        </li>
                        <li class="members-list__item">Второй</li>
                        <li class="members-list__item">Третий</li>
                        <li class="members-list__item">Четвертый</li>
                        <li class="members-list__item">Пятый</li>
                    </ul>
                </div>
            </div>
        </main>
    </body>
</template>

<script>
import GroupService from '@/services/group-service';
import Header from '../components/Header.vue'
import { mapActions, mapState, mapGetters } from 'vuex'
import router from '@/router';
const service = new GroupService();

export default {
    data() {
        return {
            groupId: 0,
            groupName: '',
            groupDescription: ''
        }
    },
    methods: {
        ...mapActions({
            refreshGroupsList: 'user/refreshGroupsList'
        }),
        async sendChanges() {
            const body = JSON.stringify({
                name: this.groupName,
                description: this.groupDescription,
                ownerId: localStorage.getItem('userId')
            });
            
            try {
                await service.saveChanges(this.groupId, body);
            }
            catch (e) {
                console.error(e);
            }
            finally {
                this.refreshGroupsList();
                router.go(-1);
            }
        },
        cancelChanges() {
            router.go(-1);
        },
        async deleteGroup() {
            await service.deleteGroup(this.groupId);
            router.go(-1);

        }
    },
    computed: {
        ...mapState({
            groups: state => state.user.groups
        }),
    },
    ...mapGetters({
        getGroup: 'user/getGroup'
    }),
    mounted() {
        this.groupId = this.$route.query.groupId;
        this.groups.forEach(group => {
                if (group.id == this.groupId) {
                    this.groupName = group.name;
                    this.groupDescription = group.description;
                }
            });
    },
    components: {
        Header
    }
}
</script>

<style src="../assets/styles/editgroup.css" scoped>

</style>
