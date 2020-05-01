"use strict";
//a function to calculate bmi and pop up modal when myBtn is clicked 
function add() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    // Get the button that opens the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Declaration of variables 
    var height = Number(document.getElementById('height').value);
    var weight = Number(document.getElementById('weight').value);
    var weist = Number(document.getElementById('weist').value);
    var neck = Number(document.getElementById('neck').value);
    var bmi = weight / (height * height);

    // Statements diplayed in the modal depending on the value of bmi
    if ((bmi > 15 ) && (bmi <= 18.5)) {
      document.getElementById('result').innerHTML =(`Your BMI is=>` + bmi + 
                                                    `<br><br>It shows that you are a underweight. It's likely that you're not consuming a healthy, balanced diet, which can lead 
                                                    to you lacking nutrients that your body needs to work properly. <br><br>
                                                    Healthy tip => Choose nutrient-rich foods, try smoothies and shakes, watch when you drink, make every bite count, top it off, have an occasional treat and exercise.`);
    }
    else if ((bmi <= 24.9) && (bmi > 18.5)) {
     document.getElementById('result').innerHTML =(`Your BMI is=>` + bmi + 
                                                   `<br><br>It shows that you are a healthy weight. This means that you are less likely to develop heart disease, type 2 diabetes.<br> <br>
                                                   Healthy tip => Keep eating well and tking regular exercise. It’s important to keep up these healthy habits.`);
    }
    else if ((bmi <= 30) && (bmi > 24.9)) {
      document.getElementById('result').innerHTML =(`Your BMI is=>` + bmi + 
                                                    `<br><br>Its shows that you are a overweight. You are consuming more calories than your body needs which it ends up storing as fat.<br><br>
                                                     Healthy tip => You need to reduce the amount of calories you take daily a bit and exercise a little bit more.`);
    }
    else if ((bmi > 30) && (bmi < 50)) {
     document.getElementById('result').innerHTML =(`Your BMI is=>` + bmi + 
                                                   `<br><br>It shows that you are a obese. This means that you are more likely to develop heart disease, type 2 diabetes. <br><br>
                                                   You are consuming way more calories than your bodyneeds which it ends up storing as fat. 
                                                   <br><br>Healthy tip => You need to reduce the amount of calories you take daily and exercise more and try to have Whole grains, vegetables, whole fruits (not fruit juices),nuts, seeds, beans, and other healthful sources of protein.`);
    }
    
    return false;
}

//event listner that evoke the add function when myBtn is clicked
document.getElementById('myBtn').addEventListener('click', add);


