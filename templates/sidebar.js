function sidebarItem (item) {
  return `
    <a href="#/events/${item.id}" class="list-group-item list-group-item-action">
      ${item.name}
    </a>
  `
}

function sidebarTemplate (menu) {
  const opening = `<ul class="list-group">`
  const closing = `</ul>`
  const items = menu.map(sidebarItem).join('')

  return opening + items + closing
}
