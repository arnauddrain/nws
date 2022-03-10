function addItemToDOM(item) {
  const node = document.createElement("li");
  node.className = "list-group-item";
  const text = document.createTextNode(item);
  node.appendChild(text);

  document.getElementById("todo").appendChild(node);
}

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.getElementById("input");
  addItemToDOM(input.value);
  input.value = "";
});

const existingItems = window.getItems();
for (var i = 0; i < existingItems.length; i++) {
  addItemToDOM(existingItems[i]);
}
