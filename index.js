// Code your solutions in this file
let cards = ['Guadalupe', 'Ollie', 'Aki'];
  function writeCards(cards) {
    let array = [];
    for (let i = 0; i < cards.length; i++) {
    array.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
   debugger; 
  } 
   return array;
}


function countDown(startNumber){
        while (startNumber >= 0) {
        console.log(startNumber);
        startNumber --;
    
    }
}

countDown(10)