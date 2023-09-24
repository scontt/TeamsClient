<template>
  <router-view/>
</template>

<style>

</style>

<script>
import store from './store';

export default {
  beforeMount() {
    let userId = localStorage.getItem('userId');
    if (userId) {
      store.dispatch('userLogged');
    }
  }
}
</script>