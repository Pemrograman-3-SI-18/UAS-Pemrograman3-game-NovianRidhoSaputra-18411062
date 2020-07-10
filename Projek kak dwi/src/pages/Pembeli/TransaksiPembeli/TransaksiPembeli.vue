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
          <!-- <q-btn color="teal" :disable="loading" label="Tambah Data Buku" to="/InputDataBuku" />
                  <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />-->
          <span class="text-white-14">Data Transaksi</span>
          <q-space />
          <q-input dark borderless v-model="text" >
            <template v-slot:append>
              <q-icon name="search" />

            </template>
          </q-input>
        </template>
      </q-table>
      <div>
        <q-btn
          unelevated
          icon="monetization_on"
          label="Lakukan Pembayaran" to="/pembeli/Pembayaran"
          style="height: 50px"
          color="teal-6"/>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      text: null,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Kode Transaksi',
          align: 'left',
          field: row => row.KodeTransaksi,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namagame', align: 'center', label: 'Nama Game', field: 'namagame', sortable: true },
        { name: 'developer', align: 'center', label: 'Developer', field: 'developer' },
        { name: 'hargagame', align: 'center', label: 'Harga Game', field: 'hargagame' },
        { name: 'keterangan', align: 'center', label: 'Keterangan Pembayaran', field: 'keterangan' }
      ],
      data: [
        {

          KodeTransaksi: 'Trans001',
          namagame: 'Assassins Creed Odyssey',
          developer: 'Ubisoft',
          hargagame: 'Rp50000',
          keterangan: 'Belum Bayar'
        },
        {

          KodeTransaksi: 'Trans002',
          namagame: 'Watchdogs2',
          developer: 'Ubisoft',
          hargagame: 'Rp250000',
          keterangan: 'Sudah Bayar'
        }

      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
