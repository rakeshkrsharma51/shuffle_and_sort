let numbers = [];
function shuffle() {
  let generateNo = true;
  numbers.length = 0;
  while (generateNo) {
    let no = Math.floor(Math.random() * 10);
    if (no > 0 && !numbers.includes(no)) {
      numbers.push(no);
    }
    if (numbers.length === 9) {
      break;
    }
  }
  display(numbers);
}

function sort() {
  numbers.length = 0;
  numbers = [...[1, 2, 3, 4, 5, 6, 7, 8, 9]];
  display(numbers);
}

function display(data) {
  let width = window.screen.width;
  getColors(data);

  let parentDiv = document.getElementById("parent");
  parentDiv.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    div.id = "card" + data[i];
    div.className = "card";
    if (width > 375) {
      div.style.backgroundColor = getColors(data[i]);
    } else {
      div.style.borderLeft = "10px solid " + getColors(data[i]);
    }
    div.innerText = data[i];
    parentDiv.appendChild(div);
  }
}

function getColors(input) {
  let color = "";
  switch (input) {
    case 1:
      color = "#2B8EAD";
      break;
    case 2:
      color = "#72C3DC";
      break;
    case 3:
      color = "#2F454E";
      break;
    case 4:
      color = "#72C3DC";
      break;
    case 5:
      color = "#2F454E";
      break;
    case 6:
      color = "#B6C4C5";
      break;
    case 7:
      color = "#B6C4C5";
      break;
    case 8:
      color = "#1E94A2";
      break;
    case 9:
      color = "#2F454E";
      break;
  }
  return color;
}

window.onload = () => sort();
// window.onresize = () => display(numbers);
