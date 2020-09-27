<template>
  <div>
    <div class="row">
      <div class="col-sm-8">
        <div class="card">

          <div class="card-body">

            <form>
              <div class="row" align-v="center" slot="header">
                <div class="col text-right" cols="4">
                  <button type="submit" class="btn btn-primary">Update Profil</button>
                </div>
              </div>

              <div class="row"></div>
              <h6 class="heading-small text-muted mb-4">User information</h6>

              <div class="row">
                <div class="col-sm-5">
                  <label for="">NIK</label>
                  <div type="text" class="form-control">{{users.nik}}</div>
                </div>
                <div class="col-sm-5">
                  <label for="">Nama</label>
                  <div type="text" class="form-control">{{users.nama}}</div>

                </div>
              </div>
              <div class="row">
                <div class="col-sm-5">
                  <label for="">Email</label>
                  <div type="text" class="form-control">{{users.kontak.email}}</div>

                </div>
                <div class="col-sm-5">
                  <label for="">No Handphone</label>
                  <div type="text" class="form-control">{{users.kontak.noHP}}</div>

                </div>
              </div>



              <!-- Address -->
              <hr class="my-4">
              <h6 class="heading-small text-muted mb-4">Address information</h6>
              <div class="row">
                <div class="col-sm">
                  <label for="">Alamat Lengkap</label>
                  <div type="text" class="form-control">{{users.alamatPelayanan.alamatJalan}}</div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3">
                  <label for="">Provinsi</label>
                  <div type="text" class="form-control">{{users.alamatPelayanan.provinsi}}</div>

                </div>
                <div class="col-sm-3">
                  <label for="">Kota/Kabupaten</label>
                  <div type="text" class="form-control">{{users.alamatPelayanan.kota}}</div>

                </div>
                <div class="col-sm-3">
                  <label for="">Kecamatan</label>
                  <div type="text" class="form-control">{{users.alamatPelayanan.kecamatan}}</div>

                </div>
                <div class="col-sm-3">
                  <label for="">Desa/kelurahan</label>
                  <div type="text" class="form-control">{{users.alamatPelayanan.kelurahan}}</div>

                </div>
              </div>
              <!-- Bidan Informasi -->
              <hr class="my-5">
              <h6 class="heading-small text-muted mb-4">Bidan information</h6>
              <div class="row">
                <div class="col-sm-5">
                  <label for="">No SIPB</label>
                  <div type="text" class="form-control">{{users.noSipb}}</div>
                </div>
                <div class="col-sm-5">
                  <label for="">No IBI</label>
                  <div type="text" class="form-control">{{users.noIbi}}</div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-5">
                  <label for="">Nomor STR</label>
                  <div type="text" class="form-control" placeholder="nomor STR">{{users.str.no}}</div>
                </div>
                <div class="col-sm-5">
                  <label for="">Tanggal Kadaluarsa</label>
                  <div class="form-control" placeholder="Tanggal Kadaluarsa">
                    {{users.str.tanggalKadaluarsa | formatdate}}</div>
                </div>

              </div>


            </form>
          </div>
        </div>


      </div>
    </div>
  </div>




</template>
<script>
  import moment from 'moment'
  export default {
    created: function () {
      this.$store.dispatch("getBidan").then(res => {
        // this.users = res.data.doc
        this.users = Object.assign({}, this.users, res.data.doc)
      })
    },
    data() {
      return {
        users: {
          nama: undefined,
          nik: undefined,
          tanggalDaftar: undefined,
          nama: undefined,
          kontak: {
            noHP: undefined,
            email: undefined,
          },
          alamatPelayanan: {
            provinsi: undefined,
            kota: undefined,
            kecamatan: undefined,
            kelurahan: undefined,
            alamatJalan: undefined,
          },
          noSIPB: undefined,
          noIBI: undefined,
          str: {
            no: undefined,
            tanggalKadaluarsa: undefined,
          }
        }

      };
    },
    methods: {
      updateProfile() {
        alert('Your data: ' + JSON.stringify(this.user));
      }
    },
    filters: {
      formatdate: function (value) {
        if (value) {
          return moment(String(value)).format('LL')
        }
      }
    }
  };
</script>
<style>
  /* input:disabled {
  background-color;
} */
  control[readonly] {
    background-color: #ffffff;
  }
</style>