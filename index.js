const localhostURL = 'http://localhost:3000/'
const herokuURL = 'http://put-a-pin-on-it.herokuapp.com/'
const baseURL = window.location.href.includes('herokuapp') ? herokuURL : localhostURL

document.querySelector("#refresh").addEventListener('click', refreshDB)
//refresh()
allLogs()
createMap()

//get data from Google spreadsheets & send the spreadsheet data to the database
function refreshDB(){
  Request.getSheets('1e1GkbibPFIxJEyuWQsZnudRE2q3rQmTppUXr7-wrP1w', 'sheet1')
    .then((result) => {
      const values =  convert(result.data.values)
      Request.addLogs(values)
    })
    // .then(() => {
    //   Request.clearLogs('1e1GkbibPFIxJEyuWQsZnudRE2q3rQmTppUXr7-wrP1w', 'sheet1')
    })
  // Request.getSheets('1BSRNmpm3OIIWP2qqZ7SN2ONdTNRPWdNNsKFHVO0JhDE', 'sheet1')
  //   .then((result) => {
  //     const values =  convert(result.data.values)
  //     Request.addLogs(values)
  //   })
  // Request.getSheets('1tLuTAy3gFu3iyOaeps9SMXR06HaGZCStHT32ju5Ni4U', 'sheet1')
  //   .then((result) => {
  //     const values =  convert(result.data.values)
  //     Request.addLogs(values)
  //   })
}



function convert(valuesArr){
  return valuesArr.map(array => {
  return {tag: array[0], dateTime: array[1], long: array[2], lat: array[3]}
  })
}
