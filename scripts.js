let body = document.querySelector("body")
/* document = chamar html
queryselector = seletor pegador */


let tenis = document.querySelector(".imagem-tenis")


function mudarvisual(cor,imagem){
    body.style.background = cor
    tenis.src = imagem 
}