<template>
    <div>
        <!-- {{test1}} -->
        perubahan data
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
                            <CRow>
                                <CCol>
                                    <h5>Riwayat Penyakit</h5>
                                </CCol>
                            </CRow>

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
                                                            <span v-if="editIndex === index">
                                                                <CInput type="text" v-model="temp" />
                                                            </span>

                                                        </div>
                                                        <div class="col">
                                                            <span v-if="editIndex !== index">
                                                                <CButtonGroup size="sm" class="mx-1">
                                                                    <CButton @click="edit(index)" color="secondary">Edit
                                                                    </CButton>
                                                                    <CButton @click="remove(index)" color="danger">
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
                                                <button v-show="!editIndex" v-on:click="add()"
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
                                                            <span v-if="editIndex !== index">{{ item }}</span>
                                                            <span v-if="editIndex === index">
                                                                <CInput type="text" v-model="temp" />
                                                            </span>

                                                        </div>
                                                        <div class="col">
                                                            <span v-if="editIndex !== index">
                                                                <CButtonGroup size="sm" class="mx-1">
                                                                    <CButton @click="edit(index)" color="secondary">Edit
                                                                    </CButton>
                                                                    <CButton @click="remove(index)" color="danger">
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
                                                <button v-show="!editIndex" @click="add()"
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
                                                <div v-for="(item,index) in riwayatPenyakit.keluarga" :key="item.ket">
                                                    <div class="row">
                                                        <div class="col">
                                                            <span v-if="editIndex !== index">{{ item }}</span>
                                                            <span v-if="editIndex === index">
                                                                <CInput type="text" v-model="temp" />
                                                            </span>

                                                        </div>
                                                        <div class="col">
                                                            <span v-if="editIndex !== index">
                                                                <CButtonGroup size="sm" class="mx-1">
                                                                    <CButton @click="edit(index)" color="secondary">Edit
                                                                    </CButton>
                                                                    <CButton @click="remove(index)" color="danger">
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
                                                <button v-show="!editIndex" @click="add()"
                                                    class="btn btn-sm btn-secondary">Tambah
                                                    Data</button>
                                            </template>
                                        </div>
                                    </div>
                                </CCol>
                            </CRow>




                            <!-- <hr> -->

                            <CRow>
                                <CCol> Riwayat Menstruasi</CCol>
                                <CCol sm="4">

                                </CCol>
                            </CRow>

                            <CRow>
                                <CCol col="6" class="text-left">
                                    <CButton type="submit" color="primary" class="px-4" v-on:click="updateData()">submit</CButton>
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
    export default {
        created: function () {
            Object.assign(this.riwayatPenyakit, this.dummyPenyakit)
        },
        data() {
            return {
                //dummy
                temp: null,
                dummyPenyakit: {
                    sekarang: ['asma', 'stress'],
                    dahulu: [{
                        ket: 'Maagh'
                    }],
                    keluarga: [{
                        ket: 'sesak nafas'
                    }, {
                        ket: 'ginjal'
                    }]
                },
                //riwayat penyakit
                originalData: null,
                editIndex: null,
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
            updateData() {
                console.log('berhasil ya')
            },
            add(params) {
                this.originalData = null
                this.riwayatPenyakit.sekarang.push('')
                this.editIndex = this.riwayatPenyakit.sekarang.length - 1
         
            },
            edit(index) {
                this.originalData = true
                this.temp = this.riwayatPenyakit.sekarang[index]
                this.editIndex = index
            },
            cancel(index) {

                if (!this.originalData) {
                    this.riwayatPenyakit.sekarang.splice(this.editIndex, 1)
                }

                this.editIndex = null
                this.temp = null
                this.originalData = false
            },
            remove(index) {
                this.riwayatPenyakit.sekarang.splice(index, 1)
            },
            save(index) {
                this.insertAt(this.riwayatPenyakit.sekarang, this.editIndex, this.temp)
                this.originalData = null
                this.editIndex = null
                this.temp = null
            },
            insertAt(array, index, value) {
                array.splice(index, index + 1, value);
            }
        }

    }
</script>

<style>

</style>