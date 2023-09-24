<template>
    <div class="body">
        <Header></Header>
        <main class="main">
            <div class="container">
                <div class="container__inner">
                    <form class="createForm">
                        <div class="createForm-item">
                            <label>Название группы</label>
                            <input type="text" v-model="groupName" class="inputCreate">
                        </div>
                        <div class="createForm-item">
                            <label>Описание группы</label>
                            <input type="textarea" v-model="description" class="inputCreate">
                        </div>
                        <button type="button" @click="create" class="btn">Создать</button>
                    </form>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import { loadConfig } from '@babel/core/lib/config/files';
import Header from '../components/Header.vue';
import {mapActions, mapMutations} from 'vuex';
import router from '@/router';

export default {
    data() {
        return {
            groupName: '',
            description: ''
        }
    },
    methods: {
        ...mapMutations({

        }),
        ...mapActions({
            addGroup: 'user/addGroup',
            refreshGroupsList: 'user/refreshGroupsList'
        }),
        async create() {
            let owner = localStorage.getItem('userId');
            const json = JSON.stringify({
                name: this.groupName,
                description: this.description,
                ownerId: Number(owner)
            });
            this.addGroup(json);
            router.go(-1);
        }
    },
    components: {
        Header,
        loadConfig
    }
}
</script>

<style src="../assets/styles/newgroup.css"></style>