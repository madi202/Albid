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
import Multiselect from 'multiselect'
  export default {
  }
</script>

<style>

</style>