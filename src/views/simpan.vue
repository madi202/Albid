<template>
    <div>
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>

                        <strong>Assesmen Awal Subjektif</strong>
                    </CCardHeader>
                    <CCardBody>
                        <form>

                            <h5>Paritas</h5>
                            <CRow>
                                <CCol sm="4">
                                    <CInput v-model="subjektif.paritas.partus" type="number" min="0" label="Partus" />
                                </CCol>
                                <CCol sm="4">
                                    <CInput v-model="subjektif.paritas.abortus" type="number" min="0" label="Abortus" />
                                </CCol>
                                <CCol sm="4">
                                    <CInput required :value="gravida" type="text" label="Abortus" />
                                </CCol>

                            </CRow>
                            <hr>
                            <CRow>
                                <CCol>
                                    <CTextarea sm="12" type="text" label="Anamnesis"></CTextarea>
                                </CCol>
                            </CRow>
                            <hr>

                            <h5>Riwayat Penyakit</h5>
                            <CRow>
                                <CCol sm="4">
                                    <div class="card">
                                        <div class="card-header">Riwayat Penyakit Sekarang</div>
                                        <div class="card-body">
                                            <template>
                                                <div v-for="(item,index) in riwayatPenyakit.sekarang" :key="index">
                                                    <div class="row">
                                                        <div class="col">
                                                            <span v-if="editIndex !== index">{{ item }}</span>
                                                            <span v-else>
                                                                <CInput type="text" v-model="temp" />
                                                            </span>

                                                        </div>
                                                        <div class="col">
                                                            <span v-if="editIndex !== index">
                                                                <CButtonGroup size="sm" class="mx-1">
                                                                    <CButton @click="edit(index,isNow = true)"
                                                                        color="secondary">Edit
                                                                    </CButton>
                                                                    <CButton @click="remove(index,isNow=true)"
                                                                        color="danger">
                                                                        Remove
                                                                    </CButton>
                                                                </CButtonGroup>
                                                            </span>
                                                            <span v-else>
                                                                <CButtonGroup size="sm" class="mx-1">
                                                                    <CButton @click="cancel(index)" color="secondary">
                                                                        Cancel
                                                                    </CButton>
                                                                    <CButton @click="save(index)" color="success">Save
                                                                    </CButton>
                                                                </CButtonGroup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button v-show="!editIndex && !editFam" v-on:click="add(isNow=true)"
                                                    class="btn btn-sm btn-secondary">Tambah Data</button>
                                            </template>
                                        </div>
                                    </div>
                                </CCol>

                                <CCol sm="4">
                                    <div class="card">
                                        <div class="card-header">Riwayat Penyakit Dahulu</div>
                                        <div class="card-body">
                                            <template>
                                                <div v-for="(item,index) in riwayatPenyakit.dahulu" :key="index">
                                                    <div class="row">
                                                        <div class="col">
                                                            <span v-if="editOld !== index">{{ item }}</span>
                                                            <span v-else>
                                                                <CInput type="text" v-model="temp" />
                                                            </span>

                                                        </div>
                                                        <div class="col">
                                                            <span v-if="editOld !== index">
                                                                <CButtonGroup size="sm" class="mx-1">
                                                                    <CButton @click="edit(index,isOld=true)"
                                                                        color="secondary">Edit
                                                                    </CButton>
                                                                    <CButton @click="remove(index,isOld=true)"
                                                                        color="danger">
                                                                        Remove
                                                                    </CButton>
                                                                </CButtonGroup>
                                                            </span>
                                                            <span v-else>
                                                                <CButtonGroup size="sm" class="mx-1">
                                                                    <CButton @click="cancel(index)" color="secondary">
                                                                        Cancel
                                                                    </CButton>
                                                                    <CButton @click="save(index)" color="success">Save
                                                                    </CButton>
                                                                </CButtonGroup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button v-show="!editOld" @click="add(isOld=true)"
                                                    class="btn btn-sm btn-secondary">Tambah
                                                    Data</button>
                                            </template>
                                        </div>
                                    </div>
                                </CCol>
                                <CCol sm="4">
                                    <div class="card">
                                        <div class="card-header">Riwayat Penyakit Keluarga</div>
                                        <div class="card-body">
                                            <template>
                                                <div v-if="riwayatPenyakit.keluarga">
                                                    <div v-for="(item,index) in riwayatPenyakit.keluarga"
                                                        :key="item.ket">
                                                        <div class="row">
                                                            <div class="col">
                                                                <span v-if="editFam !== index">{{ item }}</span>
                                                                <span v-else>
                                                                    <CInput type="text" v-model="temp" />
                                                                </span>

                                                            </div>
                                                            <div class="col">
                                                                <span v-if="editFam!== index">
                                                                    <CButtonGroup size="sm" class="mx-1">
                                                                        <CButton @click="edit(index,isFam=true)"
                                                                            color="secondary">Edit
                                                                        </CButton>
                                                                        <CButton @click="remove(index,isFam=true)"
                                                                            color="danger">
                                                                            Remove
                                                                        </CButton>
                                                                    </CButtonGroup>
                                                                </span>
                                                                <span v-else>
                                                                    <CButtonGroup size="sm" class="mx-1">
                                                                        <CButton @click="cancel(index)"
                                                                            color="secondary">
                                                                            Cancel
                                                                        </CButton>
                                                                        <CButton @click="save(index)" color="success">
                                                                            Save
                                                                        </CButton>
                                                                    </CButtonGroup>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button v-show="!editFam" @click="add(isFam=true)"
                                                        class="btn btn-sm btn-secondary">Tambah
                                                        Data</button>
                                                </div>
                                                <div v-else>no Data</div>

                                            </template>
                                        </div>
                                    </div>
                                </CCol>

                            </CRow>
                            <hr>
                            <h5>Riwayat Menstruasi</h5>
                            <CRow>
                                <CCol sm="">
                                    <CInput type="date" label="Haid Pertama Haid terakhir" />
                                </CCol>
                                <CCol sm="">
                                    <CInput sm="4" type="date" label="Hari terakhir Haid " />
                                </CCol>
                                <CCol sm="">
                                    <CInput type="text" label="Jumlah Ganti Pembalut" />
                                </CCol>
                                <CCol sm="">
                                    <CInput type="text" label="Siklus Menstruasi" />
                                </CCol>


                            </CRow>
                            <hr>
                            <h5>Pergerakan Janin Pertama</h5>
                            <CRow>
                                <CCol sm="">
                                    <CInput type="date" label="Tanggal Pergerakan" />
                                </CCol>
                                <CCol sm="">
                                    <CInput type="text" label="Keterangan" />
                                </CCol>
                            </CRow>
                            <hr>
                            <h5>Riwayat Perkawinan</h5>
                            <CRow>
                                <CCol sm="">
                                    <CInput type="text" label="Jumlah Perkawinan" />
                                </CCol>
                                <CCol sm="">
                                    <CInput type="teks" label="Keterangan" />
                                </CCol>
                                <CCol sm="">
                                    <CInput type="text" label="Usia Laki-Laki" />
                                </CCol>
                                <CCol sm="">
                                    <CInput type="text" label="Usia Perempuan" />
                                </CCol>
                            </CRow>
                            <hr>
                            <CRow>
                                <CCol sm="6">
                                    <div class="card">
                                        <div class="card-header">Riwayat Kontrasepsi</div>
                                        <div class="card-body">

                                            <div>
                                                <!-- <label class="typo__label">Riwayat Kontrasepsi</label> -->
                                                <multiselect v-model="subjektif.riwayatKontrasepsi"
                                                    tag-placeholder="Pilih" deselect-label="Hapus Pilihan"
                                                    selected-label="Dipilih" selectLabel="Klik Untuk Memilih"
                                                    placeholder="Pilih List Berikut" label="" track-by=""
                                                    :options="optKB" :multiple="true" :taggable="true">
                                                </multiselect>
                                            </div>

                                        </div>
                                    </div>
                                </CCol>

                                <CCol sm="6">
                                    <div class="card">
                                        <div class="card-header">Riwayat Gynecolog</div>
                                        <div class="card-body">

                                            <div>
                                                <!-- <label class="typo__label"> Riwayat Gynecolog </label> -->
                                                <multiselect v-model="subjektif.riwayatGynecolog"
                                                    tag-placeholder="Pilih" deselect-label="Hapus Pilihan"
                                                    selected-label="Dipilih" selectLabel="Klik Untuk Memilih"
                                                    placeholder="Pilih List Berikut" label="" track-by=""
                                                    :options="optGyne" :multiple="true" :taggable="true">
                                                </multiselect>
                                            </div>

                                        </div>
                                    </div>
                                </CCol>
                            </CRow>
                            <hr>
                            <h5>Riwayat Obstetri</h5>
                            <CRow>

                            </CRow>
                            <hr>
                            <h5>Nutrisi</h5>
                            <CRow>

                            </CRow>
                            <hr>
                            <h5>Edukasi</h5>
                            <CRow>
                                <CCol sm="6">
                                    <div class="card">
                                        <div class="card-header"></div>
                                        <div class="card-body">

                                            <div>
                                                <label class="typo__label">Subjek</label>
                                                <multiselect v-model="subjektif.edukasi.subjek"
                                                    tag-placeholder="Add this as new tag" deselect-label="Hapus Pilihan"
                                                    selected-label="Dipilih" selectLabel="Klik Untuk Memilih"
                                                    placeholder="Pilih List Berikut" label="" track-by=""
                                                    :options="optSubjek" :multiple="true" :taggable="true">
                                                </multiselect>
                                            </div>

                                        </div>
                                    </div>
                                </CCol>
                                <CCol sm="6">
                                    <div class="card">
                                        <div class="card-header"></div>
                                        <div class="card-body">

                                            <div>
                                                <label class="typo__label">Materi Yang Diberikan</label>
                                                <multiselect v-model="subjektif.edukasi.materi"
                                                    tag-placeholder="Add this as new tag" deselect-label="Hapus Pilihan"
                                                    selected-label="Dipilih" selectLabel="Klik Untuk Memilih"
                                                    placeholder="Pilih List Berikut" label="" track-by=""
                                                    :options="optMateri" :multiple="true" :taggable="true"
                                                    @tag="addTag">
                                                </multiselect>
                                            </div>

                                        </div>
                                    </div>
                                </CCol>
                            </CRow>
                            <hr>
                            <!-- submit data -->
                            <CRow>
                                <CCol col="6" class="text-left">
                                    <CButton type="submit" color="primary" class="px-4" v-on:click="updateData()">submit
                                    </CButton>
                                </CCol>

                            </CRow>
                        </form>


                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>

        <!-- {{test3}} -->
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
            Object.assign(this.riwayatPenyakit, this.dummyPenyakit)
        },
        data() {
            return {
                //dummy
                test1: null,

                optGyne: ['INFERTITLITAS', 'INFEKSI VIRUS', 'PMS', 'CERVICITIS AKUT', 'CERVICITIS KRONIS', 'TIDAK ADA'],
                optKB: ['Suntik', 'IMPLAN', "IUD", 'PIL', 'Lainnya', 'Tidak Ada'],
                optSubjek: ['PASIEN', 'KELUARGA PASIEN', 'TEMAN PASIEN', 'LAINNYA'],
                optMateri: ['DIAGNOSA PENYAKIT', 'HASIL PEMERIKSAAN PENUNJANG', 'TERAPI PENGOBATAN',
                    'TERAPI PENGOBATAN', 'RENCANA TINDAKAN', 'PEMBERIAN VAKSIN', 'LAINNYA'
                ],
                temp: null,
                dummyPenyakit: {
                    sekarang: ['asma', 'stress'],
                    dahulu: ['ginjal', 'diabetes'],
                    keluarga: []
                },




                //riwayat penyakit
                originalData: null,
                editIndex: null,
                isNow: null,
                editOld: null,
                isOld: null,
                editFam: null,
                isFam: null,
                riwayatPenyakit: {
                    sekarang: undefined,
                    dahulu: undefined,
                    kealurga: undefined
                },
                subjektif: {
                    paritas: {
                        partus: 0,
                        abortus: 0,
                        gravida: 0,
                    },
                    riwayatPenyakit: {
                        sekarang: undefined,
                        dahulu: undefined,
                        kealurga: undefined
                    },
                    riwayatKontrasepsi: undefined,
                    riwayatGynecolog: undefined,
                    edukasi: {
                        subjek: undefined,
                        materi: undefined,
                    }
                }
            }
        },


        computed: {
            gravida: function () {
                let gravid = parseInt(this.subjektif.paritas.partus) + parseInt(this.subjektif.paritas.abortus) + 1;
                this.subjektif.paritas.gravida = gravid
                return gravid;
            }
        },
        methods: {
            addTag(newTag) {
                const tag = {
                    name: newTag,
                    code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
                }
                // this.options.push(tag)
                // this.value.push(tag)
            },
            updateData() {
                let data = {
                    riwayatKontrasepsi: this.subjektif.riwayatKontrasepsi
                }
                console.log(data)
            },
           
            insertAt(array, index, value) {
                array.splice(index, index + 1, value);
            }
        }

    }
</script>

<style>

</style>