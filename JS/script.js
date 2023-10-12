//Creo un array con dentro una lista di mail
//leggo la mail di input scritta nel form al click del bottone
//con un if si vede se la mail è presente o no nella lista delle mail
//Se la mail è presente si procede, se la mail non è corretta appare un segnale di errore, se la mail è corretta ma non presente appare segnale di mail mancante
//genero due numeri casuali da 1 a 6 e per poi assegnarli a una variabile giocatore e una variabile pc
//se il numero giocatore è più alto appare un messaggio con giocatore vincente, se c'è un pareggio appare un messaggio di pareggio, altrimenti appare un messaggio con pc vincente

const mailList = [
    'woseso5855@elixirsd.com',
    'biaggi@lamasticots.com',
    'giorgio@boh.com',
    'lordciccio@sipropriolui.com',
    'nonsopiucheinventamme@aiuto.com'
];

let submit = document.querySelector('.btn-primary');
submit.addEventListener('click',
    function () {

        let mail = document.getElementById('mail').value.toLowerCase();
        let validMail = false;
        let mailHelp = document.getElementById('emailHelp');
        let user = getRndInteger(0, 6);
        let computer = getRndInteger(0, 6);
        let winner;

        for (let i = 0; i <= (mailList.length - 1); i++) {
            let listedMail = mailList[i];

            if (mail === listedMail) {
                validMail = true;
            }
        }
        if (validMail) {
            mailHelp.className = "text-success";
            mailHelp.innerHTML = `E-mail valida`;
            if (user > computer) {
                winner = 'user'
            }
            else if (computer > user) {
                winner = 'computer'
            }
            else {
                winner = 'pareggio'
            }

        }
        else {
            mailHelp.className = "text-danger";
            mailHelp.innerHTML = `E-mail non registrata`;
        }
        console.log(user)
        console.log(computer)
        console.log(winner)

    }
);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};