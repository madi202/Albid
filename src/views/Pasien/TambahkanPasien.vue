<template>
  <div>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>

            <strong>Tambahkan pasien </strong>
          </CCardHeader>
          <CCardBody>
            <form @submit.prevent="tambahpasien">
              <CRow>
                <CCol sm="6">
                  <CInput v-model="nama" label="Nama Lengkap" placeholder="Enter your name" />
                </CCol>
                <CCol sm="6">
                  <CInput v-model="tanggalLahir" label="Tanggal Lahir" type="date" placeholder="Enter your name" />
                </CCol>

              </CRow>
              <CRow>
                <CCol sm="6">
                  <CInput v-model="nik" label="NIK" placeholder="NIK" />
                </CCol>
                <CCol sm="6">
                  <CInput v-model="kontak.noHP" label="Nomor Kontak" placeholder="Nomor Kontak" />
                </CCol>

              </CRow>

              <CRow>
                <CCol sm="6">
                  <CInput v-model="alamat.alamatJalan" label="Alamat" type="text" placeholder="Alamat Jalan" />
                </CCol>

                <CCol sm="6">
                  <CInput v-model="pekerjaan" label="Pekerjaan" type="text" placeholder="Pekerjaan" />
                </CCol>

              </CRow>
              <CRow>
                <CCol sm="4">
                  <div class="form-group">
                    <label for="">Propinsi</label>
                    <select class="form-control" v-model="province" @change="getCities">
                      <option value="">Pilih</option>
                      <option v-for="province in provinces" v-bind:key="province.id"
                        v-bind:value="{id:province.id,name:province.name}">{{province.name}}</option>
                    </select>
                  </div>
                </CCol>
                <CCol sm="4">
                  <div class="form-group">
                    <label for="">Kota/Kabupaten</label>
                    <select class="form-control" v-model="city" @change="getDistricts">
                      <option value="">Pilih</option>
                      <option v-for="city in cities" v-bind:key="city.id" v-bind:value="{id:city.id,name:city.name}">
                       {{city.name}}</option>
                    </select>
                  </div>
                </CCol>
              </CRow>
              <CRow>
                <CCol sm="4">
                  <div class="form-group">
                    <label for="">Kecamatan</label>
                    <select class="form-control" v-model="district" @change="getsubdistrict">
                      <option value="">Pilih</option>
                      <option v-for="district in districts" v-bind:key="district.id" v-bind:value="{id:district.id,name:district.name}">
                        {{district.name}}</option>
                    </select>
                  </div>
                </CCol>
                <!-- <CCol sm="4">
                  <div class="form-group">
                    <label for="">Desa/Kelurahan</label>
                    <select class="form-control" v-model="village">
                      <option value="">Pilih</option>
                      <option v-for="village in villages" v-bind:key="village.id" v-bind:value="{id:village.id,name:village.name}">
                        {{village.name}}</option>
                    </select>
                
                  </div>
                </CCol> -->
                 <CCol sm="4">
                  <CInput v-model="village" label="Desa/Kelurahan" type="text" placeholder="Desa/Kelurahan" />
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
  // var data = JSON.stringify({"nik":"1478244444","nama":"Noria","tanggalLahir":"1990-01-01","kontak":{"noHP":"08785411111"},"pekerjaan":"ibu","alamat":{"provinsi":"banten","kota":"serang","kecamatan":"serang","kelurahan":"serang","alamatJalan":"serang"}});
  import axios from 'axios'
  export default {
    created() {
      this.getprovinces()
      // this.getsubdistrict()
    },
    data() {
      return {
        // var bebas
        api_key: 'ZzjxlERiVLaNX0ArhN5oEC3sorXzo1KwmbairIIN',
        provinces: [],
        province:'',
        cities: [],
        city:'',
        districts: [],
        district:'',
        villages: [],
        village:'',


        //v-model
        nik: '',
        nama: '',
        tanggalLahir: '',
        kontak: {
          noHP: '',
        },
        pekerjaan: undefined,
        alamat: {
          provinsi: this.provinces,
          kota: this.city,
          kecamatan: this.district,
          kelurahan: this.villages,
          alamatJalan: undefined
        }

      }

    },

    methods: {
      tambahpasien: function () {
        let data = {
          nik: this.nik,
          nama: this.nama,
          tanggalLahir: this.tanggalLahir,
          kontak: {
            noHP: this.kontak.noHP
          },
          pekerjaan: this.pekerjaan || undefined,
          alamat: {
            provinsi: this.alamat.provinsi,
            kota: this.alamat.kota,
            kecamatan: this.alamat.kecamatan,
            kelurahan: this.alamat.kelurahan,
            alamatJalan: this.alamat.alamatJalan
          }
        }
        this.$store.dispatch('tambahpasien', data)
          .then(() => this.$router.push('/Pasien/ListPasien'))
          .catch(err => console.log(err))
      },

      //untuk alamat
      getprovinces() {
        axios.get('https://ruangapi.com/api/v1/provinces', {
          headers: {
            Authorization: this.api_key
          }
        }).then((response) => {
          let provinces = response.data.data.results
          this.provinces = provinces //MASUKKAN REQUEST DATA PROPINSI KE DALAM VAR PROVINCES
        })
      },
      getCities() {
        //MENGIRIM PERMINTAAN UNTUK MENGAMBIL DATA KOTA/KABUPATEN
        axios.get('https://ruangapi.com/api/v1/cities', {
          //MENGIRIMKAN PARAMETER PROVINCE_ID SEBAGAI PARAMETER FILTERING
          params: {
            province: this.province.id
          },
          headers: {
            Authorization: this.api_key
          }
        }).then((response) => {
          let cities = response.data.data.results
          this.cities = cities //DATA KOTA/KABUPATEN AKAN DISIMPAN KE VAR CITIES
        })
      },
      getDistricts() {
        //MENGIRIM PERMINTAAN UNTUK MENGAMBIL DATA KECAMATAN
        axios.get('https://ruangapi.com/api/v1/districts', {
          //MENGIRIM CITY_ID SEBAGAI PARAMETER UNTUK FILTERING DATA KECAMATAN
          params: {
            city: this.city.id
          },
          headers: {
            Authorization: this.api_key
          }
        }).then((response) => {
          let districts = response.data.data.results
          this.districts = districts //DATA KECAMATAN AKAN DISIMPAN KE DALAM VAR districts
        })
      },
      getsubdistrict() {
        //MENGIRIM PERMINTAAN UNTUK MENGAMBIL DATA Kelurahan
        axios.get('https://ruangapi.com/api/v1/villages', {
          //MENGIRIM CITY_ID SEBAGAI PARAMETER UNTUK FILTERING DATA Kelurahanb
          params: {
            district: this.district.id
           
          },
          headers: {
            Authorization: this.api_key
          }
        }).then((response) => {
          let villages = response.data.data.results
          this.villages = villages //DATA kelurahan AKAN DISIMPAN KE DALAM VAR districts
          console.log('masukl sonmo')
          // console.log(subDistricts)
          // console.log(this.district.id)
        })
      },



    },
  }
</script>

<style>

</style>