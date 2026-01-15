// Write a function that returns true if I can eat the ice cream
//  The function has 1 parameter representing an ice cream object
//  I can eat the ice cream if it is lactose-free and contains less than 10 grams of sugar

function canEat(iceCream) {
    /* if (iceCream.lactoseFree === true && iceCream.gramsOfSugarPerScoop < 10 && iceCream.gramsOfSugarPerScoop !== 10){
        return true
    }
    else{
        return false
    } */

        const isLactoseFree = iceCream.lactoseFree
        const isLessThan10GramsSugar = iceCream.gramsOfSugarPerScoop < 10  && iceCream.gramsOfSugarPerScoop !== 10  

        return isLactoseFree && isLessThan10GramsSugar 
}




// Return names of ice creams which I can eat
function whichIceCreamsCanIEat (iceCreams) {
    const iceCreamsICanEat = []
    
    //look at each ice cream one by one
    for(const iceCream of iceCreams) {
        // ask the question - can I eat this ice cream?
        if(canEat(iceCream)) {
            iceCreamsICanEat.push(iceCream.flavour)
        }
        // if I can eat it, make a note of the name
    }
    // I have the note with all the ice creams I can eat

    return iceCreamsICanEat

}


const iceCream1 = {
  flavour: "Vanilla",
  lactoseFree: false,
  gramsOfSugarPerScoop: 12,
};

const iceCream2 = {
  flavour: "Mango Sorbet",
  lactoseFree: true,
  gramsOfSugarPerScoop: 10,
};

const iceCream3 = {
  flavour: "Coconut",
  lactoseFree: true,
  gramsOfSugarPerScoop: 8,
};

const iceCream4 = {
  flavour: "Strawberry",
  lactoseFree: false,
  gramsOfSugarPerScoop: 8,
};

const iceCream5 = {
  flavour: "Lemon Sorbet",
  lactoseFree: true,
  gramsOfSugarPerScoop: 7,
};



const allIceCreams = [
    iceCream1,
    iceCream2,
    iceCream3,
    iceCream4,
    iceCream5

]

const iceCreamsICanEat = whichIceCreamsCanIEat(allIceCreams)
console.log(iceCreamsICanEat)