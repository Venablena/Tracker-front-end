function allLogs() {
    Request.displayLogs()
      .then(({ data: logsArray }) => {
        document.querySelector('#list-view').innerHTML = init(logsArray, createTable)
        initMap(logsArray, 14)
    })
    Request.displayMaps()
      .then(({data}) => {
        console.log(data);
        document.querySelector('#saved-maps').innerHTML = init(data, savedMaps)
      })
      // .then(({data}) => {
      //   data.forEach(item => {
      //
      //   })
      // })
  }

function init(array, callback) {
  let content = array.map(item => {
    return callback(item)
  })
  return content.join(' ')
}
