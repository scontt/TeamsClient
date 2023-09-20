<template>
    <div class="body">
        <Header></Header>
        <main class="main">
            <div class="container">
                <div class="container__inner">
                    <form class="createForm">
                        <div class="createForm-item">
                            <label>Название группы</label>
                            <input type="text" v-model="gropName" class="inputCreate">
                        </div>
                        <div class="createForm-item">
                            <label>Описание группы</label>
                            <input type="text" v-model="description" class="inputCreate">
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
            groupname: '',
            description: ''
        }
    },
    methods: {
        async create() {
            const json = JSON.stringify({
                name: this.groupname,
                description: this.description
            });
            const response = await fetch('http://localhost:5282/api/Group')
        }
    },
    components: {
    Header,
    loadConfig
}
}
</script>

<style src="../assets/styles/newgroup.css"></style>