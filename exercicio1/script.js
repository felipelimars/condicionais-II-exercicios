// 1) Crie um código que receba um número por **prompt** e verifique se esse número é divisível por 2 **ou** por 3.
//1.1 Utilizando ifs aninhados

const numeroExemplo = Number(prompt(`E divisivel por 2 e por 3?`))
if (exemplo % 2 === 0) {
}   if (numeroExemplo % 3 === 0){
   console.log(`O numero ${numeroExemplo} e divisivel por 2 e por 3`)
} else {
   console.log(`O numero ${numeroExemplo} nao e divisivel por 2 e por 3`)
} 

//1.2 Utilizando um operador lógico para unir duas operações relacionais

if (numeroExemplo % 2 === 0 && numeroExemplo % 3 === 0){
   console.log (`O numero ${numeroExemplo} e divisivel por 2 e por 3`)
}