const numero = Number(prompt('Digite o seu número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p> Seu número + 2 é ${numero + 2}. </p>`;
texto.innerHTML += `<p> Raíz quadrada ${numero ** 0.5}. </p>`;
texto.innerHTML += `<p>   é inteiro: ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p> É NaN: ${isNaN(numero)} </p>`;
texto.innerHTML += `<p> Arredondando para baixo é: ${Math.floor(numero)}. </p>`;
texto.innerHTML += `<p> Arredondando para cima é: ${Math.ceil(numero)}. </p>`;
texto.innerHTML += `<p> Com duas casas decimais é: ${numero.toFixed(2)}. </p>`;
