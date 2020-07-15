import constant from './constant'

const data = [{
  id: 1,
  currentOnline: 24567,
  maxOnline: 27777,
  connectNumber: [1, 932, 901, 934, 1290, 1330, 1320, 932, 901, 934, 1290, 9330],
  serviceResTime: 5,
  dbResTime: 8,
  name: '营销业务运用系统'
}, {
  id: 2,
  currentOnline: 14566,
  maxOnline: 67844,
  connectNumber: [1, 932, 901, 934, 666, 1330, 56, 932, 34, 934, 1290, 9330],
  serviceResTime: 9,
  dbResTime: 3,
  name: '采购业务运用系统'
}, {
  id: 3,
  currentOnline: 5646,
  maxOnline: 8986,
  connectNumber: [1, 932, 901, 44, 1290, 56, 1320, 932, 901, 934, 1290, 9330],
  serviceResTime: 5,
  dbResTime: 18,
  name: '服务业务运用系统'
}, {
  id: 4,
  currentOnline: 46546,
  maxOnline: 277677,
  connectNumber: [1, 932, 901, 934, 34, 1330, 1320, 5554, 901, 934, 1290, 9330],
  serviceResTime: 17,
  dbResTime: 8,
  name: '生产业务运用系统'
}]

const getSystemData = async () => {
  return new Promise((resolve, reject) => {
    resolve({
      systemNumber: 28,
      serviceNumber: 10,
      personNumber: 21001
    })
  })
}

const getTerminalData = async () => {
  return new Promise((resolve, reject) => {
    resolve({
      POS: 3,
      ATM: 1,
      VTM: 1,
      OHTER: 1
    })
  })
}

const getAllSystemData = () => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

const getSystemDataById = async (sId) => {
  return new Promise((resolve, reject) => {
    let res = data.filter(item => item.id === sId)[0]
    res.serviceResTime = parseInt(Math.random() * 20)
    res.dbResTime = parseInt(Math.random() * 20)
    resolve(res)
  })
}
export default {
  getSystemData,
  getTerminalData,
  getAllSystemData,
  getSystemDataById
}
