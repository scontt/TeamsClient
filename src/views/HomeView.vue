<template>
  <div class="root">
        <header class="header">
            <div class="header__container">
                <div class="header_inner">
                    <div class="header__menu">
                        <li class="menu-list">
                            <ul class="menu-list__item">
                                <a href="#" class="menu-list__item-a">Группы</a>
                            </ul>
                            <ul class="menu-list__item">
                                <a href="#" class="menu-list__item-a">Платные</a>
                            </ul>
                            <ul class="menu-list__item">
                                <a href="#" class="menu-list__item-a">Поиск</a>
                            </ul>
                            <ul class="menu-list__item">
                                <a href="#" class="menu-list__item-a">Поддержка</a>
                            </ul>
                        </li>
                    </div>
                    <div class="auth">
                        <router-link to="/register">Регистрация</router-link>
                    </div>
                </div>
            </div>
        </header>
        <main class="main">
            <div class="main__container">
                <div class="my-section">
                    <h2 class="your-groups">Ваши группы</h2>
                    <div class="my-list">
                        <div class="mylist-item">
                            <h3 class="groupname"><a href="#" class="grouplink">Название группы</a></h3>
                            <p class="groupdescription">Краткое описание группы</p>
                            <p class="membersamount">Количество участников: 0</p>
                        </div>
                        <div class="mylist-item">
                            <h3 class="groupname"><a href="#" class="grouplink">Название группы</a></h3>
                            <p class="groupdescription">Краткое описание группы</p>
                            <p class="membersamount">Количество участников: 0</p>
                        </div>
                        <div class="mylist-item">
                            <h3 class="groupname"><a href="#" class="grouplink">Название группы</a></h3>
                            <p class="groupdescription">Краткое описание группы</p>
                            <p class="membersamount">Количество участников: 0</p>
                        </div>
                        <div class="mylist-item">
                            <h3 class="groupname"><a href="#" class="grouplink">Название группы</a></h3>
                            <p class="groupdescription">Краткое описание группы</p>
                            <p class="membersamount">Количество участников: 0</p>
                        </div>
                        <div class="mylist-item">
                            <h3 class="groupname"><a href="#" class="grouplink">Название группы</a></h3>
                            <p class="groupdescription">Краткое описание группы</p>
                            <p class="membersamount">Количество участников: 0</p>
                        </div>
                    </div>
                </div>
                <div class="my-section">
                    <h2 class="your-invitations">Ваши приглашения</h2>
                    <div class="my-list">
                        <div class="mylist-item">
                            <h3 class="groupname"><a href="#" class="grouplink">Название группы</a></h3>
                            <p class="groupdescription">Краткое описание группы</p>
                            <p class="membersamount">Количество участников: 0</p>
                        </div>
                        <div class="mylist-item">
                            <h3 class="groupname"><a href="#" class="grouplink">Название группы</a></h3>
                            <p class="groupdescription">Краткое описание группы</p>
                            <p class="membersamount">Количество участников: 0</p>
                        </div>
                        <div class="mylist-item">
                            <h3 class="groupname"><a href="#" class="grouplink">Название группы</a></h3>
                            <p class="groupdescription">Краткое описание группы</p>
                            <p class="membersamount">Количество участников: 0</p>
                        </div>
                        <div class="mylist-item">
                            <h3 class="groupname"><a href="#" class="grouplink">Название группы</a></h3>
                            <p class="groupdescription">Краткое описание группы</p>
                            <p class="membersamount">Количество участников: 0</p>
                        </div>
                        <div class="mylist-item">
                            <h3 class="groupname"><a href="#" class="grouplink">Название группы</a></h3>
                            <p class="groupdescription">Краткое описание группы</p>
                            <p class="membersamount">Количество участников: 0</p>
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

export default {
  name: 'HomeView'
}
</script>
