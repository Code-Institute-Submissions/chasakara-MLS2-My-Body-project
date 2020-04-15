function mybutton(){
$("#button").on('click', function(){
  var height = document.getElementById("height").value;  
  var weight = document.getElementById("weight").value;  
  var result = document.getElementById("results")
  var BMI = (weight/(height*height)); 
  result.innerHTML = BMI;
  
if (BMI<=18.5){
console.log("You are Underweight");
}
else if ((BMI<=24.9) && (BMI>18.5)){
console.log("You are Normal");
}
else if ((BMI<=30) && (BMI>24.9)){
console.log("You are Overweight");
}
else if (BMI>30){
console.log("You are Obese");
}
})
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}