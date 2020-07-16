import constant from './constant'

const data = [{
  id: 1,
  cacheRate: 30,
  cpuRate: 75,
  storeRate: 0.45,
  storeIO: 56,
  processNumber: 48,
  jdbcNumber: 55,
  name: '营销业务运用系统'
}, {
  id: 2,
  cacheRate: 23,
  cpuRate: 55,
  storeRate: 0.75,
  storeIO: 46,
  processNumber: 48,
  jdbcNumber: 55,
  name: '采购业务运用系统'
}, {
  id: 3,
  cacheRate: 25,
  cpuRate: 55,
  storeRate: 0.55,
  storeIO: 56,
  processNumber: 48,
  jdbcNumber: 55,
  name: '服务业务运用系统'
}, {
  id: 4,
  cacheRate: 40,
  cpuRate: 50,
  storeRate: 0.37,
  storeIO: 26,
  processNumber: 48,
  jdbcNumber: 55,
  name: '生产业务运用系统'
}]

const getAllRunSystemData = () => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

const getRunSystemDataById = async (sId) => {
  return new Promise((resolve, reject) => {
    let res = data.filter(item => item.id === sId)[0]
    resolve(res)
  })
}
export default {
  getAllRunSystemData,
  getRunSystemDataById
}
