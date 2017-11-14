function allLogs() {
    Request.displayAll()
      .then(({ data: logsArray }) => {
        initList(logsArray)
        initMap(logsArray, 14)
    })
  }

function initList(array) {
  let content = array.map(item => {
    return createTable(item)
  })
  content = content.join(' ')
  return document.querySelector('#list-view').innerHTML = content
}
