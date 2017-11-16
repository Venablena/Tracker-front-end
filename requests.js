const url = 'http://localhost:3000'

window.Request = {
  displayLogs () {
    return axios.get(`${url}/logs`)
  },
  displayMaps () {
    return axios.get(`${url}/maps`)
  },
  find (id) {
    return axios.get(`${url}/${id}`)
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
