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
import Header from '../components/Header.vue'

export default {
    data() {
        return {
            groupName: '',
            description: ''
        }
    },
    methods: {
        async create() {
            let owner = localStorage.getItem('userId');
            const json = JSON.stringify({
                name: this.groupName,
                description: this.description,
                ownerId: Number(owner)
            });
            console.log(json);
            const response = await fetch('http://localhost:5282/api/Group/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: 
                    JSON.stringify({
                        name: this.groupName,
                        description: this.description,
                        ownerId: Number(owner)
                })
            });
        }
    },
    components: {
        Header,
        loadConfig
    }
}
</script>

<style src="../assets/styles/newgroup.css"></style>