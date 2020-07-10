<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-dark">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data Game</span>
      </span>
      <div class="q-pa-md">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >

          <q-input
            label="Kode Game"
            lazy-rules
            color="teal"
            v-model="form.kodeGame"
            :rules="[
           val => val !== null && val !== '' || 'Kode Game Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="games"/>
            </template>
          </q-input>
          <q-input
            label="Judul Game"
            lazy-rules
            color="teal"
            v-model="form.namagame"
            :rules="[
           val => val !== null && val !== '' || 'Judul Game Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>
          <q-input
            label="Developer"
            lazy-rules
            color="teal"
            v-model="form.developer"
            :rules="[
           val => val !== null && val !== '' || 'Developer Game Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="domain"/>
            </template>
          </q-input>
          <q-input
            label="Tahun Terbit Game"
            lazy-rules
            color="teal"
            v-model="form.tahunterbit"
            :rules="[
           val => val !== null && val !== '' || 'Tahun Terbit Game Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="calendar_today"/>
            </template>
          </q-input>
          <q-input
            label="Harga Game"
            lazy-rules
            color="teal"
            v-model="form.hargagame"
            :rules="[
           val => val !== null && val !== '' || 'Harga Game Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="attach_money"/>
            </template>
          </q-input>
          <q-img :src="baseUrl + this.gambar" style="width: 250px; height: 250px"/>
          <q-toggle v-model="gantiGambar" label="Ganti Gambar ?" />
          <q-input
            lazy-rules
            hint="Pilih gambar"
            type="file"
            ref="file"
            v-if="gantiGambar == true"
            @input="selectFile()"
            color="teal"
            :rules="[
           val => val !== null && val !== '' || 'Gambar Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="add_photo_alternate"/>
            </template>
          </q-input>
          <div>
            <q-btn
              unelevated
              icon="add"
              type="submit"
              label="Edit Data Game"
              style="height: 50px"
              color="teal-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'EditDataGame',
  data () {
    return {
      gantiGambar: false,
      baseUrl: 'http://localhost:5555/gambar/',
      form: {
        namagame: null,
        kodeGame: null,
        developer: null,
        tahunterbit: null,
        hargagame: null
      },
      id: null,
      gambar: null
    }
  },
  methods: {
    selectFile () {
      this.gambar = this.$refs.file.$refs.input.files[0]
    },
    onSubmit () {
      const formData = new FormData()
      formData.append('gambar', this.gambar)
      formData.append('kodeGame', this.form.kodeGame)
      formData.append('namagame', this.form.namagame)
      formData.append('developer', this.form.developer)
      formData.append('tahunterbit', this.form.tahunterbit)
      formData.append('hargagame', this.form.hargagame)
      this.$axios.put('/game/ubah/' + this.id, formData)
        .then((res) => {
          if (res.data.error) {
            this.$q.notify({
              color: 'negative',
              message: res.data.msg,
              icon: 'ion-close'
            })
          } else {
            this.$q.notify({
              color: 'positive',
              message: res.data.msg,
              icon: 'ion-close'
            })
            this.$router.push('/')
          }
        })
    },
    getDataGameById () {
      this.$axios.get('/game/datagame/' + this.$route.params.id)
        .then((res) => {
          this.data = res.data.data
          this.form.kodeGame = this.data.kodeGame
          this.form.namagame = this.data.namagame
          this.form.developer = this.data.developer
          this.form.tahunterbit = this.data.tahunterbit
          this.form.hargagame = this.data.hargagame
          this.gambar = this.data.gambar
          this.id = this.data._id
        })
    }
  },
  mounted () {
    this.getDataGameById()
  }
}
</script>

<style scoped>

</style>
