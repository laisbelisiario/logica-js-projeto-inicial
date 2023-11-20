alert("Boas Vindas ao Nosso site!")
let nome = "Lua"
let idade = 25
let numeroDeVendas = 50
let saldoDisponivel = 1000

let mensagemDeErro = "Erro! Preencha todos os campos" 
alert(mensagemDeErro)

nome = prompt("digite seu nome") 
idade= prompt("Digite sua idade")
if (idade >= 18){
    alert("Você pode tirar a habilitação")
}
else {  
    alert("Você não pode tirar a Habilitação")

}