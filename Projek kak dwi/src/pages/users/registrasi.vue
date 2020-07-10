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
                        v-model="form.userName"
                        label="UserName"
                        hint="UserName"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                      />

                      <q-input
                        filled
                        v-model="form.namaLengkap"
                        label="Nama Lengkap"
                        hint="Nama Lengkap"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                      />

                      <q-input
                        filled
                        v-model="form.email"
                        label="Email"
                        hint="Email"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                      />

                      <q-input
                        filled
                        v-model="form.noTelpon"
                        label="NoTelpon"
                        hint="NoTelpon"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                      />

                      <q-input
                        filled
                        type="Password"
                        v-model="form.password"
                        label="Password"
                        hint="Password"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                      />

                      <div>
                        <q-btn label="Register" type="submit"  color="primary" class="q-ml-sm" />
                        <q-btn label="Login" to="/auth/login" type="submit" flat color="primary"/>
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
  name: 'registrasi',
  data () {
    return {
      form: {
        userName: null,
        namaLengkap: null,
        email: null,
        noTelpon: null,
        password: null
      },

      accept: false
    }
  },

  methods: {
    onSubmit () {
      this.$axios.post('/user/registrasi', {
        userName: this.form.userName,
        namaLengkap: this.form.namaLengkap,
        email: this.form.email,
        noTelp: this.form.noTelpon,
        role: '2',
        password: this.form.password
      })
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
            this.$router.push('login')
          }
        })
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
