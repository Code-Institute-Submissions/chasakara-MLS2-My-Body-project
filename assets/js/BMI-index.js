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
  
  if (bmi <= 18.5) {
    console.log('Your Body mass index is:',+ bmi  +  'You are Underweight');
   }
  else if ((bmi <= 24.9) && (bmi > 18.5)) {
    console.log('Your Body mass index is:',+ bmi  +  'You are Normal');
  }
  else if ((bmi <= 30) && (bmi > 24.9)) {
   console.log('Your Body mass index is:',+  bmi  +  'You are Overweight');
  }
  else if (bmi > 30) {
    console.log('Your Body mass index is:',+ bmi  +  'You are Obese');
  }
document.getElementById('result').innerHTML = bmi
  return false;

}
document.getElementById('myBtn').addEventListener('click', add);


