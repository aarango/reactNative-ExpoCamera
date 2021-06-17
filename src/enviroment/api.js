import axios from 'axios'

const instance = axios.create({
  //baseURL: 'https://mei-2cvgsdw45q-ue.a.run.app/mei/sellout',
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance
