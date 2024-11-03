// Programm will log a new transfer rumor everytime it is runned
// Create variable & arrays with data for the message

let players = ['Davie Selke', 'Jamal Musiala', 'Florian Wirtz', 'Julian Brandt', 'Timo Becker', 'Benedikt Hollerbach'];
let clubs = ['Real Madrid', 'Union Berlin', 'FC Bayern München', 'FC Arsenal', 'FC Barcelona', 'FC Schalke 04', 'Hamburger SV'];
let value = Math.floor(Math.random()*251);


// add a function to create a message with random parts from each variable declared above
const createMessage = () => {
    let player = players[Math.floor(Math.random()*players.length)];
    let club = clubs[Math.floor(Math.random()*clubs.length)];
    let message = `${player} might be transferring to ${club} for around ${value} million euros. But that's just my opinion...`;
    console.log(message);
}


// console.log(players);
// console.log(clubs);
// console.log(value);
createMessage();