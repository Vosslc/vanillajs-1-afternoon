


const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

console.log(idInput);
console.log(colorInput);



function setCard() {
  const card = document.getElementById(idInput.value);
  console.log(card);
  card.style.color = colorInput.value;
}
///talk to Aaron about line 13