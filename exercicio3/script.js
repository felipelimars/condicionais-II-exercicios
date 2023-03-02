//Exercicio 3) 

//códigos a serem reescritos utilizando (if ternario)

// a)
//if(nome === "José"){
//	console.log("Oi, Zé!")
//} else {
//	console.log("Olá, " + nome)
//}
const nome = prompt(`Qual seu nome?`)
nome === `José` ? console.log(`Oi, Zé`) : console.log(`Olá,` + nome)



// b)
//if(idade >= 18){
//	console.log("Pode tirar carteira de motorista!")
//} else {
//	console.log("Ainda não pode tirar carteira de motorista!")
//}
const idade = Number(prompt(`Digite sua idade:`))
idade >= 18 ? console.log(`Pode tirar a carteira de motorista!`) : (`Ainda não pode tirar carteira de motorista!`)


// utilizei um prompt para perguntar o nome e a idade do usuário para testar os códigos.
