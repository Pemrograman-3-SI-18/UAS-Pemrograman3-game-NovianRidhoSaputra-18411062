<template>
  <q-layout view="hHh lpR fFf" class="bg-dark text-white">
    <q-header elevated class="bg-dark text-white-8 q-py-xs" height-hint="58">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
          <q-icon :name="fabYoutube" color="red" size="28px" />
          <q-toolbar-title shrink class="text-weight-bold">
            ANJAY GAMES
          </q-toolbar-title>
        </q-btn>

        <q-space />

        <div class="YL__toolbar-input-container row no-wrap">
          <q-input dense outlined square v-model="search" placeholder="Search" class="bg-white col" />
          <q-btn class="YL__toolbar-input-btn" color="grey-3" text-color="grey-8" icon="search" unelevated />
        </div>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="grey-8" icon="apps" v-if="$q.screen.gt.sm" clickable active-class="active" exact v-ripple to="/pembeli">
            <q-tooltip>Home</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="message" v-if="$q.screen.gt.sm" clickable active-class="active" exact v-ripple to="/pembeli/pencariangame">
            <q-tooltip>Pencarian Game</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications" clickable active-class="active" exact v-ripple to="/pembeli/transaksianda">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Transaction</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px" >
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" >
            </q-avatar>
            <q-tooltip>{{dataUser.userName}}</q-tooltip>
          </q-btn>
        <q-btn color="teal"
               label="Keluar"
               unelevated
               @click="keluar()"
               size="sm"
               v-close-popup>
               <q-tooltip>Keluar disini</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-dark"
      :width="240"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item v-for="link in links1" :key="link.text" v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="white" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item v-for="link in links2" :key="link.text" v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="white" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-mt-md q-mb-xs" />

          <q-item v-for="link in links3" :key="link.text" v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="white" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item v-for="link in links4" :key="link.text" v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="white" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-mt-md q-mb-lg" />

          <div class="q-px-md text-white">
            <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
              <a
                v-for="button in buttons1"
                :key="button.text"
                class="YL__drawer-footer-link"
                href="javascript:void(0)"
              >
                {{ button.text }}
              </a>
            </div>
          </div>
          <div class="q-py-md q-px-md text-white">
            <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
              <a
                v-for="button in buttons2"
                :key="button.text"
                class="YL__drawer-footer-link"
                href="javascript:void(0)"
              >
                {{ button.text }}
              </a>
            </div>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { fabYoutube } from '@quasar/extras/fontawesome-v5'
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false,
      dataUser: this.$q.localStorage.getItem('datauser'),
      search: '',
      links1: [
        { icon: 'home', text: 'Home' },
        { icon: 'whatshot', text: 'Game Trending' }
      ],
      links2: [
        { icon: 'folder', text: 'Library' },
        { icon: 'restore', text: 'History' },
        { icon: 'watch_later', text: 'Instal Later' },
        { icon: 'thumb_up_alt', text: 'Liked Game' }
      ],
      links3: [
        { icon: fabYoutube, text: 'Account Premium' },
        { icon: 'videogame_asset', text: 'Gaming' },
        { icon: 'live_tv', text: 'Live Pro Player' }
      ],
      links4: [
        { icon: 'settings', text: 'Settings' },
        { icon: 'flag', text: 'Report history' },
        { icon: 'help', text: 'Help' },
        { icon: 'feedback', text: 'Send feedback' }
      ],
      buttons1: [
        { text: 'About' },
        { text: 'Press' },
        { text: 'Copyright' },
        { text: 'Contact us' },
        { text: 'Creators' },
        { text: 'Advertise' },
        { text: 'Developers' }
      ],
      buttons2: [
        { text: 'Terms' },
        { text: 'Privacy' },
        { text: 'Policy & Safety' },
        { text: 'Test new features' }
      ]

    }
  },
  methods: {
    keluar () {
      this.$q.localStorage.clear()
      this.$router.push('auth/login')
    }
  },
  created () {
    this.fabYoutube = fabYoutube
  }
}
</script>

<style lang="sass">
  .YL
    &__toolbar-input-container
      min-width: 100px
      width: 55%
    &__toolbar-input-btn
      border-radius: 0
      border-style: solid
      border-width: 1px 1px 1px 0
      border-color: rgba(0,0,0,.24)
      max-width: 60px
      width: 100%
    &__drawer-footer-link
      color: inherit
      text-decoration: none
      font-weight: 500
      font-size: .75rem
      &:hover
        color: #000
</style>
