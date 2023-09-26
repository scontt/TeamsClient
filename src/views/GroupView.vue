<template>
    <body class="body">
        <Header></Header>
        <main class="main">
            <div class="container">
                <form class="edit-form">
                    <div class="edit-from__item">
                        <label>Название группы</label>
                        <input type="text" v-model="groupName" class="group-name-input">
                    </div>
                    <div class="edit-from__item">
                        <label>Описание группы</label>
                        <input type="text" v-model="groupDescription" class="group-description-form">
                    </div>
                    <div class="buttons">
                        <button type="button" @click="sendChanges" class="btn">Сохранить</button>
                        <button type="button" @click="cancelChanges" class="btn">Отмена</button>
                    </div>
                </form>
            </div>
        </main>
    </body>
</template>

<script>
import Header from '../components/Header.vue'
export default {
    data() {
        return {
            groupId: 0,
            groupName: '',
            groupDescription: ''
        }
    },
    methods: {
        sendChanges() {
            
        },
        cancelChanges() {

        }
    },
    mounted() {
        this.groupId = this.$route.query.groupId;
    },
    components: {
        Header
    }
}
</script>

<style src="../assets/styles/editgroup.css" scoped>

</style>
