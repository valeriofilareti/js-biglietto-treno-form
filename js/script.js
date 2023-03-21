
const btn = document.querySelector('button');
const outputName = document.getElementById('output-name');
const outputPrice = document.getElementById('output-price');
const outputTicket = document.getElementById('output-ticket');
const outputCp = document.getElementById('output-cp');
const outputCarrozza = document.getElementById('output-carrozza');


const minCp = 9000;
const maxCp = 9999;
const minCar = 1;
const maxCar = 10;
const cpCode = Math.floor(Math.random() * (maxCp - minCp + 1) + minCp);
const carrozza = Math.floor(Math.random() * (maxCar - minCar + 1) + minCar);

btn.addEventListener('click', function(){
  let name = document.getElementById('name').value;
  let km = document.getElementById('km').value;
  let age = document.getElementById('age').value;

  price = km * 0.21;

  if(age == 'Junior') {
    price -= price / 100 * 40;
    outputTicket.innerHTML = 'Offerta Junior';
  }else if(age == 'Senior'){
    price -= price / 100 * 60;
    outputTicket.innerHTML = 'Offerta Silver';
  }else{
    price = price;
    outputTicket.innerHTML = 'Biglietto Standard';
  }

  outputName.innerHTML = name;
  outputPrice.innerHTML = price.toFixed(2);
  outputCp.innerHTML = cpCode;
  outputCarrozza.innerHTML = carrozza;
})

