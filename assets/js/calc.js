

//mask form
$(document).ready(function () {

  $('#inputPeso').mask("000");

  $('#inputAlt').mask("0.00");

});



function calc() {
  let weight = document.getElementById('inputPeso').value.replace(/,/g, '.');

  let height = document.getElementById('inputAlt').value.replace(/,/g, '-', '.');

  if (weight == '' || height == '') {
    alert('Porfavor preencha os dados')
  }

  results = (weight / (height * height))

  results = results.toFixed(2).replace(/\./g, ',');

  document.getElementById('calcIMC').innerHTML = results

  console.log(results);

}

