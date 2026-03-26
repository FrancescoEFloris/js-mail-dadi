// 1. Creare una lista con all'interno alcune mail
// 2. Chiedere all'utente di inserire la sua mail
// 3. Controllare se la mailInserita è uguale a una delle mail nella listaMail
// 4. Se la mail è presente dare un messaggio positivo
// 5. Se alla fine del ciclo nessuna delle mail corrisponde alla mail inserita
//    dare un messaggio negativo

let mailInserita;
let invitato = false;

const listaMail = [`mailuno@yahoo.com`, `maildue@gmail.com`, `mailtre@gmail.com`, `mailciao@yahoo.com`];
mailInserita = prompt(`inserisci la tua mail`);
for (let mailNum = 0; mailNum < listaMail.length; mailNum++) {
    if (listaMail[mailNum] === mailInserita) {
        invitato = true;
        console.log(`La mail appartiene ad un invitato.`);
    }
}
if (invitato === false) {
    console.log(`La mail non appartiene ad un invitato.`);
}