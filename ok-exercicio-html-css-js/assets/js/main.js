function meuEscopo() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  // Limpa o valor do input3

  // const pessoas = [];

  function recebeEventoForm(e) {
    resultado.innerHTML = '';

    e.preventDefault();
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    // resultado.innerHTML = ""
   

    const pessoa = {
      peso: parseFloat(peso.value),
      altura: parseFloat(altura.value),
      imc: parseFloat(peso.value / (altura.value * altura.value)),
    };

    if (pessoa.imc <= 18) {
      resultado.innerHTML += `Abaixo do peso`;
    } else if (pessoa.imc >= 18.5 && pessoa.imc <= 24.9) {
      resultado.innerHTML += `Peso normal`;
    } else if (pessoa.imc >= 25 && pessoa.imc <= 29.9) {
      resultado.innerHTML += `Acima do peso`;
    } else if (pessoa.imc >= 30 && pessoa.imc <= 34.9) {
      resultado.innerHTML += `Obesidade grau I`;
    } else if (pessoa.imc >= 35 && pessoa.imc <= 39.9) {
      resultado.innerHTML += ` Obesidade grau II`;
    } else if (pessoa.imc >= 40) {
      resultado.innerHTML += `Obesidade grau III`;
    } else {
      resultado.innerHTML += `Valor inválido `;
    }

    console.log(parseFloat(peso.value / (altura.value * altura.value)));

    // pessoas.push(pessoa);

    resultado.innerHTML += `<p>  ${pessoa.imc.toFixed(2)} </p>`;
    altura.value = "";
    peso.value = "";
    console.log(pessoa);
  }

  form.addEventListener('submit',  recebeEventoForm);
}
meuEscopo();
