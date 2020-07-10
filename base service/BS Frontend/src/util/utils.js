const formatLocalDateTime = (date) => {
  let newDate = new Date(date + 8 * 3600 * 1000).toISOString()

  return {
    date: newDate.substr(0, 10),
    time: newDate.substr(11, 8)
  }
}

export default {
  formatLocalDateTime
}
