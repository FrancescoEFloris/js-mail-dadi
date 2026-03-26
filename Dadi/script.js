// 1. Generare un numero da 1 a 6 random per il player
// 2. Assegnare il numero ad una variabile
// 3. Generare un numero da 1 a 6 random per il computer
// 4. Assegnare il numero ad una seconda variabile
// 5. Se numPlayer === numPc scrivi in console pareggio
// 6. Se numPlayer > numPc scrivi in console player vince
// 7. Se nessuna delle due scrivi in console computer vince

const numPlayer = Math.ceil(Math.random() * 6 );
const numPc = Math.ceil(Math.random() * 6 );

console.log(`Numero player:`, numPlayer);
console.log(`Numero pc:`, numPc);

if (numPlayer === numPc) {
    console.log(`Pareggio`);
} else if (numPlayer > numPc) {
    console.log(`Player Vince`);
} else {
    console.log(`Pc Vince`);
}