<template>
    <div>

        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>

                        <strong>Assesmen Awal Subjektif</strong>
                    </CCardHeader>
                    <CCardBody>
                        <form @submit.prevent="updateData">

                            <h5>Paritas</h5>
                            <CRow>
                                
                                <CCol sm="4">
                                    <CInput type="text" label="Partus" />
                                </CCol>
                                <CCol sm="4">
                                    <CInput v-model="subjektif.paritas.abortus" type="text" label="Abortus" />
                                </CCol>
                                <CCol sm="4">
                                    <CInput readonly :value="gravida" type="text" label="Gravida" />
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol sm="12">
                                    <CTextarea v-model="subjektif.anamnesis" type="text" label="Anamnesis" />
                                </CCol>
                            </CRow>

                           <div class="riwayatPenyakit">

                           </div>
                            <div class="riwayatmenstruasi">
                                <CRow>
                                <CCol sm="3">
                                    <CInput  v-model="subjektif.riwayatMenstruasi.hariPertama" type="date" label="Hari Pertama Menstruasi" />
                                </CCol>
                                <CCol sm="3">
                                    <CInput v-model="subjektif.riwayatMenstruasi.haidTerakhir" type="date" label="hari Terakhir Menstruasi" />
                                </CCol>
                                <CCol sm="3">
                                    <CInput v-model="subjektif.riwayatMenstruasi.jumlahGantiPembalut" type="text" label="Jumlah Ganti Pembalut" />
                                </CCol>
                                 <CCol sm="3">
                                    <CInput v-model="subjektif.riwayatMenstruasi.siklus" type="text" label="Siklus Menstruasi" />
                                </CCol>
                            </CRow>
                           </div>

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
                idRekamMedis: this.$route.params.idRekamMedis,
                items: [{
                        code: '111',
                        name: 'Cuka',
                        description: 'Cuka mahal',
                        qty: 1,
                        unit: null,
                        price: 3500,
                        discount: 10,
                    },
                    {
                        code: '222',
                        name: 'Kubis',
                        description: 'Kubis enak',
                        qty: 2,
                        unit: null,
                        price: 5000,
                        discount: 2,
                    },
                ],
                obstetri: {
                    tanggalPersalinan: undefined,
                    termpatPersalinan: undefined,
                    usiaKehamilan: {
                        bulan: undefined,
                        hari: undefined
                    },
                    metodePersalinan: undefined,
                    penolongPersalinan: undefined,
                    jenisKelaminAnak: undefined,
                    beratbadanAnak: undefined,
                    asiEkslusif: undefined,
                },


                subjektif: {
                    paritas: {
                        gravida: 0,
                        partus: 0,
                        abortus: 0,
                    },
                    anamnesis: undefined,
                    riwayatpenyakit: {
                        sekarang: [],
                        dahulu: [],
                        Keluarga: []
                    },
                    riwayatMenstruasi: {
                        haidTerakhir: {
                            hariPertama: undefined,
                            hariTerakhir: undefined
                        },
                        menorrhagia: undefined,
                        metrorrhagia: undefined,
                        jumlahGantiPembalut: undefined,
                        dismenorrhoe: undefined,
                        siklus: undefined,
                        teratur: undefined
                    },
                    taksiranPersalinan: undefined,
                    pergerakanJaninPertama: {
                        tanggal: undefined,
                        keternagan: undefined,
                    },
                    riwayatPerkawinan: {
                        jumlahPerkawinan: undefined,
                        tahunPerkawinan: undefined,
                        usiaLakiLaki: undefined,
                        usiaPerempuan: undefined,
                    },
                    riwayatKontrasepsi: [],
                    riwayatGynecolog: [],
                    riwayatObstetri: [],
                    resikoCedera: undefined,
                    nutrisi: {
                        tinggiBadan: undefined,
                        beratbadan: undefined,
                        bmi: undefined,
                    },
                    fungsional: {
                        penggunaanAlatBantu: undefined,
                        prothesis: undefined,
                        cacatTubuh: undefined,
                        adlMandiri: undefined,
                        jatuhTigaBulanTerakhir: undefined,
                    },
                    edukasi: {
                        subjek: [],
                        durasi: {
                            jam: undefined,
                            menit: undefined,
                        },
                        materi: [],
                        reedukasi: undefined,
                    }

                }
            }
        },
         computed: {
            gravida: function () {
                let gravid = parseInt(this.subjektif.paritas.partus) + parseInt(this.subjektif.paritas.abortus) + 1;
                this.subjektif.paritas.gravida = gravid
                return gravid;
            },
        },
        methods: {
            updateData() {

                let data = {
                    paritas: {
                        geravida: this.subjektif.paritas.gravida,
                        partus: this.subjektif.paritas.partus,
                        abortus: this.subjektif.paritas.abortus,
                    },
                    anamnesis: this.subjektif.anamnesis,
                    riwayatpenyakit: {
                        sekarang: [],
                        dahulu: [],
                        Keluarga: []
                    },
                    riwayatMenstruasi: {
                        haidTerakhir: {
                            hariPertama: undefined,
                            hariTerakhir: undefined
                        },
                        menorrhagia: undefined,
                        metrorrhagia: undefined,
                        jumlahGantiPembalut: undefined,
                        dismenorrhoe: undefined,
                        siklus: undefined,
                        teratur: undefined
                    },
                    taksiranPersalinan: undefined,
                    pergerakanJaninPertama: {
                        tanggal: undefined,
                        keternagan: undefined,
                    },
                    riwayatPerkawinan: {
                        jumlahPerkawinan: undefined,
                        tahunPerkawinan: undefined,
                        usiaLakiLaki: undefined,
                        usiaPerempuan: undefined,
                    },
                    riwayatKontrasepsi: [],
                    riwayatGynecolog: [],
                    riwayatObstetri: [],
                    resikoCedera: undefined,
                    nutrisi: {
                        tinggiBadan: undefined,
                        beratbadan: undefined,
                        bmi: undefined,
                    },
                    fungsional: {
                        penggunaanAlatBantu: undefined,
                        prothesis: undefined,
                        cacatTubuh: undefined,
                        adlMandiri: undefined,
                        jatuhTigaBulanTerakhir: undefined,
                    },
                    edukasi: {
                        subjek: [],
                        durasi: {
                            jam: undefined,
                            menit: undefined,
                        },
                        materi: [],
                        reedukasi: undefined,
                    }
                }
                console.log('berhasil')
            }
        },


    }
</script>

<style>

</style>