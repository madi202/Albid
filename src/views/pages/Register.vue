<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <form @submit.prevent="register">
                  <h1>Register</h1>
                  <p class="text-muted">Create your account </p>
                  <CInput
                    placeholder="User Name"
                    v-model="nama"
                    type="text"
                    required
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                   <CInput
                    placeholder="NIK"
                    v-model="nik"
                    required
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput
                  placeholder="Nomor Kontak"
                  type="number"
                  v-model="kontak.noHP"
                  required
                >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  placeholder="password"
                  type="password"
                  autocomplete="new-password"
                  class="mb-4"
                  v-model="password"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton type="submit" color="primary" class="px-4">Register</CButton>
                    </CCol>
                   
                  </CRow>
                </form>
              </CCardBody>
            </CCard>

          <!-- ReGister -->
            <CCard
              color="primary"
              text-color="white"
              class="text-center py-5 d-md-down-none"
              body-wrapper
            >
              <CCardBody>
                <h2>Sign In</h2>
                <p></p>
            <router-link to="login">    <CButton
                  color="light"
                  variant="outline"
                  size="lg"
                >
                  Login Now!
                </CButton></router-link>
              </CCardBody>
            </CCard>

          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data(){
        return {
            nama: '',
            password: '',
            nik:'',
            kontak : {
              noHP : ''
            }
        }
    },
    methods:{
       
        register: function(){
            let data = {
                password : this.password,
                nama : this.nama,
                nik : this.nik,
                kontak : {
                  noHP : this.kontak.noHP
                }
            }
            this.$store.dispatch('register',data)
            .then(() => this.$router.push('/pages/login'))
            .catch(err => console.log(err))
        }
    },
}
</script>
