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

const rotate = [
    "cube cube--rotate show-front",
    "cube cube--rotate show-back",
    "cube cube--rotate show-right",
    "cube cube--rotate show-left",
    "cube cube--rotate show-top",
    "cube cube--rotate show-bottom",
]

let submit = document.querySelector('.btn-primary');
submit.addEventListener('click',
    function () {

        let mail = document.getElementById('mail').value.toLowerCase();
        let validMail = false;
        let mailHelp = document.getElementById('emailHelp');
        let userDice = document.getElementById('user');
        let computerDice = document.getElementById('computer');
        let user = getRndInteger(1, 6);
        let computer = getRndInteger(1, 6);
        let winner = document.getElementById('winner');

        for (let i = 0; i <= (mailList.length - 1); i++) {
            let listedMail = mailList[i];

            if (mail === listedMail) {
                validMail = true;
            }
        }
        if (validMail) {
            mailHelp.className = "text-success";
            mailHelp.innerHTML = `E-mail valida`;
            userDice.className = rotate[user -1];
            computerDice.className = rotate[computer -1];

            if (user > computer) {
                winner.innerHTML = 'user'

            }
            else if (computer > user) {
                winner.innerHTML = 'computer'
            }
            else {
                winner.innerHTML = 'pareggio'
            }

        }
        else {
            mailHelp.className = "text-danger";
            mailHelp.innerHTML = `E-mail non registrata`;
        }
        console.log(winner);

    }
);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};