<template>
  <div class="wrapper">
        <Header></Header>
        <main class="main">
            <div class="main__container">
                <div class="my-section">
                    <h2 class="your-groups">Ваши группы</h2>
                    <div class="my-list">
                        <!-- <div class="mylist-item">
                            <h3 class="groupname"><a href="#" class="grouplink">Название группы</a></h3>
                            <p class="groupdescription">Краткое описание группы</p>
                            <p class="membersamount">Количество участников: 0</p>
                        </div> -->
                        <router-link class="create-link" to="/creategroup">
                            <div class="mylist-new-item">
                                <svg class="newGroupsvg" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
                                <path class="newGroupsvg" d="M38 0L38 75" stroke="#ADB5BD" stroke-width="3"/>
                                <line class="newGroupsvg" y1="37.5" x2="75" y2="37.5" stroke="#ADB5BD" stroke-width="3"/>
                                </svg>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="my-section">
                    <h2 class="your-invitations">Ваши приглашения</h2>
                    <div class="my-list">
                        <!-- <div class="mylist-item">
                            <h3 class="groupname"><a href="#" class="grouplink">Название группы</a></h3>
                            <p class="groupdescription">Краткое описание группы</p>
                            <p class="membersamount">Количество участников: 0</p>
                        </div> -->
                        <div class="mylist-new-item">
                            <span class="not-invited">Пока приглашений нет</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer class="footer">

        </footer>
</div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'

export default {
  name: 'HomeView',
  methods: {
    getGroups() {
        
    }
  },
  components: {
    Header
  }
}
</script>

<style src="../assets/styles/home.css" scoped />
