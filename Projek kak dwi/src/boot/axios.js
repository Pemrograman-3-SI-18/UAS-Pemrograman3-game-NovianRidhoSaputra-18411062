import axios from 'axios'
// #import { Vue } from 'vue-i18n/src/install'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5555/'
})

export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}
export { axiosInstance }
