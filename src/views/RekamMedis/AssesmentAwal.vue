<template>
<div>
  <router-link :to="'/Pasien/rekamMedisAwal/'+this.$route.params.idRekamMedis+'/subjektif'"> Assesmen Awal Subjektif</router-link>
  <router-link :to="'/Pasien/rekamMedisAwal/'+this.$route.params.idRekamMedis+'/objektif'"> Assesmen Awal Objektif</router-link>
 
  <div>
    <router-view></router-view>
  </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  }
}
</script>

<style>

</style>