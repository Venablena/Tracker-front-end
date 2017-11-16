function createMap () {
  document.querySelector("#save-map").addEventListener('click', () => {
    const markers = mapMarkers.map(marker => marker.id)
    let body = {map: {name: "MyMap"}, markers: markers}
    Request.create(body)
    .then(() => {
      loadMaps()
    })
    .catch(error => console.error(error))
  })
}
