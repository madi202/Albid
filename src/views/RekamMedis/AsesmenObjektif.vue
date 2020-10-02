<template>
  <div>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>

            <strong>Assesmen Awal Objektif</strong>
          </CCardHeader>
          <CCardBody>
           <form @submit.prevent="onSubmit">
              <CRow>
              <CCol sm="6">
                <div class="card">
                  <div class="card-header">Keadaam Umum</div>
                  <div class="card-body">
                    <div>
                      <!-- <label class="typo__label">Materi Yang Diberikan</label> -->
                      <multiselect deselect-label="" v-model="objektif.keadaanUmum" selected-label="Dipilih"
                        :searchable="false" selectLabel="Klik Untuk Memilih" placeholder="Pilih List Berikut" label=""
                        track-by="" :options="optUmum" :multiple="false">
                      </multiselect>
                    </div>
                  </div>
                </div>
              </CCol>
              <CCol sm="6">
                <div class="card">
                  <div class="card-header">Kesadaran</div>
                  <div class="card-body">
                    <div>
                      <!-- <label class="typo__label">Materi Yang Diberikan</label> -->
                      <multiselect deselect-label="" v-model="objektif.kesadaran" selected-label="Dipilih"
                        :searchable="false" selectLabel="Klik Untuk Memilih" placeholder="Pilih List Berikut" label=""
                        track-by="" :options="optKesadaran" :multiple="false">
                      </multiselect>
                    </div>
                  </div>
                </div>
              </CCol>
            </CRow>
            <div class="card">
              <div class="card-header">Tanda Vital</div>
              <div class="card-body">
                <CRow>

                  <CCol>
                    <CInput v-model="objektif.tandaVital.tekananDarah.sistolik" type="number" step="1" min="1"
                      label="Tekanan Darah (Sistolik)" />
                  </CCol>
                  <CCol>
                    <CInput v-model="objektif.tandaVital.tekananDarah.diastolik" type="text" step="1" min="1"
                      label="Tekanan Darah (diastolik)" />
                  </CCol>
                  <CCol>
                    <CInput v-model="objektif.tandaVital.nadiPerMenit" type="text" step="1" min="1"
                      label="Nadi (n/menit)" />
                  </CCol>
                  <CCol>
                    <CInput v-model="objektif.tandaVital.napasPermenit" type="text" step="1" min="1"
                      label="Respirasi (n/menit)" />
                  </CCol>
                  <CCol>
                    <CInput v-model="objektif.tandaVital.suhuTubuh" type="text" step="1" min="1"
                      label="Suhu (celcius)" />
                  </CCol>
                </CRow>
              </div>
            </div>

            <div class="card">
              <div class="card-header">Pemeriksaan Fisik</div>
              <div class="card-body">
                <CRow>
                  <CCol sm="6">
                    <CTextarea v-model="test" type="text" label="Pembesaran Kelenjar Tiroid" />
                  </CCol>
                  <CCol sm="6">
                    <CTextarea v-model="test" type="text" label="Pembesaran Kgb" />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol sm="6">
                    <CTextarea v-model="test" type="text" label="Pengingkatan vena Jugularis" />
                  </CCol>
                  <CCol sm="3">
                    <div class="box">
                      <input id="cloasma" type="checkbox" v-model="check">
                      <span class="check"></span>
                      <label for="cloasma">Cloasma Gravidarum</label>
                    </div>
                  </CCol>
                  <CCol sm="3">
                    <div class="box">
                      <input id="anemis" type="checkbox" v-model="check">
                      <span class="check"></span>
                      <label for="anemis">Kongjungtiva Anemis</label>
                    </div>
                  </CCol>
                </CRow>

                <CRow sm="12">
                  <CCol sm="4">
                    <CTextarea v-model="test" type="text" label="Benjolan" />
                  </CCol>
                  <CCol sm="">
                    <div class="box">
                      <input id="kolostrum" type="checkbox" v-model="check">
                      <span class="check"></span>
                      <label for="kolostrum">Kolostrum</label>
                    </div>
                  </CCol>
                  <CCol sm="">
                    <div class="box">
                      <input id="retraksi" type="checkbox" v-model="check">
                      <span class="check"></span>
                      <label for="retraksi">Retraksi</label>
                    </div>
                  </CCol>
                  <CCol sm="">
                    <div class="box">
                      <input id="simetris" type="checkbox" v-model="check">
                      <span class="check"></span>
                      <label for="simetris">Simetris ?</label>
                    </div>
                  </CCol>
                  <CCol sm="">
                    <div class="box">
                      <input id="menonjol" type="checkbox" v-model="check">
                      <span class="check"></span>
                      <label for="menonjol">puting menonjol ?</label>
                    </div>
                  </CCol>
                </CRow>
                <div class="card">
                  <div class="card-header">Extrimis Atas Bawah</div>
                  <div class="card-body">
                    <CRow>
                      <CCol sm="3">
                        <label class="typo__label">Refleks</label>
                        <multiselect deselect-label="" v-model="objektif.pemeriksaanFisik.extremitasAtasBawah.reflex"
                          selected-label="Dipilih" :searchable="false" selectLabel="Klik Untuk Memilih"
                          placeholder="Pilih List Berikut" label="" track-by="" :options="optRefleks" :multiple="false">
                        </multiselect>

                      </CCol>
                      <CCol sm="2">
                        <div class="box">
                          <input id="oedem" type="checkbox"
                            v-model="objektif.pemeriksaanFisik.extremitasAtasBawah.oedem">
                          <span class="check"></span>
                          <label for="oedem">Oedem ?</label>
                        </div>
                      </CCol>
                      <CCol sm="2">
                        <div class="box">
                          <input id="verices" type="checkbox"
                            v-model="objektif.pemeriksaanFisik.extremitasAtasBawah.verices">
                          <span class="check"></span>
                          <label for="verices">Verices ?</label>
                        </div>
                      </CCol>
                      <CCol sm="4">
                        <div class="box">
                          <input id="sendi" type="checkbox"
                            v-model="objektif.pemeriksaanFisik.extremitasAtasBawah.kekuatanOtotSendiNormal">
                          <span class="check"></span>
                          <label for="sendi">Otot Sendi Normal ?</label>
                        </div>
                      </CCol>

                    </CRow>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">Abdomen</div>
                  <div class="card-body">
                    <CRow>
                      <CCol sm="5">
                        <CInput v-model="objektif.pemeriksaanFisik.abodmen.tinggiFundusUteri" type="text"
                          label="Tinggi Fundus Uteri" />
                      </CCol>
                      <CCol sm="4">
                        <div class="box">
                          <input id="striae" type="checkbox"
                            v-model="objektif.pemeriksaanFisik.abodmen.striaeGravidarum">
                          <span class="check"></span>
                          <label for="striae">Striae Gravidarum ?</label>
                        </div>
                      </CCol>
                      <CCol sm="3">
                        <div class="box">
                          <input id="luka" type="checkbox" v-model="objektif.pemeriksaanFisik.abodmen.bekasLukaOperasi">
                          <span class="check"></span>
                          <label for="Luka">Bekas Luka Operasi ?</label>
                        </div>
                      </CCol>

                    </CRow>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">Palpasi</div>
                  <div class="card-body">
                    <CRow>
                      <CCol sm="6">
                        <CTextarea v-model="objektif.pemeriksaanFisik.palpasi.leopold1" type="text" label="leopold 1" />
                      </CCol>
                      <CCol sm="6">
                        <CTextarea v-model="objektif.pemeriksaanFisik.palpasi.leopold2" type="text" label="leopold 2" />
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol sm="6">
                        <CTextarea v-model="objektif.pemeriksaanFisik.palpasi.leopold3" type="text" label="Leopold 3" />
                      </CCol>
                      <CCol sm="6">
                        <CTextarea v-model="objektif.pemeriksaanFisik.palpasi.leopold4" type="text"
                          label="leopold 4 " />
                      </CCol>
                    </CRow>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">Palpasi-HIS</div>
                  <div class="card-body">
                    <CRow>
                      <CCol sm="4">
                        <CTextarea v-model="objektif.pemeriksaanFisik.palpasi.his.jumlahPerSepuluMenit" type="text"
                          label="Jumlah (n/10 menit)" />
                      </CCol>
                      <CCol sm="4">
                        <CTextarea v-model="objektif.pemeriksaanFisik.palpasi.his.durasi" type="text"
                          label="Durasi (detik)" />
                      </CCol>
                      <CCol sm="4">
                        <div class="box">
                          <input id="intensitas" type="checkbox"
                            v-model="objektif.pemeriksaanFisik.palpasi.his.intensitasKuat">
                          <span class="check"></span>
                          <label for="intensitas">intensitas Kuat ?</label>
                        </div>
                      </CCol>
                    </CRow>

                  </div>
                </div>
                <div class="card">
                  <div class="card-header">Auskultasi</div>
                  <div class="card-body">
                    <CRow>
                      <CCol sm="4">
                        <CInput v-model="objektif.pemeriksaanFisik.auskultasi.denyutJantungJanin.jumlah" type="text"
                          label="Jumlah" />
                      </CCol>
                      <CCol sm="4">
                        <CInput v-model="objektif.pemeriksaanFisik.auskultasi.taksiranBeratJanin" type="number" step="1"
                          min="1" label="Taksirab Berat janin (gr)" />
                      </CCol>
                      <CCol sm="4">
                        <div class="box">
                          <input id="ddj" type="checkbox"
                            v-model="objektif.pemeriksaanFisik.auskultasi.denyutJantungJanin.reguler">
                          <span class="check"></span>
                          <label for="ddj">DDJ reguler ?</label>
                        </div>
                      </CCol>
                    </CRow>

                  </div>
                </div>
                <div class="card">
                  <div class="card-header">Gynecolog</div>
                  <div class="card-body">
                    <CRow>
                      <CCol sm="6">
                        <CTextarea v-model="objektif.pemeriksaanFisik.gynecolog.inspekulo" type="text"
                          label="Inspekulo" />
                      </CCol>

                      <CCol sm="4">
                        <label class="typo__label">Keputihan</label>
                        <multiselect deselect-label=""
                          v-model="objektif.pemeriksaanFisik.gynecolog.pengeluaranParvaginam.keputihan"
                          selected-label="Dipilih" :searchable="false" selectLabel="Klik Untuk Memilih"
                          placeholder="Pilih List Berikut" label="" track-by="" :options="optKeputihan"
                          :multiple="false">
                        </multiselect>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol sm="2">
                        <div class="box">
                          <input id="bartholini" type="checkbox"
                            v-model="objektif.pemeriksaanFisik.gynecolog.pembengkakanKelenjarBartholini">
                          <span class="check"></span>
                          <label for="bartholini">Pembengkakan Bartholini ?</label>
                        </div>
                      </CCol>
                      <CCol sm="2">
                        <div class="box">
                          <input id="bau" type="checkbox"
                            v-model="objektif.pemeriksaanFisik.gynecolog.pengeluaranParvaginam.bau">
                          <span class="check"></span>
                          <label for="bau">Berbau ?</label>
                        </div>
                      </CCol>
                      <CCol sm="2">
                        <div class="box">
                          <input id="darah" type="checkbox"
                            v-model="objektif.pemeriksaanFisik.gynecolog.pengeluaranParvaginam.darah">
                          <span class="check"></span>
                          <label for="darah">Berdarah ?</label>
                        </div>
                      </CCol>
                    </CRow>

                  </div>
                </div>

                <div class="card">
                  <div class="card-header">Nifas</div>
                  <div class="card-body">
                    <CRow>
                      <CCol sm="">
                        <CInput v-model="objektif.pemeriksaanFisik.nifas.tinggiFundusUteri" type="number" step="1" min="1"
                          label="Tinggi Fundus" />
                      </CCol>
                      <CCol sm="">
                        <label class="typo__label">Lochea</label>
                        <multiselect deselect-label=""
                          v-model="objektif.pemeriksaanFisik.nifas.lochea"
                          selected-label="Dipilih" :searchable="false" selectLabel="Klik Untuk Memilih"
                          placeholder="Pilih List Berikut" label="" track-by="" :options="optLochea"
                          :multiple="false">
                        </multiselect>
                      </CCol>
                     <CCol sm="">
                        <CTextarea v-model="objektif.pemeriksaanFisik.nifas.lukaPerineum" type="text"
                          label="Luka Perineum" />
                      </CCol>
                      <CCol sm="">
                        <div class="box">
                          <input id="uterus" type="checkbox"
                            v-model="objektif.pemeriksaanFisik.nifas.kontraksiUterusBaik">
                          <span class="check"></span>
                          <label for="uterus">DDJ reguler ?</label>
                        </div>
                      </CCol>
                    </CRow>

                  </div>
                </div>
                 <div class="card">
                  <div class="card-header">Pemeriksaan Dalam</div>
                  <div class="card-body">
                    <CRow>
                      <CCol sm="">
                        <CTextarea v-model="objektif.pemeriksaanFisik.pemeriksaanDalam.vulvaVagina" type="number" 
                          label="Vulva Vagina" />
                      </CCol>
                      <CCol sm="">
                         <CTextarea v-model="objektif.pemeriksaanFisik.pemeriksaanDalam.portio" type="number" 
                          label="Portio" />
                      </CCol>  
                      <CCol sm="">
                        <CTextarea v-model="objektif.pemeriksaanFisik.pemeriksaanDalam.ketuban" type="number" 
                          label="Ketuban" />
                      </CCol>
                       
                    </CRow>
                    <CRow>
                      <CCol sm="">
                         <CTextarea v-model="objektif.pemeriksaanFisik.pemeriksaanDalam.pembukaan" type="number" 
                          label="Pembukaan" />
                      </CCol>  
                      <CCol sm="">
                        <CTextarea v-model="objektif.pemeriksaanFisik.pemeriksaanDalam.presentaseFetus" type="number" 
                          label="Presentase Fetus" />
                      </CCol>
                      <CCol sm="">
                         <CTextarea v-model="objektif.pemeriksaanFisik.pemeriksaanDalam.hodgeStation" type="number" 
                          label="Hodge Station" />
                      </CCol> 
                    </CRow>
                  </div>
                </div>
              </div>
            </div>
             <button class="btn btn-primary">Submit</button>
           </form>

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
    data() {
      return {
        check: Boolean,
        test: 'test',
        idRekamMedis: this.$route.params.idRekamMedis,
        optUmum: ['Tampak Tidak Sakit', 'Sakit ringan', 'Sakit Sedang', 'Sakit Berat'],
        optKesadaran: ['Compos Mentis', 'APATIS', 'SOMOLEN', 'SOPOR', 'COMA'],
        optRefleks: ['Normal', 'Hipo', 'Hyper'],
        optKeputihan: ['Bening', 'Hijau', 'Kuning'],
        optLochea: ['RUBRA', 'SANGUINOLENTA', 'SEROSA', 'ALBA', 'PURULENTA'],

        objektif: {
          keadaanUmum: undefined,
          kesadaran: undefined,
          tandaVital: {
            tekananDarah: {
              sistolik: undefined,
              diastolik: undefined,
            },
            nadiPerMenit: undefined,
            napasPermenit: undefined,
            suhuTubuh: undefined
          },
          pemeriksaanFisik: {
            extremitasAtasBawah: {
              oedem: undefined,
              kekuatanOtotSendiNormal: undefined,
              verices: undefined,
              reflex: undefined
            },
            abodmen: {
              striaeGravidarum: undefined,
              bekasLukaOperasi: undefined,
              tinggiFundusUteri: undefined
            },
            palpasi: {
              leopold1: undefined,
              leopold2: undefined,
              leopold3: undefined,
              leopold4: undefined,
              his: {
                intensitasKuat: undefined,
                jumlahPerSepuluMenit: undefined,
                durasi: undefined
              }
            },
            auskultasi: {
              denyutJantungJanin: {
                jumlah: undefined,
                reguler: undefined
              },
              taksiranBeratJanin: undefined
            },
            gynecolog: {
              pengeluaranParvaginam: {
                keputihan: undefined,
                bau: undefined,
                darah: undefined
              },
              pembengkakanKelenjarBartholini: undefined,
              inspekulo: undefined
            },
            nifas: {
              tinggiFundusUteri: undefined,
              kontraksiUterusBaik: undefined,
              lochea: undefined,
              lukaPerineum: undefined
            },
            pemeriksaanDalam : {
              vulvaVagina : undefined,
              portio : undefined,
              ketuban : undefined,
              pembukaan : undefined,
              presentaseFetus : undefined,
              hodgeStation : undefined
            }
          }
        }

      }
    },
    methods : {
      onSubmit (){
        console.log('update data ya !!!')
      }
    }
  }
</script>

<style>

</style>