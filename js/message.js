const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
const TYPES = ['h', 'd', 'c', 's'];


Array.prototype.shuffle = function ()  {
    let ary = this; // tableau utilisé ulterieurent quand on appelle la fonction
    let shuffled = []; // melange au depart tableau vide
  
    while(ary.length > 0) {
      let i = Math.floor(Math.random() * ary.length)// ary.length = Math.floor(max)
  
      shuffled.push(ary[i]) // choix des cartes une par une 
      ary.splice(i, 1) //puis on la retire du tableau pour rendre le choix unique
    }
  
    return shuffled // on retourne 
  }
   let hand = VALUES.flatMap(v => TYPES.map(t => v+t)).shuffle().slice(0, 7); 
  //mise en place du random (shuffle) sur 7 cartes avec association des 2 tableaux (type et values)
    
   //hand = ['10d','8d','2d','3h','4h','5d','6d']
   
   
    function analyseDuJeu(hand){
    
    //let cards = hand;
    let cards  = hand; 
     console.log(cards);
    // on recre values et types et on converti le split en string

 
    let values = cards.map( card => VALUES.indexOf(card.slice(0,-1)));
    console.log(values);
    /* on recre un tableau qu'avec les values de la main que l'on compare au 
    tableau d'index VALUES global le slice permet de retirer le type à chaque fois*/
    let types = cards.map( card => TYPES.indexOf(card.slice(-1)) );
    console.log(types);
    /* on recre un tableau type en gardant le dernier element de chaque element de card donc que le type 
      auquel on compare à l'ordre hirarchique de l'index de TYPE*/
    let flush    = types.every(type => type === types[0]);
    //on verifie que c'est le meme type pour chaque card par 
    
    let figures  = VALUES.map( (value,i) => values //on compare les values  pap rapport à la main occurence
                         .filter(j => i === j).length)// on cherche les values identiques si non nouveau tableau 
                         .sort( (x, y) => y - x );// puis orderCards on classe l'ordre des cartes
 
	console.log(flush);
    console.log(figures);
    console.log(figures[0]);
    console.log(figures[1]);
    console.log(figures[2]);
    console.log(figures[3]);
    console.log(figures[4]);
    console.log(figures[5]);
    console.log(figures[6]);
                       
	
 
	

	if (figures[0] === 4) {
        return 'carré' 
        slice(0, 4);
        // tu vérifies l'index de chaque carte restante et on prend la meilleure.
            meilleurecartes(slice(4,7));

    }                   
	else if (figures[0] === 3 && figures[1] === 2){
        return 'isAFull'
    } 
	else if (flush) {
        return 'isAFlush'
    }                            
	
	else if (figures[0] === 3) {
        return 'isAThree'
    }                   
	else if (figures[0] === 2 && figures[1] === 2){
        return 'two-pair'
    } 
	else if (figures[0] === 2) {
        return 'one-pair'
         
    }                  
	else  {
        return 'OrderCards'
    }  
    
}  
                    


 

console.log((hand + ": " + analyseDuJeu(hand) ));

function meilleurecartes(cards){
    for(let i=O, i<cards.length, i++){

        // faire un sort 
    }

    

}