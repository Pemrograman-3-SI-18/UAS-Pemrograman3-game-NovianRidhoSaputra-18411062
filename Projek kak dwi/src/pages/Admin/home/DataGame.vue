<template>
<q-page >
  <div class="q-pa-md">
    <q-table
      title="Treats"
      :data="data"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="loading"
      dark
      color="amber"
    >

      <template v-slot:top>
        <q-btn color="teal" :disable="loading" label="Tambah Data Game" to="/InputDataGame" />
 <!--       <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />-->
        <q-space />
        <q-input dark borderless v-model="text">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="kodeGame" :props="props">
            {{ props.row.kodeGame }}
          </q-td>
          <q-td key="namagame" :props="props">{{ props.row.namagame }}</q-td>
          <q-td key="developer" :props="props">{{ props.row.developer }}</q-td>
          <q-td key="tahunterbit" :props="props">{{ props.row.tahunterbit }}</q-td>
          <q-td key="hargagame" :props="props">{{ props.row.hargagame }}</q-td>
          <q-td key="gambar" :props="props">
            <q-img :src="baseUrl + props.row.gambar" style="width: 50px; height: 50px"/>
          </q-td>
          <q-td key="action" :props="props">
            <div class="justify-center q-gutter-x-xs">
              <q-btn color="teal"
                     dense size="sm"
                     class="q-px-xs"
                     icon="edit"
                     @click="edit(props.row.kodeGame)"
                     label="Edit"></q-btn>
              <q-btn
                color="red"
                dense
                size="sm"
                @click="hapusDataGame(props.row._id)"
                class="q-px-xs"
                icon="delete"
                label="Hapus"></q-btn>
            </div>
          </q-td>
        </q-tr>
      </template>

    </q-table>
  </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      baseUrl: 'http://localhost:5555/gambar/',
      loading: false,
      filter: '',
      rowCount: 10,
      text: null,
      columns: [
        {
          name: 'kodeGame',
          required: true,
          label: 'Kode Game',
          align: 'left',
          field: row => row.kodeGame,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namagame', align: 'center', label: 'Nama Game', field: 'namagame', sortable: true },
        { name: 'developer', align: 'center', label: 'Developer', field: 'developer', sortable: true },
        { name: 'tahunterbit', label: 'Tahun Terbit', align: 'center', field: 'tahunterbit' },
        { name: 'hargagame', align: 'center', label: 'Harga Game', field: 'hargagame' },
        { name: 'gambar', label: 'Gambar', align: 'center', field: 'gambar' },
        { name: 'action', align: 'center', label: 'Action', field: 'action', sortable: true }
      ],
      data: []
    }
  },

  methods: {
    // emulate fetching data from server
    getDataGame () {
      this.$axios.get('/game/datagame')
        .then((res) => {
          this.data = res.data.data
        })
    },
    hapusDataGame (id) {
      this.$axios.delete('/game/hapus/' + id)
        .then((res) => {
          this.$q.notify({
            color: 'positive',
            message: 'Berhasil Menghapus Data'
          })
          this.getDataGame()
        })
    },
    edit (kodeGame) {
      this.$router.push('/editdatagame/' + kodeGame)
    }
  },
  mounted () {
    this.getDataGame()
  }
}
</script>
