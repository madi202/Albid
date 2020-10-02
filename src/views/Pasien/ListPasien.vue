<template>
  <div>
        <div v-if="loading">
          laoding......
        </div>
    <div v-if="post">
<CRow>
    <CCol col="12" xl="12">
      <CCard>
        <CCardHeader>
          List Pasien
           <div class="card-header-actions">
             <router-link to="/Pasien/TambahPasien">
                <!-- <button class="btn-primary">Tambahkan Pasien</button> -->
                    <CButton block color="primary">Tambahkan Pasien</CButton>
             </router-link>
            </div>
        </CCardHeader>
        <CCardBody>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Nik</th>
                <th scope="col">Nama Lengkap</th>
                <th scope="col">Kontak</th>
                <th scope="col">Alamat</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.nik">
                <th scope="row">{{user.nik}}</th>
                <td>{{user.nama}}</td>
                <td>{{user.kontak.noHP}}</td>
                <td vif>{{user.alamat.alamatJalan || "kosong"}}</td>
                <td>
                  <!-- <router-link to="/Pasien/Details/">
                    <button>show</button>
                  </router-link> -->
                  <router-link v-bind:to="'/Pasien/Details/' + user._id">View More</router-link>
                  </td>
                
                <td></td>
              </tr>             
            </tbody>
          </table>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>

    </div>

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        users: [],
        loading : false,
        error : null,
        post : null,

      }
    }, 
    created: function () {
      this.loading = true,
      this.$store.dispatch("getpasienList").then(res => {
        this.loading = false
        this.post = true
        this.users = Object.assign({},this.users,res.data.doc)
      })
    },


  }
</script>

<style>

</style>