// eslint-disable-next-line no-unused-vars
import constant from './constant'
const readPublicData = async () => {
  return new Promise((resolve, reject) => {
    resolve({
      number: 666,
      date: new Date(),
      location: '成都市'
    })
  })
}

export default {
  readPublicData
}
