const changes = [ // definizione di un array di 6 elementi dove ogni elemento è una sorta di struttura dati di 4 elementi
{version:"0.26.0", nome: "giangi", dataPush: "25/05 12:40", info:"serie di modifiche estetiche \ncompletato alertTender che permette di creare le notifiche personalizzate"},
{version:"0.24.0", nome: "giangi", dataPush: "20/05 17:40", info:"eliminata la schermata drinkTypeSelection pichè la funzionalità è stata accorpata dentro Drink menu.\n abilitata la funzionalità dei drink preferiti\n altre modifiche fatte da simo e non documentate nel changeLog"},
    {version:"0.23.0", nome: "Max", dataPush: "5/04 22:00", info:"Sistemata la posizione del cuore, ma devo riprovare con l'ombra in drinkDescription"},
    {version:"0.22.0", nome: "Max", dataPush: "3/04 17:00", info:"Sistemato app.js perché i nuovi screen doveno essere messi in drawerNavigationRoutes. Quindi risolto il bug in cui non si poteva chiamare il burgermenu da uno screen lontano\n" +
            "Rimossi componenti inutili\n" +
            "Rinominato changeLog in changeLogScreen\n" +
            "Aggiunto nei setting una variabile per debuggare le view in modo da vedere i bordi\n" +
            "Tuttavia setting Info è probabilmente da riscrivere per lo stato attuale non si può aggiornare lo state.\n" +
            "Iniziata la schermata di drink selection, ma le ombre almeno su ios non sono visibili"},
    {version:"0.21.0", nome: "giangi", dataPush: "23/03 01:00", info:"cards del drink menu semi decenti e prima scermata descrizione drink"},
    {version:"0.20.0", nome: "giangi", dataPush: "27/03 19:00", info:"header con menu per web Browser e menu drinks"},
    {version:"0.19.55", nome: "giangi", dataPush: "19/03 16:14", info:"aggiungere le impostazioni in modo dinamico"},
    {version:"0.19.54", nome: "giangi", dataPush: "18/03 12:17", info:"tentato di aggiungere le impostazioni in modo dinamico ma fallito. per qualche motivo prende l' header ma non il resto."},
    {version:"0.19.53", nome: "giangi", dataPush: "15/03 23:33", info:"aggiunti mazzi di commenti ma ancora troppo pochi"},
    {version:"0.19.52", nome: "giangi", dataPush: "15/03 12:17", info:"aggiunto changeLog abbastanza funzionante"},
    {version:"0.19.51", nome: "giangi", dataPush: "14/03 12:17", info:"aggiunto change log anche se male"},
    {version:"miao", nome: "miao", dataPush: "miao", info:"miao"}
];

//const version = "0.19.54";  //semplice definizione di una stringa
const version = changes[0].version;  //definisco la versione prendendo il campo "version" del primo elemento dell'array

export {changes, version}; // seve per esportare i 2 oggetti e quindi renderli visibili fuori dal file
