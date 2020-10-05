<template>
  <div>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>

            <strong>SOAP III </strong>
          </CCardHeader>
          <CCardBody>
            <form @submit.prevent="updateSoapIII">
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
                        <CCol sm="5">
                          <CTextarea type="text" label="Tanda tanda pelepasan Plesenta" />
                        </CCol>

                        <CCol sm="3">
                          <CInput type="number" min="1" step="1" label="Tinggi Fundus" v-model="temp" />
                        </CCol>
                      </CRow>
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
                      </CRow>

                      <CRow>
                        <CCol sm="">
                          <label for>Vesica Urinaria</label>
                          <div>
                            <!-- <label class="typo__label">Single select</label> -->
                            <multiselect v-model="value" :options="opUrinaria" :searchable="false"
                              :close-on-select="false" :show-labels="false" placeholder="plih satu"></multiselect>
                          </div>
                        </CCol>
                        <CCol sm="">
                          <label for>uterus Membulat ?</label>
                          <div>
                            <!-- <label class="typo__label">Single select</label> -->
                            <multiselect v-model="value" :options="opDarus" :searchable="false" :close-on-select="false"
                              :show-labels="false" placeholder="plih satu"></multiselect>
                          </div>
                        </CCol>
                        <CCol sm="">
                          <label for>sembruran Darah ?</label>
                          <div>
                            <!-- <label class="typo__label">Single select</label> -->
                            <multiselect v-model="value" :options="opDarus" :searchable="false" :close-on-select="false"
                              :show-labels="false" placeholder="plih satu"></multiselect>
                          </div>
                        </CCol>
                        <CCol sm="">
                          <label for>palpasi Abdomen</label>
                          <div>
                            <!-- <label class="typo__label">Single select</label> -->
                            <multiselect v-model="value" :options="opAbdomen" :searchable="false"
                              :close-on-select="false" :show-labels="false" placeholder="plih satu"></multiselect>
                          </div>
                        </CCol>
                        <CCol>
                          <label for>Kontraksi Uterus</label>
                          <div>
                            <!-- <label class="typo__label">Single select</label> -->
                            <multiselect v-model="value" :options="opUterus" :searchable="false"
                              :close-on-select="false" :show-labels="false" placeholder="plih satu"></multiselect>
                          </div>
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
                    <div class="card-header">Kelahiran Plasenta</div>
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
                          <label for>Keterangan</label>
                          <div>
                            <!-- <label class="typo__label">Single select</label> -->
                            <multiselect v-model="value" :options="oPlasenta" :searchable="false"
                              :close-on-select="false" :show-labels="false" placeholder="plih satu"></multiselect>
                          </div>
                        </CCol>
                      </CRow>

                      <div class="card">
                        <div class="card-header">Kontraksi Plasenta</div>
                        <div class="card-body">
                          <CRow>
                            <CCol sm="3">
                              <CInput v-model="temp" label="Frekuensi" placeholder="" type="number" min="0"
                                step="0.1" />
                            </CCol>
                            <CCol sm="3">
                              <CInput v-model="temp" label="Interval" placeholder="" type="number" step="1" />
                            </CCol>
                            <CCol sm="3">
                              <CInput v-model="temp" label="Durasi" placeholder="" type="number" min="0" step="1" />
                            </CCol>
                          </CRow>
                        </div>
                      </div>
                      <CRow>
                        <CCol sm="3">
                          <CInput v-model="temp" label="Pendarahan (ml)" placeholder="" type="number" min="0"
                            step="0.1" />
                        </CCol>
                        <CCol sm="3">
                          <CInput v-model="temp" label="Keadaan Jalan Lahir" placeholder="" />
                        </CCol>
                        <CCol sm="3">
                          <label for>Bila Rupture</label>
                          <div>
                            <!-- <label class="typo__label">Single select</label> -->
                            <multiselect v-model="value" :options="opRupture" :searchable="false"
                              :close-on-select="false" :show-labels="false" placeholder="plih satu"></multiselect>
                          </div>
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
        opRupture : ['I',"II",'III',"IV"],
        opDarus: ['ada', 'tidak ada'],
        opAbdomen: ['Ada Janin Lain', 'Tidak Ada'],
        opUterus: ['Ada', 'Tidak dan Lemah', 'Ada dan Kuat'],
        opUrinaria: ['kosong', 'Penuh'],
        oPlasenta: ['Spontan', 'manual', 'Lengkap', 'Tidak Lengkap'],
        temp: undefined,
      }
    },
    methods: {
      updateSoapIII() {
        console.log('update ya')
      }
    }
  }
</script>

<style>

</style>