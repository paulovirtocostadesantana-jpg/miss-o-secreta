let missoes = [
"Dance por 5 segundos",
"Conte uma piada",
"Imite um animal",
"Faça uma careta",
"Cante uma música",
"Grite missão cumprida"
]

function entrar() {

let nome = document.getElementById("nome").value

if(nome === "") {
alert("Digite seu nome")
return
}

let sorteio = Math.floor(Math.random() * missoes.length)

let missao = missoes[sorteio]

document.getElementById("jogo").innerHTML =
"Jogador: " + nome + "<br><br>Missão: " + missao
}
