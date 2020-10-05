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
                                    <CInput required :value="gravida" type="" label="Gravida" readonly />
                                </CCol>

                            </CRow>
                            <hr>
                            <CRow>
                                <CCol sm="6">
                                    <CTextarea v-model="subjektif.anamnesis" sm="12" type="text" label="Anamnesis">
                                    </CTextarea>
                                </CCol>
                                <CCol sm="6">
                                    <CTextarea v-model="subjektif.riwayatAlergi" sm="12" type="text"
                                        label="Riwayat Alergi"></CTextarea>
                                </CCol>
                            </CRow>
                            <hr>

                            <h5>Riwayat Penyakit</h5>
                            <CRow>
                                <CCol sm="4">
                                    <div class="card">
                                        <div class="card-header">Penyakit Sekarang</div>
                                        <div class="card-body">
                                            <div>
                                                <!-- <label class="typo__label">Penyakit Sekarang</label> -->
                                                <multiselect v-model="subjektif.riwayatPenyakit.sekarang"
                                                    tag-placeholder="Tambahkan Pilihan" deselect-label="Hapus Pilihan"
                                                    selected-label="Dipilih" selectLabel="Klik Untuk Memilih"
                                                    placeholder="Pilih atau Tambahkan Pilihan" label="" track-by=""
                                                    :options="optPenyakit" :multiple="true" :taggable="true"
                                                    @tag="addListPenyakit">
                                                </multiselect>
                                            </div>

                                        </div>
                                    </div>
                                </CCol>

                                <CCol sm="4">
                                    <div class="card">
                                        <div class="card-header">Penyakit Terdahulu</div>
                                        <div class="card-body">
                                            <div>
                                                <!-- <label class="typo__label">Penyakit Terdahulu</label> -->
                                                <multiselect v-model="subjektif.riwayatPenyakit.dahulu"
                                                    tag-placeholder="Tambahkan Pilihan" deselect-label="Hapus Pilihan"
                                                    selected-label="Dipilih" selectLabel="Klik Untuk Memilih"
                                                    placeholder="Pilih atau Tambahkan Pilihan" label="" track-by=""
                                                    :options="optPenyakit" :multiple="true" :taggable="true"
                                                    @tag="addListPenyakit">
                                                </multiselect>
                                            </div>

                                        </div>
                                    </div>
                                </CCol>
                                <CCol sm="4">
                                    <div class="card">
                                        <div class="card-header">Penyakit Keluarga</div>
                                        <div class="card-body">
                                            <div>
                                                <!-- <label class="typo__label">Penyakit Keluarga</label> -->
                                                <multiselect v-model="subjektif.riwayatPenyakit.keluarga"
                                                    tag-placeholder="Tambahkan Pilihan" deselect-label="Hapus Pilihan"
                                                    selected-label="Dipilih" selectLabel="Klik Untuk Memilih"
                                                    placeholder="Pilih atau Tambahkan Pilihan" label="" track-by=""
                                                    :options="optPenyakit" :multiple="true" :taggable="true"
                                                    @tag="addListPenyakit">
                                                </multiselect>
                                            </div>

                                        </div>
                                    </div>
                                </CCol>

                            </CRow>
                            <hr>
                            <!-- riwayat menstruasi -->
                            <div class="card">
                                <div class="card-header">Riwayat Menstruasi</div>
                                <div class="card-body">
                                    <CRow>
                                        <CCol sm="">
                                            <CInput v-model="subjektif.riwayatMenstruasi.haidTerakhir.hariPertama"
                                                type="date" label="Haid Pertama Haid terakhir" />
                                        </CCol>
                                        <CCol sm="">
                                            <CInput v-model="subjektif.riwayatMenstruasi.haidTerakhir.hariTerakhir"
                                                sm="4" type="date" label="Hari terakhir Haid " />
                                        </CCol>
                                        <CCol sm="">
                                            <CInput v-model="subjektif.riwayatMenstruasi.jumlahGantiPembalut"
                                                type="text" label="Jumlah Ganti Pembalut" />
                                        </CCol>
                                        <CCol sm="">
                                            <CInput v-model="subjektif.riwayatMenstruasi.siklus" type="text"
                                                label="Siklus Menstruasi" />
                                        </CCol>
                                    </CRow>
                                    <CRow>
                                        <CCol sm="">
                                            <div class="box">
                                                <input id="Menorrhagia" type="checkbox"
                                                    v-model="subjektif.riwayatMenstruasi.menorrhagia">
                                                <span class="check"></span>
                                                <label for="Menorrhagia">Menorhagia</label>
                                            </div>
                                        </CCol>
                                        <CCol sm="">
                                            <div class="box">
                                                <input id="Metrorrhagia" type="checkbox"
                                                    v-model="subjektif.riwayatMenstruasi.metrorrhagia">
                                                <span class="check"></span>
                                                <label for="Metrorrhagia">Metrorrhagia</label>
                                            </div>
                                        </CCol>
                                        <CCol sm="">
                                            <div class="box">
                                                <input id="dismenorrhoe" type="checkbox"
                                                    v-model="subjektif.riwayatMenstruasi.dismenorrhoe">
                                                <span class="check"></span>
                                                <label for="dismenorrhoe">Dismenorrhoe</label>
                                            </div>
                                        </CCol>
                                        <CCol sm="">
                                            <div class="box">
                                                <input id="teratur" type="checkbox"
                                                    v-model="subjektif.riwayatMenstruasi.teratur">
                                                <span class="check"></span>
                                                <label for="teratur">Siklus Teratur.</label>
                                            </div>
                                        </CCol>
                                    </CRow>
                                    <CRow>
                                        <CCol sm="4">
                                            <CInput type="date" label="Perkiraan Kelahiran"
                                                v-model="subjektif.taksiranPersalinan" />
                                        </CCol>
                                    </CRow>
                                </div>
                            </div>
                            <hr>
                            <h5>Pergerakan Janin Pertama</h5>
                            <CRow>
                                <CCol sm="">
                                    <CInput v-model="subjektif.pergerakanJaninPertama.tanggal" type="date"
                                        label="Tanggal Pergerakan" />
                                </CCol>
                                <CCol sm="">
                                    <CInput v-model="subjektif.pergerakanJaninPertama.keterangan" type="text"
                                        label="Keterangan" />
                                </CCol>
                            </CRow>
                            <hr>
                            <h5>Riwayat Perkawinan</h5>
                            <CRow>
                                <CCol sm="">
                                    <CInput v-model="subjektif.riwayatPerkawinan.jumlahPerkawinan" type="number"
                                        label="Jumlah Perkawinan" />
                                </CCol>
                                <CCol sm="">
                                    <CInput v-model="subjektif.riwayatPerkawinan.tahunPerkawinan" type="date"
                                        label="Tanggal Perkawinan" />
                                </CCol>
                                <CCol sm="">
                                    <CInput v-model="subjektif.riwayatPerkawinan.usiaLakiLaki" type="number"
                                        label="Usia Laki-Laki" />
                                </CCol>
                                <CCol sm="">
                                    <CInput v-model="subjektif.riwayatPerkawinan.usiaPerempuan" type="number"
                                        label="Usia Perempuan" />
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
                                                    :searchable="false" selected-label="Dipilih"
                                                    selectLabel="Klik Untuk Memilih" placeholder="Pilih List Berikut"
                                                    label="" track-by="" :options="optKB" :multiple="true"
                                                    :taggable="false">
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
                                                    :searchable="false" selected-label="Dipilih"
                                                    selectLabel="Klik Untuk Memilih" placeholder="Pilih List Berikut"
                                                    label="" track-by="" :options="optGyne" :multiple="true"
                                                    :taggable="false">
                                                </multiselect>
                                            </div>

                                        </div>
                                    </div>
                                </CCol>
                            </CRow>
                            <hr>
                            <!-- <h5>Riwayat Obstetri</h5> -->
                            <div class="card">
                                <div class="card-header">Riwayat Obstetri</div>
                                <div class="card-body">
                                    <table class="table table-bordered table-responsive">
                                        <thead class="thead-light">
                                            <tr style="center">
                                                <th width="">#</th>
                                                <th width="15%">Tgl Persalinan</th>
                                                <th width="15%">Tempat Persalinan</th>
                                                <th width="15%">Usia Kehamilan</th>
                                                <th width="15%">Metode</th>
                                                <th width="15%">Penolong</th>
                                                <th width="15%">JK</th>
                                                <th width="15%">BB</th>
                                                <th width="15%">PB</th>
                                                <th width="%">ASI Ekslusif</th>
                                                <th width="%">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item,index) in subjektif.riwayatObstetri" :key="index">
                                                <td>{{index  + 1}}</td>
                                                <td>
                                                    <span
                                                        v-if="editIndex !== index">{{item.tanggalPersalinan | formatdate}}</span>
                                                    <span v-else><input type="date" class="form-control form-control-sm"
                                                            v-model="item.tanggalPersalinan"></span>
                                                </td>
                                                <td>
                                                    <span v-if="editIndex !== index">{{item.tempatPersalinan}}</span>
                                                    <span v-else><input type="" class="form-control form-control-sm"
                                                            v-model="item.tempatPersalinan"></span>
                                                </td>
                                                <td>
                                                    <span v-if="editIndex !== index">{{item.usiaKehamilan.bulan}} Bulan
                                                        {{item.usiaKehamilan.hari}} Hari</span>
                                                    <span v-else>
                                                        <input type="" class="form-control form-control-sm"
                                                            v-model="item.usiaKehamilan.bulan" placeholder="bulan">
                                                        <input type="" class="form-control form-control-sm"
                                                            v-model="item.usiaKehamilan.hari" placeholder="hari"></span>
                                                </td>
                                                <td>
                                                    <span v-if="editIndex !== index">{{item.metodePersalinan}}</span>
                                                    <span v-else><input type="" class="form-control form-control-sm"
                                                            v-model="item.metodePersalinan"></span>
                                                </td>
                                                <td>
                                                    <span v-if="editIndex !== index">{{item.penolongPersalinan}}</span>
                                                    <span v-else><input type="" class="form-control form-control-sm"
                                                            v-model="item.penolongPersalinan"></span>
                                                </td>
                                                <td>
                                                    <span v-if="editIndex !== index">{{item.jenisKelaminAnak}}</span>
                                                    <span v-else><input type="" class="form-control form-control-sm"
                                                            v-model="item.jenisKelaminAnak"></span>
                                                </td>
                                                <td>
                                                    <span v-if="editIndex !== index">{{item.beratBadanAnak}}</span>
                                                    <span v-else><input type="" class="form-control form-control-sm"
                                                            v-model="item.beratBadanAnak"></span>
                                                </td>
                                                <td>
                                                    <span v-if="editIndex !== index">{{item.panjangBadanAnak}}</span>
                                                    <span v-else><input type="" class="form-control form-control-sm"
                                                            v-model="item.panjangBadanAnak"></span>
                                                </td>
                                                <td>
                                                    <span v-if="editIndex !== index">{{item.asiEkslusif}}</span>
                                                    <span v-else><input type="checkbox"
                                                            class="form-control form-control-sm"
                                                            v-model="item.asiEkslusif">iya ?</span>
                                                </td>
                                                <td>
                                                    <span v-if="editIndex !== index">
                                                        <button @click="edit(item, index)"
                                                            class="btn btn-sm btn-light mr-2">Edit</button>
                                                        <button @click="remove(item, index)"
                                                            class="btn btn-sm btn-danger mr-2">Remove</button>
                                                    </span>
                                                    <span v-else>
                                                        <button class="btn btn-sm btn-outline-secondary mr-2"
                                                            @click="cancel(item)">Cancel</button>
                                                        <button class="btn btn-sm btn-outline-secondary mr-2"
                                                            @click="save(item)">Save</button>
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="col-3 offset-9 text-right my-3">
                                        <button v-show="!editIndex" @click="add" class="btn btn-sm btn-secondary">Add
                                            item</button>
                                    </div>
                                </div>
                            </div>
                            <hr>

                            <div class="card">
                                <div class="card-header">Nutrisi</div>
                                <div class="card-body">
                                    <CRow>
                                        <CCol>
                                            <CInput v-model="subjektif.nutrisi.tinggiBadan" type="text"
                                                label="Tinggi Badan (Cm)" />
                                        </CCol>
                                        <CCol>
                                            <CInput v-model="subjektif.nutrisi.beratBadan" type="text"
                                                label="Berat Badan (Kg)" />
                                        </CCol>
                                        <CCol>
                                            <CInput :value="bmi" type="text" label="BMI" disabled />
                                        </CCol>

                                    </CRow>
                                </div>
                            </div>
                            <hr>
                            <h5>Edukasi</h5>
                            <CRow>
                                <CCol sm="6">
                                    <div class="card">
                                        <div class="card-header">Subjek</div>
                                        <div class="card-body">

                                            <div>
                                                <!-- <label class="typo__label">Subjek</label> -->
                                                <multiselect v-model="subjektif.edukasi.subjek" tag-placeholder=""
                                                    deselect-label="Hapus Pilihan" :searchable="false"
                                                    selected-label="Dipilih" selectLabel="Klik Untuk Memilih"
                                                    placeholder="Pilih List Berikut" label="" track-by=""
                                                    :options="optSubjek" :multiple="true">
                                                </multiselect>
                                            </div>

                                        </div>
                                    </div>
                                </CCol>
                                <CCol sm="6">
                                    <div class="card">
                                        <div class="card-header">Materi Yang Diberikan</div>
                                        <div class="card-body">

                                            <div>
                                                <!-- <label class="typo__label">Materi Yang Diberikan</label> -->
                                                <multiselect v-model="subjektif.edukasi.materi" deselect-label=""
                                                    selected-label="Dipilih" :searchable="false"
                                                    selectLabel="Klik Untuk Memilih" placeholder="Pilih List Berikut"
                                                    label="" track-by="" :options="optMateri" :multiple="true">
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
                                    <CButton color="primary" class="px-4" v-on:click="updateData">submit
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
            // Object.assign(this.riwayatPenyakit, this.dummyPenyakit)
            this.$store.dispatch("getAssesmenSubjektif", this.$route.params.idRekamMedis).then(res => {
                    console.log('ini rekam',this.$route.params.idRekamMedis)
                    // console.log(res.data.doc.subjektif)
                Object.assign(this.subjektif, res.data.doc.subjektif)
                this.idRekamMedis = res.data.doc.idRekamMedis

            })
        },
        filters: {
            formatdate: function (value) {
                if (value) {
                    return moment(String(value)).format('LL')
                }
            },
            currencydecimal(value) {
                return value.toFixed(2)
            }
        },
        data() {
            return {
                idRekamMedis : undefined,
                //Options
                optGyne: ['INFERTITLITAS', 'INFEKSI VIRUS', 'PMS', 'CERVICITIS AKUT', 'CERVICITIS KRONIS', 'TIDAK ADA'],
                optPenyakit: ['TBC'],
                optKB: ['Suntik', 'IMPLAN', "IUD", 'PIL', 'Lainnya', 'Tidak Ada'],
                optSubjek: ['PASIEN', 'KELUARGA PASIEN', 'TEMAN PASIEN', 'LAINNYA'],
                optMateri: ['DIAGNOSA PENYAKIT', 'HASIL PEMERIKSAAN PENUNJANG', 'TERAPI PENGOBATAN',
                    'TERAPI PENGOBATAN', 'RENCANA TINDAKAN', 'PEMBERIAN VAKSIN', 'LAINNYA'
                ],
             



                //riwayat penyakit
                originalData: null,
                editIndex: null,

                //data formulir
                subjektif: {
                    riwayatAlergi: undefined,
                    anamnesis: undefined,
                    taksiranPersalinan: undefined,
                    pergerakanJaninPertama: {
                        tanggal: undefined,
                        keterangan: undefined
                    },
                    paritas: {
                        partus: 0,
                        abortus: 0,
                        gravida: 0,
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
                        teratur: undefined,
                    },
                    riwayatPerkawinan: {
                        jumlahPerkawinan: undefined,
                        tahunPerkawinan: undefined,
                          usiaLakiLaki: undefined,
                        usiaPerempuan: undefined,
                    },
                    riwayatPenyakit: {
                        sekarang: undefined,
                        dahulu: undefined,
                        keluarga: undefined
                    },
                    riwayatKontrasepsi: undefined,
                    riwayatGynecolog: undefined,
                    edukasi: {
                        subjek: undefined,
                        materi: undefined,
                    },
                    riwayatObstetri: [],
                    nutrisi: {
                        tinggiBadan: undefined,
                        beratBadan: undefined,
                        bmi: undefined
                    },
                    edukasi: {
                        subjek: [],
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
            },
            bmi: function () {
                let tinggiBadan = (parseFloat(this.subjektif.nutrisi.tinggiBadan) / 100) * (parseFloat(this
                    .subjektif.nutrisi.tinggiBadan) / 100)
                let value = this.$options.filters.currencydecimal(parseFloat(this.subjektif.nutrisi.beratBadan) /
                    tinggiBadan)
                this.subjektif.nutrisi.bmi = value
                return value
            }

        },
        methods: {
            addListPenyakit(newTag) {
                let tag = newTag
                this.optPenyakit.push(tag)
                // this.value.push(tag)
            },
            add() {
                this.originalData = null
                this.subjektif.riwayatObstetri.push({
                    tanggalPersalinan: '',
                    tempatPersalinan: '',
                    usiaKehamilan: {
                        bulan: '',
                        hari: ''
                    },
                    metodePersalinan: '',
                    penolongPersalinan: '',
                    jenisKelaminAnak: '',
                    panjangBadanAnak: '',
                    beratBadanAnak: '',
                    asiEkslusif: undefined
                })
                this.editIndex = this.subjektif.riwayatObstetri.length - 1
            },

            edit(item, index) {
                this.originalData = Object.assign({}, this.originalData, item)
                this.editIndex = index
            },

            cancel(item) {
                this.editIndex = null

                if (!this.originalData) {
                    this.subjektif.riwayatObstetri.splice(this.subjektif.riwayatObstetri.indexOf(item), 1)
                    return
                }

                Object.assign(item, this.originalData)
                this.originalData = null
            },

            remove(item, index) {
                this.subjektif.riwayatObstetri.splice(index, 1)
            },

            save(item) {
                this.originalData = null
                this.editIndex = null
            },

            updateData() {
                let data = {
                    anamnesis: this.subjektif.anamnesis || undefined,
                    riwayatAlergi: this.subjektif.riwayatAlergi || undefined,

                    taksiranPersalinan: this.subjektif.taksiranPersalinan || undefined,
                    pergerakanJaninPertama: this.subjektif.pergerakanJaninPertama || undefined,
                    paritas: {
                        partus: this.subjektif.paritas.partus,
                        abortus: this.subjektif.paritas.abortus,
                        gravida: this.subjektif.paritas.gravida,
                    },
                    riwayatMenstruasi: {
                        haidTerakhir: {
                            hariPertama: this.subjektif.riwayatMenstruasi.haidTerakhir.hariPertama || undefined,
                            hariTerakhir: this.subjektif.riwayatMenstruasi.haidTerakhir.hariTerakhir || undefined
                        },
                        menorrhagia: this.subjektif.riwayatMenstruasi.menorrhagia || undefined,
                        metrorrhagia: this.subjektif.riwayatMenstruasi.metrorrhagia || undefined,
                        jumlahGantiPembalut: this.subjektif.riwayatMenstruasi.jumlahGantiPembalut || undefined,
                        dismenorrhoe: this.subjektif.riwayatMenstruasi.dismenorrhoe || undefined,
                        siklus: this.subjektif.riwayatMenstruasi.siklus || undefined,
                        teratur: this.subjektif.riwayatMenstruasi.teratur || undefined,
                    },
                    riwayatPerkawinan: {
                        jumlahPerkawinan: this.subjektif.riwayatPerkawinan.jumlahPerkawinan || undefined,
                        tahunPerkawinan: this.subjektif.riwayatPerkawinan.tahunPerkawinan || undefined,
                        
                        usiaLakiLaki: this.subjektif.riwayatPerkawinan.usiaLakiLaki || undefined,
                        usiaPerempuan: this.subjektif.riwayatPerkawinan.usiaPerempuan || undefined,
                    },
                    riwayatPenyakit: {
                        sekarang: this.subjektif.riwayatPenyakit.sekarang || undefined,
                        dahulu: this.subjektif.riwayatPenyakit.dahulu || undefined,
                        keluarga: this.subjektif.riwayatPenyakit.keluarga || undefined
                    },
                    riwayatKontrasepsi: this.subjektif.riwayatKontrasepsi || undefined,
                    riwayatGynecolog: this.subjektif.riwayatGynecolog || undefined,
                    edukasi: {
                        subjek: this.subjektif.edukasi.subjek || undefined,
                        materi: this.subjektif.edukasi.materi || undefined,
                    },
                    riwayatObstetri: this.subjektif.riwayatObstetri,
                    nutrisi: this.subjektif.nutrisi || undefined,
                    edukasi: {
                        subjek: this.subjektif.edukasi.subjek || undefined,
                        materi: this.subjektif.edukasi.materi || undefined,
                    }
                }
                // console.log(this.$route.params.idRekamMedis)
               let temp = {
                   params : this.idRekamMedis,
                   data : data
               }
                // console.log(data)
                // console.log('masuk sini')
                this.$store.dispatch('UpdateAssesmenSubjektif',temp)
                    .then(resp => 
                        console.log(resp),
                    this.$router.push('/Pasien/ListPasien')
                    )
                    .catch(err => console.log(err))
            },
        }

    }
</script>

<style>

</style>