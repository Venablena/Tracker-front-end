var map
var bounds
window.mapMarkers

function initMap(array) {
  const center = {lat :0, lng :0}
  const zoom = 16
  map = new google.maps.Map(document.getElementById("map"), {
    center, zoom
  })
  // auto-size the map to display all markers
  bounds = new google.maps.LatLngBounds()
  // create an array of markers that can be stored with the map
  mapMarkers = makeMarkers(array)
  accessMarkers(mapMarkers)
  map.fitBounds(bounds)
  map.panToBounds(bounds)
  return mapMarkers
}

function makeMarkers(array) {
  return array.map(item => {
    let marker = new google.maps.Marker({
        position: {lat: item.lat, lng:item.long},
        map: map,
        animation: google.maps.Animation.DROP,
        label: item.tag,
        id: item.id
        // icon:
      })
    // sets the map borders to fit the new marker
    mapBounds(marker)
    //adds info overlay on the marker
    let infoWindow = addInfo(item)
    marker.addListener('click', () => {
      infoWindow.open(map, marker)
    })
    return marker
  })
}

function accessMarkers(array){
  array.forEach((marker, index, array) => {
    //activates the removeMarker function
     marker.addListener('click', () => {
      removeMarker(marker, index, array)
    })
  })
}

function addInfo(item){
  return new google.maps.InfoWindow({
    id: item.id,
    content: `${item.tag} : ${item.time}<br>${item.description}<a href="#" class="remove-marker" id=${item.id}>Remove</a>`
  })
}

function removeMarker(marker, index, array){
   document.querySelectorAll(".remove-marker").forEach(el => google.maps.event.addDomListener(el, 'click', (event) => {
     marker.setMap(null)
      return array.splice(index, 1)
   }))
}

function mapBounds(marker){
  let loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng())
  return bounds.extend(loc)
}
