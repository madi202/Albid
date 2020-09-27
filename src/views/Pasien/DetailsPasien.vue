<template>
  <div>
    <div class="identitaspasien row">
      <div class="col-sm-10">


        <CCard>
          <CCardHeader>
            Identitas Pasien
            <div class="card-header-actions">
              <a href="https://coreui.io/vue/docs/components/card-components" class="card-header-action"
                rel="noreferrer noopener" target="_blank">
                <small class="text-muted">Update Profil</small>
              </a>
            </div>

          </CCardHeader>
          <CCardBody>
            <div class="row">
              <div class="col-sm-5">
                <label for="">Nama Lengkap</label>
                <div type="text" class="form-control">{{pasien.nama}}</div>
              </div>
              <div class="col-sm-5">
                <label for="">Nomor Handphone</label>
                <div type="text" class="form-control">{{pasien.kontak.noHP}}</div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-5">
                <label for="">NIK</label>
                <div type="text" class="form-control">{{pasien.nik}}</div>
              </div>
              <div class="col-sm-5">
                <label for="">Email</label>
                <div type="text" class="form-control">{{pasien.kontak.email}}</div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-5">
                <label for="">Tanggal lahir</label>
                <div type="text" class="form-control">{{pasien.tanggalLahir | formatdate}}</div>
              </div>
              <div class="col-sm-5">
                <label for="">Pekerjaan</label>
                <div type="text" class="form-control">{{pasien.pekerjaan}}</div>
              </div>
            </div>


            <div class="row">
              <div class="col-sm-10">
                <label for="">Alamat Lengkap</label>
                <div type="text" class="form-control">{{pasien.alamat.alamatJalan}}</div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-5">
                <label for="">Provinsi</label>
                <div type="text" class="form-control">{{pasien.alamat.provinsi}}</div>
              </div>
              <div class="col-sm-5">
                <label for="">Kota / Kabupaten</label>
                <div type="text" class="form-control">{{pasien.alamat.kota}}</div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-5">
                <label for="">Kecamatan</label>
                <div type="text" class="form-control">{{pasien.alamat.kecamatan}}</div>
              </div>
              <div class="col-sm-5">
                <label for="">Desa/ kelurahan</label>
                <div type="text" class="form-control">{{pasien.alamat.kelurahan}}</div>
              </div>
            </div>

          </CCardBody>
        </CCard>
      </div>
    </div>

    <!-- list rekam medis -->
    <div class="">
      <CCard>
        <CCardHeader>
          <div class="row">
            <div class="col">
              <h5>List Rekam Medis : {{pasien.nama}}</h5>
            </div>
            <div class="col">
              <div class="card-header-actions">
                <router-link :to="'/Pasien/RegisterMedis/' + pasien._id">
                  <!-- <button class="btn-primary">Tambah Rekam Medis</button> -->
                  <CButton block color="primary">Tambah Rekam Medis</CButton>
                </router-link>
              </div>
            </div>
          </div>


        </CCardHeader>
        <CCardBody>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Tanggal Kunjungan</th>
                <th scope="col">Penanggung Jawab</th>
                <th scope="col">Jenis Pemeriksaan</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
              <!-- <div v-if="record"> -->
              <tr v-for="item in record" :key="item._id">
                <td>{{item.tanggalKunjungan | formatdate}}</td>
                <td>{{item.penanggungJawab.nama}}</td>
                <td scope="row">{{item.jenisPemeriksaan}}</td>
                <td>
                  <!-- <router-link to="/Pasien/Details/">
                    <button>show</button>
                  </router-link> -->
                  <!-- <button class="btn-primary" v-on:click="checkRoute(item._id,item.jenisPemeriksaan)">show</button> -->
                  <CButton block color="primary" v-on:click="checkRoute(item._id,item.jenisPemeriksaan)">Show</CButton>
                </td>

                <td></td>
              </tr>
              <!-- </div> -->
              <!-- <tr>tidak ada data</tr> -->
            </tbody>
          </table>
        </CCardBody>
      </CCard>
    </div>
  </div>





</template>
<script>
  import moment from 'moment'
  export default {
    created: function () {
      this.$store.dispatch("pasienDetails", this.$route.params.id).then(res => {
        // this.pasien = res.data.doc
        this.pasien = Object.assign({}, this.pasien, res.data.doc)
      })
      this.$store.dispatch("PasienMRecord", this.$route.params.id).then(res => {
        this.record = Object.assign({}, this.record, res.data.doc)
      })
    },
    data() {
      return {

        //pasien
        pasien: {
          nik: undefined,
          nama: undefined,
          tanggalLahir: undefined,
          kontak: {
            noHp: undefined,
            email: undefined
          },
          alamat: {
            provinsi: undefined,
            kota: String,
            kecamatan: String,
            kelurahan: String,
            alamatJalan: String,
          }
        },
        record: [],



        //list rekam medis

      }
    },
    methods: {
      checkRoute: function (id, message) {
        switch (message) {
          case 'INC':
            this.$router.push('/Pasien/RekamMedis/' + id)
            break;
          case 'PNC':
            console.log('masuk PNC')
            break;
          case 'ANC':
            this.$router.push('/Pasien/RekamMedisANC/' + id)
            break;
          case 'ASESMEN AWAL':
            this.$router.push('/Pasien/RekamMedisAWAL/' + id)
            break;
          default:
            console.log('masuk rahmadi')
            break;
        }
      }
    },

    filters: {
      formatdate: function (value) {
        if (value) {
          return moment(String(value)).format('LL')
        }
      }
    }

  }
</script>
<style></style>