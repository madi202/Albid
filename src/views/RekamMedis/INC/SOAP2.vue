<template>
  <div>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>

            <strong>SOAP II </strong>
          </CCardHeader>
          <CCardBody>
            <form @submit.prevent="updateSoapII">
              <div class="card">
                <div class="card-header">Waktu Pemeriksaan</div>
                <div class="card-body">
                  <CRow>
                    <CCol sm="3">
                      <CInput v-model="temp" label="Tanggal Pemeriksaan" type="date" placeholder="" />
                    </CCol>
                    <CCol sm="3">
                      <CInput v-model="temp" label="Waktu Pemeriksaan (jam)" placeholder="0-23" type="number" min="1"
                        max="23" step="1" />
                    </CCol>
                    <CCol sm="3">
                      <CInput v-model="temp" label="Waktu Pemeriksaan (Menit)" placeholder="0-59" type="number" min="0"
                        max="59" step="1" />
                    </CCol>
                  </CRow>
                </div>
              </div>

              <div class="card">
                <div class="card-header">Pemeriksaan</div>
                <div class="card-body">

                  <CRow>
                    <CCol>
                      <CTextarea type="text" label="Keluhan Utama" v-model="temp" />
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol sm="12">
                      <CTextarea type="text" label="Kesadaran" v-model="temp" />
                    </CCol>
                  </CRow>
                  <div class="card">
                    <div class="card-header">Tanda-Tanda Vital</div>
                    <div class="card-body">
                      <CRow>
                        <CCol sm="3">
                          <CInput type="text" label="Tekanan Darah (sistolik)" v-model="temp" />
                        </CCol>
                        <CCol sm="3">
                          <CInput type="text" label="Tekanan Darah (diastolik)" v-model="temp" />
                        </CCol>
                        <CCol sm="2">
                          <CInput type="text" label="Nadi (n/menit)" v-model="temp" />
                        </CCol>
                        <CCol sm="2">
                          <CInput type="text" label="Respirasi (n/menit)" v-model="temp" />
                        </CCol>
                        <CCol sm="2">
                          <CInput type="number" min="1" step="1" label="Suhu (Celcius)" v-model="temp" />
                        </CCol>
                        <CCol sm="2">
                          <CInput type="number" min="1" step="1" label="Detak Jantung Janin" v-model="temp" />
                        </CCol>
                      </CRow>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header">Pemeriksaan Dalam</div>
                    <div class="card-body">
                      <CRow>
                        <CCol>
                          <CTextarea type="text" label="Vulva" v-model="temp" />
                        </CCol>
                        <CCol>
                          <CTextarea type="text" label="Persentasi" v-model="temp" />
                        </CCol>
                        <CCol>
                          <CTextarea type="text" label="Molage" v-model="temp" />
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol>
                          <CTextarea type="text" label="Keadaan Ketuban" v-model="temp" />
                        </CCol>
                        <CCol>
                          <CTextarea type="text" label="bagian Terabah" v-model="temp" />
                        </CCol>
                        <CCol>
                          <CTextarea type="text" label="Bagian Terendah Turun" v-model="temp" />
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol>
                          <label for>Vesica Urinaria</label>
                          <div>
                            <!-- <label class="typo__label">Single select</label> -->
                            <multiselect v-model="value" :options="opUrinaria" :searchable="false"
                              :close-on-select="false" :show-labels="false" placeholder="plih satu"></multiselect>
                          </div>
                        </CCol>
                        <CCol>
                          <CInput type="number" step="1" min="1" label="Parineum" v-model="temp" />
                        </CCol>
                      </CRow>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">Pemeriksaan Asessmen</div>
                    <div class="card-body">
                      <CTextarea label="Diagnosa" v-model="test" />
                      <CTextarea label="Masalah Potensial" v-model="test" />
                      <CTextarea label="Antisipasi Masalah" v-model="test" />
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">Planning / Perencanaan</div>
                    <div class="card-body">
                      <CTextarea label="Perencanaan" v-model="test" />
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header">Kelahiran bayi</div>
                    <div class="card-body">
                      <CRow>
                        <CCol sm="3">
                          <CInput v-model="temp" label="Waktu Kelahiran (jam)" placeholder="0-23" type="number" min="1"
                            max="23" step="1" />
                        </CCol>
                        <CCol sm="3">
                          <CInput v-model="temp" label="Waktu Kelahiran (Menit)" placeholder="0-59" type="number"
                            min="0" max="59" step="1" />
                        </CCol>
                        <CCol>
                          <label for>Jenis Kelamin</label>
                          <div>
                            <!-- <label class="typo__label">Single select</label> -->
                            <multiselect v-model="value" :options="optKelamin" :searchable="false"
                              :close-on-select="false" :show-labels="false" placeholder="plih satu"></multiselect>
                          </div>
                        </CCol>
                      </CRow>

                      <CRow>
                        <CCol sm="3">
                          <CInput v-model="temp" label="Berat Badan (Kg)" placeholder="" type="number" min="0"
                            step="0.1" />
                        </CCol>
                        <CCol sm="3">
                          <CInput v-model="temp" label="Panjang Badan (cm)" placeholder="" type="number" step="1" />
                        </CCol>
                        <CCol sm="3">
                          <CInput v-model="temp" label="Lingkar Kepala (cm)" placeholder="" type="number" min="0"
                            step="1" />
                        </CCol>
                        <CCol sm="3">
                          <CInput v-model="temp" label="Lingkar Dada (cm)" placeholder="" type="number" min="0"
                            step="1" />
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol>
                          <CTextarea type="text" label="Keadaan Bayi Saat Lahir" v-model="temp" />
                        </CCol>
                        <CCol>
                          <CTextarea type="text" label="Evaluasi Bayi" v-model="temp" />
                        </CCol>
                      </CRow>
                    </div>
                  </div>
                </div>
              </div>
              <button class="btn btn-primary">Submit</button>
            </form>
            <!-- <button v-on:click="tambahpasien"> button</button> -->
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'
  export default {
    components: {
      Multiselect
    },
    data() {
      return {
        value: [],
        test: undefined,
        optKelamin: ['laki-Laki', 'Perempuan'],
        opUrinaria: ['kosong', 'Penuh'],
        temp: undefined,
      }
    },
    methods: {
      updateSoapII() {
        console.log('update ya')
      }
    }
  }
</script>

<style>

</style>