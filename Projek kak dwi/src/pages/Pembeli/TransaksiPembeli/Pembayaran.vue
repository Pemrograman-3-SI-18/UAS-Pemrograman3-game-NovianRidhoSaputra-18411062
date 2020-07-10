<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-dark">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Pembayaran Game</span>
      </span>
      <div class="q-pa-md">
        <q-form
          class="q-gutter-md"
        >

          <q-input
            label="Kode Transaksi"
            lazy-rules
            color="teal"
            v-model="kodetransaksi"
            :rules="[
           val => val !== null && val !== '' || 'Kode Transaksi Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="attach_money"/>
            </template>
          </q-input>
          <q-input
            label="Judul Game"
            lazy-rules
            color="teal"
            v-model="judulgame"
           >
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>
          <q-input
            label="Developer"
            lazy-rules
            color="teal"
            v-model="developer"
            >
            <template v-slot:append>
              <q-icon name="domain"/>
            </template>
          </q-input>
          <q-input
            label="Harga Game"
            lazy-rules
            color="teal"
            v-model="hargagame"
            >
            <template v-slot:append>
              <q-icon name="attach_money"/>
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="money_off"
              label="Lakukan Pembayaran"
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
  data () {
    return {
      kodetransaksi: null

    }
  }
}
</script>

<style scoped>

</style>
