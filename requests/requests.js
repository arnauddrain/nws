function reqListener() {
  JSON.parse(this.responseText).forEach((beverage) => {
    const node = document.createElement("li");
    node.className = "list-group-item";
    const text = document.createTextNode(beverage.title);
    node.appendChild(text);

    document.getElementById("beverages").appendChild(node);
  });
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "https://api.sampleapis.com/coffee/hot", true);
oReq.send();
