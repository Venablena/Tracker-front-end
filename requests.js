const url = 'http://put-a-pin-on-it.herokuapp.com'

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
  }
}
