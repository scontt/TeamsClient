<template>
  <router-view/>
</template>

<style>
:root {
    --main-bg-color: #EDEDEDFF;
    --main-border-color: #ADB5BD;
    --main-font-family: 'Jost', sans-serif; 
}

html {
    box-sizing: border-box;
}

*, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

html, body {
    height: 100%;
}

#app {
  height: inherit;
}

ul {
    list-style-type: none;
    height: 100%;
}

a {
    text-decoration: none;
    color: black;
}

#app {
    min-height: 100%;
}

.app {
    display: flex;
    flex-direction: column;
    min-height: 100%;
}

.header__container {
    display: flex;
}

.header {
    width: 100%;
    min-height: 80px;
}

.header_inner {
    display: flex;
    width: 100%;
    height: 60px;
    margin: 25px auto;
}

.header__menu {
    background-color: var(--main-bg-color);
    border: 1px solid var(--main-border-color);
    border-radius: 20px;
    margin-left: auto;
    min-width: 50%;
}

.auth {
    margin-left: auto;
}

.menu-list {
    min-height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: var(--main-font-family);
    font-weight: 400;
    font-size: 24px;
}

.main__container {
    display: flex;
    flex-direction: column;
}

.my-section {
    display: flex;
    flex-direction: column;
    min-width: 70%;
    margin: 50px auto;
    font-family: var(--main-font-family);
}

.my-list {
    display: flex;
    margin-top: 20px;
    justify-content: space-around;
}

.your-groups, .your-invitations {
    margin: 0 30px;
}

.mylist-item {
    display: flex;
    flex-direction: column;
    background-color: var(--main-bg-color);
    min-width: 250px;
    min-height: 150px;
    border: 1px solid var(--main-border-color);
    border-radius: 20px;
    padding: 20px;
}

.groupdescription {
    padding: 30px 0 5px;
}


</style>
