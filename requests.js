//const url = 'http://put-a-pin-on-it.herokuapp.com'
const url = 'http://localhost:3000'
const locationUrl = 'https://maps.googleapis.com/maps/api/geocode'
const sheetsUrl = 'https://sheets.googleapis.com/v4/spreadsheets'
const key = 'key=AIzaSyDMxY1rQgAG7PruMhTZDNHMXDZ3nT_mUNc'

window.Request = {
  displayLogs () {
    return axios.get(`${url}/logs`)
  },
  displayMaps () {
    return axios.get(`${url}/maps`)
  },
  showMap (id) {
    return axios.get(`${url}/maps/${id}`)
  },
  showLog (id) {
    return axios.get(`${url}/logs/${id}`)
  },
  create (body) {
    return axios.post(`${url}/maps`, body)
  },
  destroy (id) {
    return axios.delete(`${url}/${id}`)
  },
  update (id, body) {
    return axios.patch(`${url}/${id}`, body)
  },
  getSheets (id, sheet){
    return axios.get(`${sheetsUrl}/${id}/values/${sheet}?${key}`)
  },
  addLogs (body) {
    return axios.post(`${url}/logs`, body)
  },
  getLocations(lat, long){
    return axios.get(`${locationUrl}/json?latlng=${lat},${long}&${key}`)
  }

  // clearLogs (id, sheet){
  //   return axios.post(`${sheetsUrl}/${id}/values/${sheet}:clear?${key}`)
  // }
}
