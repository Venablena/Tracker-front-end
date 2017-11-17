function allLogs() {
  loadLogs()
  loadMaps()

}

function loadLogs(){
  return Request.displayLogs()
    .then(({ data: logsArray }) => {
      document.querySelector('#list-view').innerHTML = init(logsArray, createTable)
      removeLogs('.delete')
      initMap(logsArray)
      markMap('.add')
  })
}

function matchMap(array) {
  array.forEach(item => {
    return matchRow(item)
  })
}

function matchRow(row){
  const id = row.id.replace("row-", "")
  console.log("hi");
  row.classList.remove("mappy")
  if(mapMarkers.includes(parseInt(id))){
    row.classList.add("mappy")
  }
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
