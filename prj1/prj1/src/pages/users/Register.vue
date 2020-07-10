<template>
  <q-layout class="bg-blue-grey-1" view="hHh Lpr lFf">
    <q-page-container>
      <q-page padding class="row items- justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-white text-black">
              <div class="row">
                <q-card-section class="text-blue-grey-14">
                <div class="text-h4">Registrasi</div>
                </q-card-section>
                <div class="col-md-12 col-xs-12 q-pt-md">
                  <div class="q-pa-md">

                    <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                    >
                      <q-input
                        filled
                        v-model="UserName"
                        label="UserName"
                        hint="UserName"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                      />

                      <q-input
                        filled
                        v-model="Email"
                        label="Email"
                        hint="Email"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                      />

                      <q-input
                        filled
                        v-model="NoTelpon"
                        label="NoTelpon"
                        hint="NoTelpon"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                      />

                      <q-input
                        filled
                        v-model="Alamat"
                        label="Alamat"
                        hint="Alamat"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                      />

                      <q-input
                        filled
                        type="Password"
                        v-model="Password"
                        label="Password"
                        hint="Password"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                      />

                      <div>
                        <q-btn label="Login" to="/auth/login" type="submit" color="primary"/>
                        <q-btn label="Register"  color="primary" flat class="q-ml-sm" />
                      </div>
                    </q-form>

                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      UserName: null,
      Email: null,
      NoTelpon: null,
      Alamat: null,
      Password: null,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

<style scoped>

</style>
