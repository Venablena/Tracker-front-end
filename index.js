const localhostURL = 'http://localhost:3000/logs'
const herokuURL = 'https://tracker-app.herokuapp.com/logs'
const baseURL = window.location.href.includes('herokuapp') ? herokuURL : localhostURL

allLogs()
