const BarsInfo = [
    {
        id: 0, image: require("../image/ristoranti/daPino.png"),
        nome: 'Da Pino', via: 'Via le dita nel naso n.2',
        dist: '100m', status: 'Affollato', orario: '22:00-4:00',
        orari: '\nlun - dom 9.00-13.00\nmar-dom 17.00-23.00',
        descr: 'Bar storico, tappa obbligatoria per turisti e per i giovani che ogni venerdì sera si ritrovano in centro.',
        feed: [
            { nome: 'Salvatore Riina', txt: 'La coca-cola è buona', voto: 4 },
            { nome: 'Dino', txt: 'Quanti ricordi Da Pino!', voto: 5 },
            { nome: 'Pino', txt: 'feedback generico 1', voto: 1 },
            { nome: 'Gino', txt: 'feedback generico 2', voto: 2 },
            { nome: 'Lino', txt: 'feedback generico 3', voto: 3 },
        ],
        color: '#5580e6', textColor: 'black'},
    {
        id: 1, image: require("../image/ristoranti/daDino.png"),
        nome: 'Da Dino', via: 'Via le dita nel naso n.2',
        dist: '150m',  status: 'Affollato', orario: '22:00-4:00',
        orari: '\nlun - dom 18.00-2.00',
        descr: 'Vastissimo assortimento di Gin, da gustare in un locale dove il classico incontra l’innovazione',
        feed: [
            { nome: 'Mario Vanni', txt: 'Ritorneremo, prima o dopo', voto: 5 },
            { nome: 'Dino', txt: 'Quanti ricordi Da Dino!', voto: 5 },
            { nome: 'Lino', txt: 'Buonissimo il pina colada', voto: 4 },
        ],
        color: '#ffcc8b'},
    {
        id: 2, image: require("../image/ristoranti/daGino.png"),
        nome: 'Da Gino', via: 'Via le dita nel naso n.2',
        dist: '500m',  status: 'Affollato', orario: '22:00-4:00',
        orari: '\nlun - sab 9.00-13.00\nlun - sab 17.00-24.00',
        descr: 'Da noi i cocktails li fai con lo smartphone!',
        feed: [
            { nome: 'Graziano Mesina', txt: 'Venivo qui quando non mi avevano ancora arrestato!', voto: 5 },
            { nome: 'Dino', txt: 'Quanti ricordi Da Gino!', voto: 5 },
            { nome: 'Gino', txt: 'Ottimo rapporto qualità-prezzo, ci tornerò sicuramente', voto: 5 },
            { nome: 'Pino', txt: 'feedback generico 3', voto: 3 },
        ],
        color: 'red', textColor: 'white'},
    {
        id: 3, image: require("../image/ristoranti/daLino.png"),
        nome: 'Da Lino', via: 'Via le dita nel naso n.3',
        dist: '1km',  status: 'Affollato', orario: '22:00-4:00',
        orari: '\nlun - sab 19.00-2.00',
        descr: 'Vastissimo assortimento di Gin, da gustare in un locale dove il classico incontra l’innovazione',
        feed: [
            { nome: 'Pablo Escobar', txt: 'Ottima la figa in questo locale!', voto: 5 },
            { nome: 'Dino', txt: 'Quanti ricordi Da Lino!', voto: 5 },
            { nome: 'Giulia Podda', txt: 'Ogni weekend almeno un giro al bar di Lino non ce lo toglie nessuno!', voto: 5 },
            { nome: 'John Samuel Sommers', txt: 'Ogni weekend qui ci portavo la figa di turno del erasmus.\nConsigliatissimo!', voto: 5 },
            { nome: 'Cagliaritano Medio', txt: 'Che bomber John!', voto: 5 },
            { nome: 'Figa Erasmus', txt: 'Ogni weekend qui mi portava John Samuel Sommers!', voto: 5 },
            { nome: 'Giangi Coinquilino', txt: 'Ogni weekend qui ci portavo Max, peccato per i trafficanti di droga!', voto: 4 },
        ],
        color: '#5580e6', textColor: 'black'}
]

export default BarsInfo;
