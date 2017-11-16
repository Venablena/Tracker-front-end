function savedMaps (item) {
  return `
    <a href="#/maps/${item.id}" class="list-group-item list-group-item-action" id=${item.id}>
      ${item.name}
    </a>
  `
}
