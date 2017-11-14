function updateForm(event){
  id = event.target.id
  Request.find(id)
  .then((result) =>{
    document.querySelector("#view").innerHTML = formTemplate('PATCH', result.data)
    document.querySelector(`#event-form${id}`).addEventListener('submit', updateEvent)
    document.querySelector('#cancel').addEventListener('click', allEvents)
  })
}

function updateEvent(event){
  event.preventDefault()
  body = findEvent.values()
  const id = event.target.id.replace('event-form', '')
  console.log(id);
  console.log(body);
  Request.update(id, body)
    .then(() => allEvents())
    .catch(error => {
      console.error(error.response.data.error)
    })
}
