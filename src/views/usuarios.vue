<template>
    <div>
        <h1>Usuarios</h1>
        <br><br>

        <h2>Usuario carregado no vuex State</h2>        
        <h2>{{this.$store.state.user}}</h2><br><br>
        <h2>{{this.$store.state.user.email}}</h2><br><br>
        <h2>Alterar usuario no vuex pelo Mutations</h2>
        <button @click="AlterarPerfil">Alterar usuario para Admin</button>      

        <h2>Conteudo do route</h2>
        <!-- <div style="text-align:left">
            {{$route}} <br><br><br>
        </div> -->
        <div>
              EXEMPLO DE URL CHAMADA: http://localhost:3000/usuarios/10?page=9 <br><br>
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
    AlterarPerfil(){
      const newUser =  {
            nome: 'Admin',
            email: 'Admin@gmail.com'
        }

      //no commit o primeiro param é o metodo no mutations e o segundo é o conteudo que vai ser usado para atualizar
      this.$store.commit('updateUser', newUser)
    }
  },
  created () {
    console.log('this.$route: ',this.$route)
    console.log('this.$router: ',this.$router)
  },

}
</script>

<style>

</style>