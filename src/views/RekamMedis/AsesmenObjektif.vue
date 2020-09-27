<template>
  <div>
      <CRow>
      <CCol>
        <CCard>
          <CCardHeader>

            <strong>Assesmen Awal Obejktif</strong>
          </CCardHeader>
          <CCardBody>
            <form @submit.prevent="">
            

            </form>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
data(){
    return {
        idRekamMedis : this.$route.params.idRekamMedis
    }
}
}
</script>

<style>

</style>