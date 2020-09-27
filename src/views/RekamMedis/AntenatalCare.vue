<template>
  <div>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <strong>Antenatal Care</strong>
          </CCardHeader>
          <CCardBody>
            <form @submit.prevent="UpdateANC">
              <CRow>
                <CCol sm="3">
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Trimester</label>
                    <select class="custom-select" id="inputGroupSelect01">
                      <option value="1">I</option>
                      <option value="2">II</option>
                      <option value="3">III</option>
                    </select>
                  </div>
                </CCol>
              </CRow>

              <!-- Pemeriksaan IBU -->
              <CRow>
                <div class="col">
                  <h6>Pemeriksaan - IBU</h6>
                </div>
              </CRow>
              <CRow>
                <CCol sm="sm">
                  <CTextarea type="date" label="Anamnesis" />
                </CCol>
              </CRow>

              <CRow>
                <CCol sm="3">
                  <CInput type="text" label="Berat Badan (Kg)" />
                </CCol>
                <CCol sm="3">
                  <CInput type="text" label="Tinggi Badan (cm)" />
                </CCol>
                <CCol sm="3">
                  <CInput type="text" label="Tekanan Darah (Sistolik)" />
                </CCol>
                <CCol sm="3">
                  <CInput type="text" label="Tekanan Darah Distolik" />
                </CCol>
              </CRow>

              <CRow>
                <CCol sm="3">
                  <CInput type="text" label="Lingkar Lengan Atas" />
                </CCol>
                <CCol sm="3">
                  <CInput type="text" label="Tinggi Fundus Uteri (cm)" />
                </CCol>
                <CCol>
                  <div class="form-group">
                    <label for>Status Gizi/label</label>
                    <select class="form-control" v-model="test">
                      <option value="Normal">Normal</option>
                      <option value="Kurang">Kurang</option>
                      <option value="Lebih">Lebih</option>
                    </select>
                  </div>
                </CCol>

                <CCol>
                  <CInput type="checkbox" label="patella"></CInput>
                </CCol>
              </CRow>

              <!-- Pemeriksaaan Bayi -->
              <CRow>
                <div class="col">
                  <h6>Pemeriksaan - Bayi</h6>
                </div>
              </CRow>
              <CRow>
                <CCol sm="3">
                  <CInput type="text" label="Umur Kehamilan (bulan)" />
                </CCol>
                <CCol sm="3">
                  <CInput type="text" label="umur Kehamilan (hari)" />
                </CCol>
                <CCol sm="3">
                  <CInput type="text" label="Detak Jantung Janin (n/menit)" />
                </CCol>
                <CCol sm="3">
                  <CInput type="text" label="taksiran Berat Janin (gr)" />
                </CCol>
              </CRow>
              <CRow>
                <CCol sm="3">
                  <label for>Imunisasi Tetanus</label>
                  <select class="form-control">
                    <option v-for="option in opTetanus" :key="option.id">{{ option.value }}</option>
                  </select>
                </CCol>
                <CCol sm="3">
                  <div class="form-group">
                    <label for>Posisi Janin</label>
                    <select class="form-control" v-model="test">
                      <option value="Kepala">Kepala</option>
                      <option value="Sungsang">Kurang</option>
                      <option value="Lintang">Lebih</option>
                    </select>
                  </div>
                </CCol>
              </CRow>
              <CRow>
                  <CCol sm="3">
                      <CInput type="text" label="Jumlah Janin" />
                  </CCol>
              </CRow>

                
              <!--Pelayanan  -->
              <CRow>
                <div class="col">
                  <h6>Pelayanan</h6>
                </div>
              </CRow>
              <CRow>
                  <CCol sm="3">
                      <label for>Injeksi Tetanus</label>
                  <select class="form-control">
                    <option v-for="option in opTetanus" :key="option.id">{{ option.value }}</option>
                  </select>
                  </CCol>
                  <CCol sm="3">
                      <CInput type="text" label="Umpan Balik" />
                  </CCol>
                  <CCol sm="3">
                      <CInput type="date" label="kunjungan Berikutnya" />
                  </CCol>
              </CRow>
              <CRow>
                  <CCol sm="6">
                      <CInput type="text" label="Terapi" />
                  </CCol>
                  <CCol sm="6">
                      <CInput type="text" label="Umpan Balik" />
                  </CCol>
              </CRow>
              <CRow>
                  <CCol sm="6">
                      <CInput type="text" label="Rujukan" />
                  </CCol>
                  <CCol sm="6">
                      <CInput type="text" label="Nasihat" />
                  </CCol>
              </CRow>

              <!-- button submit -->
              <CRow>
                <CCol col="6" class="text-left">
                  <CButton type="submit" color="primary" class="px-4">submit</CButton>
                </CCol>

              </CRow>
            </form>
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
      opTetanus: [
        {id: 0,value: "TT0"},{id: 1,value: "TT1"},{id: 2,value: "TT2"},{  id: 3,value: "TT3"}, {id: 4, value: "TT4"},
           {id: 5,value: "TT5"}
          ],
          id: this.$route.params.idRekamMedis,
              test: undefined,
              checked: undefined,
              ANC : {
                  idRekamMedis : this.$route.params.idRekamMedis,
                  trimester : undefined,
                  pemeriksaan : {
                      ibu : {
                          anamnesis : String,
                          beratBadan : undefined,
                          tinggiBadan : undefined,
                          tekananDarah : {
                              sitolik : undefined,
                              distolik : undefined
                          },
                          statusGizi : undefined,
                          lingkarLenganAtas : undefined,
                          tinggiFundusUteri : undefined,
                          refleksPatellaPositif : Boolean,
                      },
                      bayi : {
                          umurKehamilan : {
                              bulan : undefined,
                              hari : undefined,                              
                          },
                          detakjantungJanin : undefined,
                              posisiKepalaMasukPap : Boolean,
                              taksiranBeratJanin : undefined,
                              posisiJanin : undefined,
                              kakiBergerak: undefined,
                              imunisasiTetanus: undefined,
                      },
                      pelayanan : {
                          injeksiTT : undefined,
                          catatBukuKIA : Boolean,
                          banyakPemberianFE : undefined,
                          terapi : String,
                          Rujukan :String,
                          umpanBalik : String,
                          nasihat : String,
                          kunjunganBerikutmya : String,
                      }
                  }
              }
          };
        },

        methods : {
            UpdateANC () {
                console.log('update oi')
            }
        }
    }; 
    </script>

<style>
</style>