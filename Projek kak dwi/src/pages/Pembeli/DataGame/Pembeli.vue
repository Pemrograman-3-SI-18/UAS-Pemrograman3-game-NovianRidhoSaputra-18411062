<template>
<q-page>
<div class="q-pa-md">
  <div class="row">
    <div class="col-md-3 col-xs-12 q-pa-md" v v-for="(game, i) in data" :key="i">
      <q-card flat class="q-pa-md bg-grey-10 text-white">
        <q-card-section>
          <div class="text-h6">
            {{game. namagame}}
          </div>
        </q-card-section>
        <q-card-section>
          <q-img spinner-color="white" style="height: 100%; max-width: 100%" placeholder-src="statics/justcause4.jpg" src="statics/justcause4.jpg" />
        </q-card-section>
        <q-card-section>
          <div>
            Harga : Rp. {{game. hargagame}}
          </div>
        </q-card-section>
        <q-card-section>
          <div>
          </div>
          <q-btn unelevated color="teal" icon="add_shopping_cart" no-caps label="Add To Cart"></q-btn>
        </q-card-section>
      </q-card>
    </div>
  </div>
</div>
</q-page>

</template>

<script>
export default {
  name: 'DataGame',
  data () {
    return {
      data: null
    }
  },
  methods: {
    getDataGame () {
      this.$axios.get('/game/datagame')
        .then((res) => {
          this.data = res.data.data
          console.log(this.data)
        })
    }
  },
  mounted () {
    this.getDataGame()
  }
}
</script>

<style scoped>

</style>
