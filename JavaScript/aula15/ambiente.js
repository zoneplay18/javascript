let num = [5, 7, 8, 9, 1]
num.push(2)
num.sort()
console.log(num)
console.log(`O meu vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetro é ${num[0]}`)
let pos = num.indexOf(1)
if (pos == -1) {
    console.log('O veotr não foi encontrado')
} else {
    console.log(`Ele está na posição ${pos}`)
}