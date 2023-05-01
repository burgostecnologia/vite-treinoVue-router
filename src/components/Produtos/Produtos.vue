<template>
 <Produto v-for="produto in $store.state.products" :key=produto.id  :produto=produto>
   
 </Produto>
 </template>

<script>
import Produto from './Produto.vue'
export default {
  components: { Produto },

}
</script>

<style>

</style>