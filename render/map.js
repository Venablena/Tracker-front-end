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

function markerConstructor(item) {
  //var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/'
  return new google.maps.Marker({
      position: {lat: item.lat, lng:item.long},
      map: map,
      animation: google.maps.Animation.DROP,
      label: defineLabel(item.tag),
      id: item.id,
      //icon: iconBase + defineTag(item.tag)
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

function addInfo(item){
  return new google.maps.InfoWindow({
    id: item.id,
    content: `${defineLabel(item.tag)}<br>${item.dateTime} <br>I could add a description here...${item.description}<br><a href="#" class="remove-marker" id=${item.id}>Remove</a>`
  })
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
  let tag = ""
  if(item === "click") {
    tag = `👍`}
  if(item === "double_click") {
    tag = `💛`
  }
  if(item === "hold") {
    tag = `👎`
  }
  return tag
}
