function createMap () {
  document.querySelector("#save-map").addEventListener('click', () => {
    let body = {map: {name: "MyMap"}, markers: mapMarkers}
    Request.create(body)
    .then(() => {
      loadMaps()
    })
    .catch(error => console.error(error))
  })
}
