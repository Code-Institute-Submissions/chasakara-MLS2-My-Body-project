"use strict";

function add() {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];
  btn.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  var height = Number(document.getElementById('height').value);
  var weight = Number(document.getElementById('weight').value);
  var bmi = weight / (height * height);
  document.getElementById('result').innerHTML = bmi
  return false;
}
document.getElementById('myBtn').addEventListener('click', add);


