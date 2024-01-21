let estudante;

if (1 > 0) {
    estudante = 'Caroline';
    console.log(estudante);
}

console.log(estudante);

// escopo de bloco

if (1 > 0) {
    let nome = 'Ana';
    console.log(nome); // ‘Ana’
  }
  
  // variável `nome` não está acessível
  console.log(nome); // Error: nome is not defined
  