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
let submit = document.querySelector('button');
submit.addEventListener('click',
    function () {
        let mail = document.getElementById('mail').value.toLowerCase();
        let validMail = 0;
        let mailHelp = document.getElementById('emailHelp');
        for (let i = 0; i <= (mailList.length - 1); i++) {
            let listedMail = mailList[i];
            if (mail === listedMail) {
                mailHelp.classList += 'text-succes';
                mailHelp.innerHTML=`E-mail valida`;
            }
        }
        if(validMail === 0){
            mailHelp.classList += 'text-danger';
            mailHelp.innerHTML=`E-mail non registrata`;
        }
    }
);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};