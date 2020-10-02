<template>
  <div class="">
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>

            <strong>Tambahkan Rekam Medis Pasien </strong>
          </CCardHeader>
          <CCardBody>
            <form @submit.prevent="registermedis">
              <CRow>
                <CCol sm="6">
                  <CInput type="date" v-model="register.tanggaKunjungan" label="Tanggal Kunjungan" />
                </CCol>
                <CCol sm="6">
                    <label for="">Hubungan Penanggung Jawab</label>
                  <select class="form-control" v-model="register.hubungan">
                    <option v-for="option in OptHubungan" :key="option.id">
                      {{ option.value }}
                    </option>
                  </select>
                </CCol>

              </CRow>
              <CRow>
                <CCol sm="6">
                  <CInput v-model="register.nama" label="Nama Penanggung Jawab" type="text" />
                </CCol>
                <CCol sm="6">
                     <label for="">Perujuk</label>
                  <select class="form-control" v-model="register.perujuk">
                    <option v-for="option in OptPerujuk" :key="option.id">
                      {{ option.value }}
                    </option>
                  </select>
                </CCol>

              </CRow>

              <CRow>
                <CCol sm="6">
                  <CInput v-model="register.noHP" label="Kontak Penanggung Jawab" type="text" />
                </CCol>

                <CCol sm="6">
                  <label for="">Jenis Pemeriksaan</label>
                  <select class="form-control" v-model="register.jenisPemeriksaan">
                    <option v-for="option in OptPemeriksaan" :key="option.id">
                      {{ option.value }}
                    </option>
                  </select>
                </CCol>

              </CRow>


              <CRow>
                <CCol col="6" class="text-left">
                  <CButton type="submit" color="primary" class="px-4">submit</CButton>
                </CCol>

              </CRow>

            </form>
            <!-- <button v-on:click="tambahpasien"> button</button> -->
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        OptPemeriksaan: [{id : 0,value: 'ANC'},{ id : 1,value: 'ASESMEN AWAL'}, { id : 2, value: 'KOHORT' }, 
        {  id : 3,value: 'SOAP I'}, {id : 4,value: 'SOAP II'}, {id : 5, value: 'SOAP III'}, {id : 6,value: 'SOAP IV'}, 
        { id : 7, value: 'PARTOGRAF' }, {id : 8,value: 'PNC' }, {id : 9,value: 'BAYI' }, {id : 10, value: 'NEONATUS' }
        ],
        OptPerujuk : [
          {id : 0,value:"Bidan"},{id : 1,value:"Puskesmas"},{id : 2,value:"Dokter"},{id : 3,value:"Rumah Sakit"},{id : 4,value:"Datang Sendiri"},
        ],
        OptHubungan : [
          {id : 0,value:"SUAMI"},{id : 1,value:"ORANG TUA"},{id : 2,value:"KELUARGA"},{id : 3,value:"TEMAN"},
        ],
        
        register: {
          idPasien : this.$route.params.idPasien,
        idBidan : localStorage.getItem('userId'),
          tanggaKunjungan: undefined,
          nama: undefined,
          noHP: undefined,
          hubungan: undefined,
          perujuk: undefined,
          jenisPemeriksaan: undefined
        }
      }
    },
    methods: {
      registermedis : function() {
        
        let data = {
          idBidan : this.register.idBidan,
          idPasien : this.register.idPasien,
          tanggalKunjungan :this.register.tanggaKunjungan,
          penanggungJawab : {
            nama : this.register.nama,
            noHP : this.register.noHP,
            hubungan : this.register.hubungan,
          },
          
          perujuk : this.register.perujuk,
          jenisPemeriksaan : this.register.jenisPemeriksaan,

        }
        this.$store.dispatch('registermedis', data)
          .then(res => console.log('ini id rekam medis habis create',res), this.$router.push('/Pasien/Details/'+this.register.idPasien))
          .catch(err => console.log(err))
      },
    }
  }
</script>

<style>

</style>