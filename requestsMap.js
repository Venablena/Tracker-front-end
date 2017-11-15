const url = 'http://localhost:3000/maps'

window.RequestMaps = {
  displayAll () {
    return axios.get(`${url}`)
  },
  find (id) {
    return axios.get(`${url}/${id}`)
  },
  create (body) {
    return axios.post(`${url}`, body)
  },
  destroy (id) {
    return axios.delete(`${url}/${id}`)
  },
  update (id, body) {
    return axios.patch(`${url}/${id}`, body)
  }
}
