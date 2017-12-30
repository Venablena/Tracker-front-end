function allLogs() {
  loadLogs()
  loadMaps()
}

function loadLogs(){
  return Request.displayLogs()
    .then(({ data: logsArray }) => {
      document.querySelector('#list-view').innerHTML = init(logsArray, createTable)
      removeLogs('.delete')
      // initMap(logsArray)
      markMap('.add')
      loadLocations()
  })
}

//Load locations from Google maps API and inject them into location <td>
function loadLocations(){
  document.querySelectorAll('.location').forEach(el => {
    const lat = el.innerHTML.slice(0, el.innerHTML.indexOf('/'))
    const long = el.innerHTML.slice( el.innerHTML.indexOf('/')+ 1, el.innerHTML.length)
    defineLocation(lat, long, el)
  })
}

function defineLocation(lat, long, el){
 return Request.getLocations(lat, long)
  .then(result => {
    el.innerHTML = result.data.results[0].formatted_address
    // OR result.data.results[0].place_id)
  })
}

//Show on the list wich markers are displayed on the map
function matchMap(array) {
  array.forEach(item => {
    return matchRow(item)
  })
}

function matchRow(row){
  const id = row.id.replace("row-", "")
  row.classList.remove("mappy")
  if(mapMarkers.includes(parseInt(id))){
    row.classList.add("mappy")
  }
}

//Prepares the data to be injected in the inner HTML
function init(array, callback) {
  let content = array.map(item => {
    return callback(item)
  })
  return content.join(' ')
}

//Loads saved maps
function loadMaps() {
  Request.displayMaps()
    .then(({data}) => {
      document.querySelector('#saved-maps').innerHTML = init(data, savedMaps)
      addMapEvents(".nav-link")
    })
}



function addMapEvents(selector){
  document.querySelectorAll(selector).forEach(link => {
    link.addEventListener('click', (event) => {
      document.querySelector("#map-title").innerHTML = event.target.textContent
      Request.showMap(event.target.id)
        .then((result) => {
          initMap(result.data);
        })
    })
  })
}

function removeLogs(selector){
  document.querySelectorAll(selector).forEach(link => {
    link.addEventListener('click', (event) => {
      const id = event.target.id.replace("delete-", "")
      Request.destroy(id)
        .then(() => {
          Request.displayLogs()
            .then(({ data: logsArray }) => {
              document.querySelector('#list-view').innerHTML = init(logsArray, createTable)
         })
      })
    })
  })
}

//Adds a marker to the map from the list
function markMap(selector){
  document.querySelectorAll(selector).forEach(link => {
    link.addEventListener('click', (event) => {
      const id = event.target.id.replace("add-", "")
      //if(isNewMarker(parseInt(id))){
        Request.showLog(id)
        .then(({data}) =>{
          makeMarker(data)
          matchMap(document.querySelectorAll('.log-row'))
        })
      //}
    })
  })
}

// function isNewMarker(id){
//   if(mapMarkers.includes(id)) {
//     alert("This pin is already on the map.")
//     return false
//   }
//   return mapMarkers.push(id)
// }
