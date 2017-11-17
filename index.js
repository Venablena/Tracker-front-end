const localhostURL = 'http://localhost:3000/logs'
const herokuURL = 'http://put-a-pin-on-it.herokuapp.com/'
const baseURL = window.location.href.includes('herokuapp') ? herokuURL : localhostURL

allLogs()
createMap()
