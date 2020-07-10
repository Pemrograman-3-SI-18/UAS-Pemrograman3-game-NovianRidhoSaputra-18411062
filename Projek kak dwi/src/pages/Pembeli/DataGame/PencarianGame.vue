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
          <q-btn color="teal" :disable="loading" label="Search Game"  />
          <!--       <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />-->
          <q-space />
          <q-input dark borderless >
            <template v-slot:append>
              <q-icon name="search" />
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
          label: 'Kode Game',
          align: 'left',
          field: row => row.KodeGame,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namagame', align: 'center', label: 'Nama Game', field: 'namagame', sortable: true },
        { name: 'developer', align: 'center', label: 'Developer', field: 'developer', sortable: true },
        { name: 'tahunterbit', label: 'Tahun Terbit', align: 'center', field: 'tahunterbit' },
        { name: 'hargagame', align: 'center', label: 'Harga Game', field: 'hargagame' }
      ],
      data: [
        {

          KodeGame: 'BZ006',
          namagame: 'Just Because 4',
          developer: 'Square Enix Studio',
          tahunterbit: 2020,
          hargagame: 'Rp200000'
        },
        {

          KodeGame: 'J01',
          namagame: 'Assassins Creed Odyssey',
          developer: 'Ubisoft',
          tahunterbit: 2020,
          hargagame: 'Rp50000'
        },
        {

          KodeGame: 'Z001',
          namagame: 'GTA V',
          developer: 'Rockstar',
          tahunterbit: 2020,
          hargagame: 'Rp100000'
        },
        {

          KodeGame: 'G212',
          namagame: 'Watchdogs2',
          developer: 'Ubisoft',
          tahunterbit: 2020,
          hargagame: 'Rp250000'
        },
        {

          KodeGame: 'K005',
          namagame: 'Red Dead Redemption 2',
          developer: 'Rockstar',
          tahunterbit: 2020,
          hargagame: 'Rp300000'
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
