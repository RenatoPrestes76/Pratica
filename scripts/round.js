var slider1 = document.getElementById("peso.p");
var output1 = document.getElementById("demo");
output1.innerHTML = slider1.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;

  slider1.oninput = function() {
    output1.innerHTML = this.value;
  }
}
var slider2 = document.getElementById("altura.a");
var output2 = document.getElementById("demo");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;

  slider2.oninput = function() {
    output2.innerHTML = this.value;
  }
}