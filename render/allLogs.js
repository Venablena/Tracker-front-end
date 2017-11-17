function allLogs() {
    Request.displayLogs()
      .then(({ data: logsArray }) => {
        document.querySelector('#list-view').innerHTML = init(logsArray, createTable)
        removeLogs('.delete')
        initMap(logsArray)
        markMap('.add')
    })
    loadMaps()
  }

function init(array, callback) {
  let content = array.map(item => {
    return callback(item)
  })
  return content.join(' ')
}

function loadMaps() {
  Request.displayMaps()
    .then(({data}) => {
      document.querySelector('#saved-maps').innerHTML = init(data, savedMaps)
      addMapEvents(".list-group-item-action")
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

function markMap(selector){
  document.querySelectorAll(selector).forEach(link => {
    link.addEventListener('click', (event) => {
      const id = event.target.id.replace("add-", "")
      //saves the marker in an array used to render the map
      //if(isNewMarker(parseInt(id))){
        Request.showLog(id)
        .then(({data}) =>{
          return makeMarker(data)
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
