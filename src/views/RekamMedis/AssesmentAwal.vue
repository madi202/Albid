<template>
<div>
  <router-link :to="'/Pasien/rekamMedisAwal/'+this.$route.params.idRekamMedis+'/subjektif'"> test klik</router-link>
  <router-link :to="'/Pasien/rekamMedisAwal/'+this.$route.params.idRekamMedis+'/objektif'"> test klik 2</router-link>
  <div>
    <router-view></router-view>
  </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>