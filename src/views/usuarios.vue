<template>
    <div>
        <h1>Usuarios</h1>
        <div style="text-align:left">
            {{$route}} <br><br><br>
        </div>
        <div>
              EXEMPLOD DE URL CHAMADA: http://localhost:5173/usuarios/10?page=9 <br><br>
              $route.params.id: {{$route.params.id}} <br><br>
              $route.query.page: {{$route.query.page}}
                <br><br><br>
                $route tem dados da rota 
                $router tem funcionalidades para rota
        </div>
        <button @click="evtSobre()">Sobre nois</button>
    </div>    
</template>

<script>
export default {
  methods: {
    evtSobre () { 
      this.$router.push('/about') 
    },
  },
  created () {
    console.log('this.$route: ',this.$route)
    console.log('this.$router: ',this.$router)
  },

}
</script>

<style>

</style>