
<template>
  <div>
    <h1>Header</h1>
    <nav>
      <router-link to="/">Home</router-link>&nbsp;
      <router-link to="/about">About</router-link>&nbsp;
      <router-link to="/movie">Movie</router-link>&nbsp;
      <RouterLink :to="rotaDinamica">Vendas</RouterLink>&nbsp;
      <router-link to="/usuarios/10">Usuarios</router-link>&nbsp;
    </nav>
    <RouterView></RouterView>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
   
</div>
</template>

<script>
export default{
  data () {
    return {
      rotaDinamica: {name: 'venda'}
    }
  },
  
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
