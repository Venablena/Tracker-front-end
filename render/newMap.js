function createMap () {
  document.querySelector("#save-map").addEventListener('click', () => {
    const markers = mapMarkers.map(marker => marker.id)
    let body = {map: {name: "MyMap"}, markers: markers}
    Request.create(body)
    .then(result => document.querySelector("#map-title").innerHTML = result.data.name)
    .catch(error => console.error(error))
  })
}
