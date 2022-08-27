let interval;
let array = [];
let pauseBtn = document.getElementById("pause");
let startBtn = document.getElementById("start");
let imageCount = document.getElementById("imgcount");
imageCount.innerText = 0;
function myImages() {
  let url = document.getElementById("image").value;
  if (url == "") {
    alert("Please provide some image url");
  } else {
    array.push(url);
    console.log(array);
    imageCount.innerText = array.length;
    document.getElementById("image").value = "";
  }
}
let count = 0;
let container = document.getElementById("container");
function start() {
  let speed = document.querySelector("#speed").value;

  if (speed === "") {
    alert("Please Enter Time");
  }
  if (speed !== "") {
    startBtn.style.backgroundColor = "red";
    pauseBtn.style.backgroundColor = "green";
    startBtn.style.color = "white";
    pauseBtn.style.color = "white";

    let img = document.createElement("img");
    img.setAttribute("class", "images");
    img.src = array[count];
    container.append(img);
    count++;

    interval = setInterval(() => {
      container.innerHTML = null;

      container.append(img);
      img.src = array[count];
      count++;
      if (count === array.length) {
        count = 0;
      }
    }, speed * 1000);
  }
}

function pause() {
  const image = document.querySelector(".images");

  console.log("image", image);
  clearInterval(interval);
  startBtn.style.backgroundColor = "green";
  pauseBtn.style.backgroundColor = "red";
}
