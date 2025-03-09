// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    let appendCatS = [...cats,name]
    return appendCatS
    
}
appendCat("George")

function prependCat(name){
    let prependCats =[ name,...cats]
    return prependCats
    
}
prependCat("Arnold")

function removeLastCat(){
   return cats.slice(0,cats.length-1)
}

function removeFirstCat(){
   return cats.slice(1)
}