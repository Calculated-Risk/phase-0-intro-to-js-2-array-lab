const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

//Array functions destructivelyRemoveLastCat()
//removes the last cat from the cats array:

function destructivelyRemoveLastCat(){
    cats.pop();
}

//Array functions destructivelyRemoveFirstCat()
//removes the first cat from the cats array:

function destructivelyRemoveFirstCat(){
    cats.shift();
}

//Array functions appendCat(name)
//appends a cat to the cats array and returns a new array, leaving the cats array unchanged:

function appendCat(name){
   const newCats = [...cats]
   newCats.push(name)
   return newCats
}

//Array functions prependCat(name)
//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged:

function prependCat(name){
    const catsNew = [...cats];
    catsNew.unshift(name);
    return catsNew
}

//Array function  removeLastCat()
// removes the last cat in the cats array and returns a new array, leaving the cats array unchanged

function removeLastCat(name){
    const lastCat = [...cats];
    lastCat.pop()
    return lastCat
}

//Array functions removeFirstCat()
// removes the first cat from the cats array and returns a new array, leaving the cats array unchanged:

function removeFirstCat(name){
    const firstCat = [...cats];
 firstCat.shift()
 return firstCat;
}