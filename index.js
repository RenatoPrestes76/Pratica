const slider1 = document.getElementById("peso-p");
const slider2 = document.getElementById("altura-a");
const btn = document.getElementById("calcular");
const res = document.getElementById("resultado");

btn.onclick = ()=>{

console.log(slider1.value)

  let p = parseFloat(slider1.value);
  let a = parseFloat(slider2.value);
  let imc = p / (a*a)

  res.innerHTML = `IMC: ${imc.toFixed(2)}`

}
