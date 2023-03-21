
const btn = document.querySelector('button');
const outputName = document.getElementById('output-name');
const outputPrice = document.getElementById('output-price');
const outputTicket = document.getElementById('output-ticket');

btn.addEventListener('click', function(){
  const name = document.getElementById('name').value;
  const km = document.getElementById('km').value;
  const age = document.getElementById('age').value;
  price = km * 0.21;

  if(age == 'Junior') {
    price -= price / 100 * 40;
  }else if(age == 'Senior'){
    price -= price / 100 * 60;
  }

  outputName.innerHTML = name;
  outputPrice.innerHTML = price;
  outputTicket.innerHTML = age;
})

