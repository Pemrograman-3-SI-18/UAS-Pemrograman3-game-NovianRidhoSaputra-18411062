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
        <q-btn color="teal" :disable="loading" label="Tambah Data Buku" to="/InputDataBuku" />
 <!--       <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />-->
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
          label: 'Kode Buku',
          align: 'left',
          field: row => row.KodeBuku,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'judulbuku', align: 'center', label: 'Judul Buku', field: 'judulbuku', sortable: true },
        { name: 'penerbit', align: 'center', label: 'Penerbit', field: 'penerbit', sortable: true },
        { name: 'pengarang', align: 'center', label: 'Pengarang', field: 'pengarang' },
        { name: 'tahunterbit', label: 'Tahun Terbit', align: 'center', field: 'tahunterbit' },
        { name: 'hargabuku', align: 'center', label: 'Harga Buku', field: 'hargabuku' }
      ],
      data: [
        {

          KodeBuku: 'K001',
          judulbuku: 'Azab Dosen Memberi Tugas Berlebihan',
          penerbit: 'UBL kampus idaman semua orang',
          pengarang: 'Novian Ridho Saputra',
          tahunterbit: 2020,
          hargabuku: 'Rp200000'
        },
        {

          KodeBuku: 'K002',
          judulbuku: 'Karma Memberi Harapan Palsu Kepada Sesama Manusia',
          penerbit: 'UBL kampus idaman semua orang',
          pengarang: 'Novian Ridho Saputra',
          tahunterbit: 2020,
          hargabuku: 'Rp50000'
        },
        {

          KodeBuku: 'K003',
          judulbuku: 'Ya Bercanda Bapak Dan Ibu Dosen Ku Jangan Baper Ya, UNCH',
          penerbit: 'UBL kampus idaman semua orang',
          pengarang: 'Novian Ridho Saputra',
          tahunterbit: 2020,
          hargabuku: 'Rp100000'
        },
        {

          KodeBuku: 'K004',
          judulbuku: 'Apa Hukum Nya Untuk Seseorang Yang Pergi Pas Lagi Sayang-Sayangnya',
          penerbit: 'UBL kampus idaman semua orang',
          pengarang: 'Novian Ridho Saputra',
          tahunterbit: 2020,
          hargabuku: 'Rp250000'
        },
        {

          KodeBuku: 'K005',
          judulbuku: 'Sebuah Seni Untuk Menjadi Seorang Fvck Boy',
          penerbit: 'UBL kampus idaman semua orang',
          pengarang: 'Novian Ridho Saputra',
          tahunterbit: 2020,
          hargabuku: 'Rp300000'
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
