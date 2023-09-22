function meuEscopo() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  
  const pessoas = []
  
  function recebeEventoForm (e) {

    e.preventDefault();
    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    
    const pessoa = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    } 
    pessoas.push(pessoa)

    // resultado.innerHTML += pessoa;
    resultado.innerHTML += `<p> ${pessoa.nome}</p>`;
    resultado.innerHTML += `<p> ${pessoa.sobrenome}</p>`;
    resultado.innerHTML += `<p> ${pessoa.peso}</p>`;
    resultado.innerHTML += `<p> ${pessoa.altura}</p>`;
   

    
    console.log(pessoa);
    console.log(pessoas);
    console.log(pessoas.length);
    console.log(resultado)
  }
   
  form.addEventListener('submit', recebeEventoForm)
}
meuEscopo();