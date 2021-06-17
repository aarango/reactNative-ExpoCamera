
import Axios from '../enviroment/api'

function uuidv4 () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0; const v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

const barCode = async (body) => {
  const sha = 'q9P5crTZJV3ERFPw8H5veH7R2s89Eyqs'
  const serial = body
  const newParam = serial + uuidv4() + sha

  const rawData = {
    sha: newParam,
    serial: serial,
    apikey: uuidv4()
  }

  const response = await Axios.post('/', rawData)
  try {
    if (response.status === 200) {
      return true
    }
  } catch (error) {
    console.error('barCodek>>>>>>>>>', error)
  }
}

export default barCode
