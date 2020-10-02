<template>
  <div>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <strong>Antenatal Care</strong>
          </CCardHeader>
          <CCardBody>
      
              <CRow sm="4">
                <CCol sm="4">
                  <div class="card sm-4">
                    <div class="card-header">Trimester</div>
                    <div class="card-body">
                      <div>
                        <!-- <label class="typo__label">Single select</label> -->
                        <multiselect v-model="ANC.trimester" :options="opTrimester" :searchable="false"
                          :close-on-select="false" :show-labels="false" placeholder="plih satu"></multiselect>
                      </div>
                    </div>
                  </div>
                </CCol>
              </CRow>

              <!-- Pemeriksaan IBU -->
              <div class="card">
                <div class="card-header">Pemeriksaan - IBU</div>
                <div class="card-body">
                  <CRow>
                    <CCol sm="">
                      <CTextarea v-model="ANC.pemeriksaan.ibu.anamnesis" type="text" label="Anamnesis"></CTextarea>
                    </CCol>
                  </CRow>

                  <CRow>
                    <CCol sm="3">
                      <CInput type="number" step="0.1" min="1" v-model="ANC.pemeriksaan.ibu.beratBadan"
                        label="Berat Badan (Kg)" />
                    </CCol>
                    <CCol sm="3">
                      <CInput type="number" step="0.1" min="1" v-model="ANC.pemeriksaan.ibu.tinggiBadan"
                        label="Tinggi Badan (cm)" />
                    </CCol>
                    <CCol sm="3">
                      <CInput type="number" step="1" min="1" v-model="ANC.pemeriksaan.ibu.tekananDarah.sistolik"
                        label="Tekanan Darah (Sistolik)" />
                    </CCol>
                    <CCol sm="3">
                      <CInput type="number" step="1" min="1" v-model="ANC.pemeriksaan.ibu.tekananDarah.diastolik"
                        label="Tekanan Darah Distolik" />
                    </CCol>
                  </CRow>

                  <CRow>
                    <CCol sm="3">
                      <CInput type="number" step="1" min="1" v-model="ANC.pemeriksaan.ibu.lingkarLenganAtas"
                        label="Lingkar Lengan Atas" />
                    </CCol>
                    <CCol sm="3">
                      <CInput type="number" step="1" min="1" v-model="ANC.pemeriksaan.ibu.tinggiFundusUteri"
                        label="Tinggi Fundus Uteri (cm)" />
                    </CCol>
                    <CCol>
                      <div class="form-group">
                        <label>Status Gizi</label>
                        <div>
                          <multiselect v-model="ANC.pemeriksaan.ibu.statusGizi" :options="opGizi" :searchable="false"
                            :close-on-select="false" :show-labels="false" placeholder="plih satu"></multiselect>
                        </div>
                      </div>
                    </CCol>

                    <CCol sm="3">
                      <div class="box">
                        <input id="patella" type="checkbox" v-model="ANC.pemeriksaan.ibu.refleksPatellaPositif">
                        <span class="check"></span>
                        <label for="patella">Reflels patella ?</label>
                      </div>
                    </CCol>
                  </CRow>
                </div>
              </div>

              <!-- Pemeriksaaan Bayi -->

              <div class="card">
                <div class="card-header">Pemeriksaan - Bayi</div>
                <div class="card-body">

                  <CRow>
                    <CCol sm="3">
                      <CInput type="number" v-model="ANC.pemeriksaan.bayi.umurKehamilan.bulan" step="1" min="1" max="12"
                        label="Umur Kehamilan (bulan)" />
                    </CCol>
                    <CCol sm="3">
                      <CInput type="number" v-model="ANC.pemeriksaan.bayi.umurKehamilan.hari" step="1" min="1" max="31"
                        label="umur Kehamilan (hari)" />
                    </CCol>
                    <CCol sm="3">
                      <CInput type="number" v-model="ANC.pemeriksaan.bayi.detakJantungJanin" step="1" min="1"
                        label="Detak Jantung Janin (n/menit)" />
                    </CCol>
                    <CCol sm="3">
                      <CInput type="number" v-model="ANC.pemeriksaan.bayi.taksiranBeratJanin" step="0.1" min="1"
                        label="taksiran Berat Janin (gr)" />
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol sm="3">
                      <label for>Imunisasi Tetanus</label>
                      <div>
                        <multiselect v-model="ANC.pemeriksaan.bayi.imunisasiTetanus" :options="opTetanus"
                          :searchable="false" :close-on-select="false" :show-labels="false"
                          placeholder="Pilih salah satu"></multiselect>
                      </div>
                    </CCol>
                    <CCol sm="3">
                      <div class="form-group">
                        <label for>Posisi Janin</label>
                        <div>
                          <multiselect v-model="ANC.pemeriksaan.bayi.posisiJanin" :options="opJanin" :searchable="false"
                            :close-on-select="false" :show-labels="false" placeholder="plih satu"></multiselect>
                        </div>
                      </div>
                    </CCol>
                    <CCol sm="3">
                      <div class="box">
                        <input id="kaki" type="checkbox" v-model="ANC.pemeriksaan.bayi.kakiBergerak">
                        <span class="check"></span>
                        <label for="kaki">Kaki bergerak ?</label>
                      </div>
                    </CCol>
                    <CCol sm="3">
                      <div class="box">
                        <input id="kepala" type="checkbox" v-model="ANC.pemeriksaan.bayi.posisiKepalaMasukPap">
                        <span class="check"></span>
                        <label for="kepala">Kepala Masuk PAP ?</label>
                      </div>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol sm="3">
                      <CInput type="number" min="1" step="1" v-model="ANC.pemeriksaan.bayi.jumlahJanin"
                        label="Jumlah Janin" />
                    </CCol>
                  </CRow>
                </div>
              </div>


              <!--Pelayanan  -->

              <div class="card">
                <div class="card-header">Pelayanan</div>
                <div class="card-body">
                  <CRow>
                    <CCol sm="3">
                      <label for>Injeksi Tetanus</label>

                      <div>
                        <!-- <label class="typo__label">Single select</label> -->
                        <multiselect v-model="ANC.pelayanan.injeksiTT" :options="opTetanus" :searchable="false"
                          :close-on-select="false" :show-labels="false" placeholder="plih satu"></multiselect>
                      </div>
                    </CCol>
                    <CCol sm="3">
                      <CInput type="text" v-model="ANC.pelayanan.banyakPemberianFE" label="Jumlah Pemberian FE" />
                    </CCol>
                    <CCol sm="3">
                      <CInput type="date" v-model="ANC.pelayanan.kunjunganBerikutnya" label="kunjungan Berikutnya" />
                    </CCol>
                    <CCol sm="3">
                      <div class="box">
                        <input id="catatbukuKIA" type="checkbox" v-model="ANC.pelayanan.catatBukuKIA">
                        <span class="check"></span>
                        <label for="catatbukuKIA">Catat Buku KIA ?</label>
                      </div>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol sm="6">
                      <CTextarea type="text" label="Terapi" v-model="ANC.pelayanan.terapi" />
                    </CCol>
                    <CCol sm="6">
                      <CTextarea type="text" label="Umpan Balik" v-model="ANC.pelayanan.umpanBalik" />
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol sm="6">
                      <CTextarea type="text" label="Rujukan" v-model="ANC.pelayanan.rujukan" />
                    </CCol>
                    <CCol sm="6">
                      <CTextarea type="text" label="Nasihat" v-model="ANC.pelayanan.nasihat" />
                    </CCol>

                  </CRow>

                </div>
              </div>
              <!-- button submit -->
              <CRow>
                <CCol col="6" class="text-left">
                  <CButton color="primary" class="px-4" @click="UpdateANC">submit</CButton>
                </CCol>

              </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
  import moment from 'moment'
  import Multiselect from 'vue-multiselect'
  export default {
    components: {
      Multiselect
    },
    created: function () {
      this.$store.dispatch("getANC", this.$route.params.idRekamMedis).then(res => {

        // console.log(this.ANC)
        Object.assign(this.ANC, res.data.doc)
        // console.log('ini :',res.data.doc)

      })
    },
    filters: {
      formatdate: function (value) {
        if (value) {
          return moment(String(value)).format('LL')
        }
      },
    },
    data() {
      return {
        opTetanus: ['TT0', 'TT1', 'TT2', 'TT3', 'TT4', 'TT5'],
        opTrimester: ['I', 'II', "III"],
        opJanin: ['kepala', 'Sungsang', 'Lintang'],
        opGizi: ['kurang', 'normal', 'lebih'],
        id: this.$route.params.idRekamMedis,
        test: undefined,
        checked: undefined,
        test: '2020-07-29T10:21:03.944Z',


        ANC: {
          idRekamMedis: this.$route.params.idRekamMedis,
          trimester: undefined,
          pemeriksaan: {
            ibu: {
              anamnesis: undefined,
              beratBadan: undefined,
              tinggiBadan: undefined,
              tekananDarah: {
                sistolik: undefined,
                diastolik: undefined
              },
              statusGizi: undefined,
              lingkarLenganAtas: undefined,
              tinggiFundusUteri: undefined,
              refleksPatellaPositif: undefined,
            },
            bayi: {
              umurKehamilan: {
                bulan: undefined,
                hari: undefined,
              },
              detakJantungJanin: undefined,
              posisiKepalaMasukPap: undefined,
              taksiranBeratJanin: undefined,
              posisiJanin: undefined,
              kakiBergerak: undefined,
              imunisasiTetanus: undefined,
              jumlahJanin: undefined
            },

          },
          pelayanan: {
            injeksiTT: '',
            catatBukuKIA: undefined,
            banyakPemberianFE: undefined,
            terapi: undefined,
            rujukan: undefined,
            umpanBalik: undefined,
            nasihat: undefined,
            kunjunganBerikutnya: undefined,
          }
        }
      };
    },

    methods: {
      UpdateANC() {

        let data = {
          idRekamMedis: this.$route.params.idRekamMedis || undefined,
          trimester: this.ANC.trimester || undefined,
          pemeriksaan: {
            ibu: this.ANC.pemeriksaan.ibu || undefined,
            bayi: this.ANC.pemeriksaan.bayi || undefined,
          },
          pelayanan: this.ANC.pelayanan || undefined
        }

        this.$store.dispatch('UpdateANC', data)
          .then(resp => console.log(resp),
          this.$router.push('/Pasien/ListPasien/')
            
          )
          .catch(err => console.log(err))
        
      },
    }
  };
</script>

<style>
</style>