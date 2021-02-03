import Axios from 'axios'

const Api = Axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://chat.miauuapi.com/',
  timeout: 1000,
  headers: {
    'Authorization' : 'giwXuRY4ucOqQvz2g08OhMy89KxxZrv0',
    'Access-Control-Allow-Origin': '*',
    'X-Requested-With': 'XMLHttpRequest',
  }
})

export default Api