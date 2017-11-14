function formTemplate (method, item) {
  const btnTxt = method === 'POST' ? 'Create New Event' : 'Update Event'
  return `
    <form id="event-form${item.id}">
      <div class="form-group">
        <label for="title">Event Title</label>
        <input type="text" class="form-control" id="event_title" value="${item.name}">
      </div>
      <div class="form-group">
        <label for="date">Date</label>
        <input type="text" class="form-control" id="date" value="${item.date}">
        <label for="timeStart">Start time</label>
        <input type="text" class="form-control" id="timeStart" value="${item.timeStart}">
        <label for="timeEnd">End time</label>
        <input type="text" class="form-control" id="timeEnd" value="${item.timeEnd}">
        <label for="timeEnd">How often does this event occur?</label>
        <input type="text" class="form-control" id="frequency" value="${item.frequency}">
      </div>
      <div class="form-group">
        <label for="title">Center</label>
        <input type="text" class="form-control" id="center" value="${item.center}">
        <label for="title">Type of Event</label>
        <input type="text" class="form-control" id="type" value="${item.type}">
      </div>
      <div class="form-group">
        <label for="title">Description</label>
        <textarea type="text" rows="12" class="form-control" id="brief">${item.brief}</textarea>
      </div>
      <button type="submit" class="btn btn-info btn-large">${btnTxt}</button>
      <button type="button" class="btn btn-link" id="cancel">Cancel</button>
    </form>
  `
}
// <form id="event-form" action="/events/${item.id}">
