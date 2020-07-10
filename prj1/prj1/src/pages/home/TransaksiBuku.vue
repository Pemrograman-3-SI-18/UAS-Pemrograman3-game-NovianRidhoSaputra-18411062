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
          <q-input borderless dense debounce ="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon color="teal" name="search" />
            </template>
          </q-input>
        </template>

      </q-table>
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
        { name: 'namapembeli', align: 'center', label: 'Nama Pembeli', field: 'namapembeli', sortable: true },
        { name: 'judulbuku', align: 'center', label: 'Judul Buku', field: 'judulbuku', sortable: true },
        { name: 'hargabuku', align: 'center', label: 'Harga Buku', field: 'hargabuku' },
        { name: 'jumlahbeli', label: 'Jumlah Beli', align: 'center', field: 'jumlahbeli' }
      ],
      data: [
        {

          KodeTransaksi: 'Trans001',
          namapembeli: 'Logan Walker',
          judulbuku: 'Karma Memberi Harapan Palsu Kepada Sesama Manusia',
          hargabuku: 'Rp50000',
          jumlahbeli: 2
        },
        {

          KodeTransaksi: 'Trans002',
          namapembeli: 'Agung Gumelar',
          judulbuku: 'Apa Hukum Nya Untuk Seseorang Yang Pergi Pas Lagi Sayang-Sayangnya',
          hargabuku: 'Rp250000',
          jumlahbeli: 1
        },
        {

          KodeTransaksi: 'Trans003',
          namapembeli: 'M Bintang Syahputra',
          judulbuku: 'Sebuah Seni Untuk Menjadi Seorang Fvck Boy',
          hargabuku: 'Rp300000',
          jumlahbeli: 1
        },
        {

          KodeTransaksi: 'Trans004',
          namapembeli: 'Rian Diko',
          judulbuku: 'Sebuah Seni Untuk Menjadi Seorang Fvck Boy',
          hargabuku: 'Rp300000',
          jumlahbeli: 5
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
