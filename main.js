const isCat = true
let imie = "kasia ma psa"

imie = "kasia ma kota"
const liczba = 46 
console.log("~ file main.js ~ line 6 ~liczba",liczba)
console.log("imie", imie)
console.log ( "30" + "40" )
console.log(45 + 50)
const numer = 40 
const jeden = 50 
const wynik = numer + jeden 
console.log(wynik)

const nazwa = "Jan"
const nazwisko = "Owca"
console.log(nazwa, nazwisko)

const tablica = ["Caedmo", "Bobalt", "Allan", "Hord", "Derls", "Roarr", "Rafr", "Cara", "Daro" ,"Dregor", "Wolwer", "Nafar", "Agar", "Helken", "Konard", "Schir", "Axim", "Cavar", "Aldr", "Valara", "Zigmun" ] 
console.log("imię 0", tablica[0], )
console.log("imię 1", tablica[1], )
console.log("imię 2", tablica[2], )
console.log("imię 3", tablica[3], )
console.log("imię 4", tablica[4], )
console.log("imię 5", tablica[5], )
console.log("imię 6", tablica[6], )
console.log("imię 7", tablica[7], )
console.log("imię 8", tablica[8], )
console.log("imię 9", tablica[9], )
console.log("imię 10", tablica[10], )
console.log("imię 11", tablica[11], )
console.log("imię 12", tablica[12], )
console.log("imię 13", tablica[13], )
console.log("imię 14", tablica[14], )
console.log("imię 15", tablica[15], )
console.log("imię 16", tablica[16], )
console.log("imię 17", tablica[17], )
console.log("imię 18", tablica[18], )
console.log("imię 19", tablica[19], )
console.log("imię 20", tablica[20], )

tablica.forEach((item) => {
    console.log("stare", item )
     console.log("nowe","Henryk" )
})
const noweImiona = tablica.map(item => item = "Henryk")
console.log(noweImiona)



const tablicaLiczb = new Array(100,200,300,400,500)
console.log(tablicaLiczb)


const wiekszeOdJednegonever = tablicaLiczb.every(item => item > 1)

tablica.push(666)

for(let i = 0; i < 20; i++) {
    console.log(i)
}

/**for(let k = 0; k < 100; k++) {
    console.log(k)
}*/

const liczDo99 = new Array()
for(let k = 0; k < 100; k++) {
liczDo99.push(k + 1) 
}

console.log(liczDo99)

const liczPazyscie = new Array()
for(let l = 0;l < 100; l++){
    liczPazyscie.push(l * 2 + 2)
}
console.log(liczPazyscie)

let indeksLiczby
liczPazyscie.forEach((item, indeks) => {
    if(item === 88 ){
        indeksLiczby = indeks
    }
})
console.log(indeksLiczby,liczPazyscie )

const liczNiePazyscie = new Array()
for(let p = 0 ;p  < 1000; p++){
    liczNiePazyscie.push(p *3 + 3  )
}
console.log(liczNiePazyscie)