let somaP = 0, somaI = 0, qdtI = 0, qdtP = 0

for (let i = 0; i < 1000; i++) {
    if( 0 ==  (i%2)){
        somaP += i //somaP = somaP + i
        qdtP++
    }
    if( 0 != (i%2)){
        somaI += i
        qdtI++
    }
}
console.log("Soma dos impar = " +somaI)
console.log(`Qdt de impar =  ${qdtI}`)
console.log(`Soma dos par =  ${somaP}`)
console.log(`Qdt de par =  ${qdtP}`)
console.log(`Media dos par =  ${somaP / qdtP}`)
console.log(`Media dos impar =  ${somaI / qdtI}`)

if ((somaP / qdtP) > (somaI / qdtI)) {
    console.log(`A media dos pares são maiores`)
}else{
    console.log(`A media dos impares são maiores`)
}

