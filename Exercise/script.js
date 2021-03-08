let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) { // verifica se o numero está entre 1 e 100
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n))!= -1) {
        return true
    } else {
        return false
    }

}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { // verifica se é um numero e se já está na lista
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado`
       lista.appendChild(item) // dando a confirmação visual da adição na lista
       res.innerHTML = '' // limpando o resultado caso mais um número seja adicionado
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // limpa o campo para escrever outro numero
    num.focus() // coloca o cursor piscando novamente no campo
}

function finalizar() {
    if (valores.length == 0) {
        windows.alert('Insira valores antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) { // encontrando maior e menor valores
            soma += valores[pos] // somando todos os valores
            if(valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}