// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const appendNewCats = [...cats];
    appendNewCats.push(name);
    return appendNewCats;
}

function prependCat(name){
    const prependNewCat = [...cats];
    prependNewCat.unshift(name);
    return prependNewCat;
}

function removeLastCat(){
    const removeLastC = [...cats];
    removeLastC.pop();
    return removeLastC;
}

function removeFirstCat(){
    const removeFirstC = [...cats];
    removeFirstC.shift();
    return removeFirstC;
}