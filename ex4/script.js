let nomeCompleto = prompt("Digite o seu nome completo");

if (nomeCompleto) {
   
    let quantidadeLetras = nomeCompleto.replace(/ /g, "").length;
   
    console.log(`Seu nome tem ${quantidadeLetras} letras.`);
 } 