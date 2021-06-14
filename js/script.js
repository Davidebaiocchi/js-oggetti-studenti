// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), 
// di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// creo l'ogetto
var studente = {
    nome : "Micheal",
    cognome : "Jordan",
    età : 23,
};
console.log(studente);


// ciclo a schermo i dati dell' oggetto
for(var key in studente) {
    console.log(studente[key]);
}


// creo un array di oggetti studenti
var arrayStudenti = [

    {
        nome : "Larry",
        cognome : "Bird",
        età : 25,

    },

    {
        nome : "Kobe",
        cognome : "Bryant",
        età : 45,
    },

    {
        nome : "Tracy",
        cognome : "Mcgrady",
        età : 18,
    }

];
console.log(arrayStudenti);

// creo un ciclo e stampo tutti gli oggetti e le relative info
for(i = 0; i < arrayStudenti.length; i++){
    console.log(arrayStudenti[i].nome);
    console.log(arrayStudenti[i].cognome);
    console.log(arrayStudenti[i].età);
}


// do la possibilità all'utente di inserire un nuovo studente
var nuovoStudente = {
    nome : prompt('Inserisci nome'),
    cognome : prompt('Inserisci cognome'),
    età : prompt('Inserisci età'),
};


// pusho il nuovo oggetto nell array 
arrayStudenti.push(nuovoStudente);
console.log(arrayStudenti);
