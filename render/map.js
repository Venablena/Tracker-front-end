var map
var bounds
window.mapMarkers = []

function initMap(array) {
  const center = {lat :0, lng :0}
  const zoom = 16
  map = new google.maps.Map(document.getElementById("map"), {
    center, zoom
  })
  // auto-size the map to display all markers
  bounds = new google.maps.LatLngBounds()
  mapMarkers = []
  array.map(item => makeMarker(item))
  map.fitBounds(bounds)
  map.panToBounds(bounds)
  matchMap(document.querySelectorAll('.log-row'))
}

// Let's destructure!
function markerConstructor({ lat, long, tag, id }) {
  return new google.maps.Marker({
      position: {lat: lat, lng: long},
      map: map,
      animation: google.maps.Animation.DROP,
      label: defineLabel(tag),
      id
    })
}

function makeMarker(item) {
  const marker = markerConstructor(item)
  mapMarkers.push(marker.id)
  // sets the map borders to fit the new marker
  mapBounds(marker)
  //adds info overlay on the marker
  let infoWindow = addInfo(item)
  marker.addListener('click', () => {
    infoWindow.open(map, marker)
    const remove = document.querySelector(".remove-marker")
    google.maps.event.addDomListener(remove, 'click', (event) => {
     removeMarker(marker, event.target.id)
    })
  })
  return marker
}

// We can destructure here too!
function addInfo({ tag, date, time, description, id }){
  const content = `${defineLabel(tag)}<br>${date} / ${time}<br>I could add a description here...${description}<br><a href="#" class="remove-marker" id=${id}>Remove</a>`

  return new google.maps.InfoWindow({ id, content })
}

function removeMarker(marker, id){
  marker.setMap(null)
  const index = mapMarkers.indexOf(parseInt(id))
  mapMarkers.splice(index, 1)
  matchMap(document.querySelectorAll('.log-row'))
}

function mapBounds(marker){
  let loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng())
  return bounds.extend(loc)
}

function defineLabel(item){
  // What about an object! This might be easier to export to a different file
  // later on if there were lots of options.
  const labels = { click: `👍`, double_click: `💛`, hold: `👎` }
  
  return labels[item]
}
