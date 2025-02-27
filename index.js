// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
    console.log(cats)
}

destructivelyAppendCat("Ralph")

function destructivelyPrependCat(name){
    cats.unshift(name)
}
destructivelyPrependCat("George")

function destructivelyRemoveLastCat(){
    cats.splice(cats.length - 1)
}
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat(){
    cats.splice(0,1)
}
destructivelyRemoveFirstCat()

function appendCat(name){
    let appendedCats = [...cats,name]
    return appendedCats
}
appendCat("George")

function prependCat(name){
    let appendedCats = [name,...cats]
    return appendedCats
}
prependCat("Scott")

function removeLastCat(){
    let newCats = cats.slice(0, cats.length -1)
    return newCats
}
removeLastCat()

function removeFirstCat(){
    let newCats = cats.slice(1)
    return newCats
}
removeFirstCat()