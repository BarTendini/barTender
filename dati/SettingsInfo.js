import {FlatList, StyleSheet, View, Switch, Text} from 'react-native'; //import necessario

//funzione che restituisce un oggetto contenente le impostazioni
const settingSetter = (identifier, titleString, mystyle,theValue) => { 
    return ({id: identifier, title: titleString, interaction: mystyle, value:theValue});
};

//funzione che restituisce un oggetto che contiene altri oggetti impostazioni al proprio interno
const groupSettingSetter = (identifier, sectionTitleString, subSettings) => {
    return ({id: identifier, title:sectionTitleString, settables: subSettings});
};

// Bisognerebbe discutere come vuoi aggiornare il valore dello switch e cosa vuoi fare quando il valore cambia


const textInteraction = (item) => { //funzione che definisce come appariranno le impostazioni di tipo testuali
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{ flex: 0.5, alignItems: 'flex-start' }}>
                <Text style={styles.InfoTextLeft}>
                    {item.title}
                </Text>
            </View>
            <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                <Text style={styles.InfoTextRight}> 
                    {item.value}
                </Text>
            </View>
        </View>
    )
}

const elementsListedInteraction = (item) => { //funzione che definisce come appariranno le impostazioni che possiedono delle liste
    return (
        <View >
            <Text>
                {item.title}
            </Text>
            <View style={{borderRadius: 10, backgroundColor: 'white', borderWidth: 1, borderColor:'white', padding: 5}}>
                <FlatList
                        data={item.value}
                        renderItem={singleElementListedInteraction}
                />
            </View>
            
        </View>
    )
}

const singleElementListedInteraction = ({item}) => { //funzione che definisce come appariranno le impostazioni dei singoli elementi di una lista
    return(
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{ flex: 0.5, alignItems: 'flex-start' }}>
                <Text style={styles.InfoTextLeft}>
                    {item.title}
                </Text>
            </View>
            <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                <Text style={styles.InfoTextRight}> 
                    {item.value} 
                </Text>
            </View>
        </View>
    );
}

const switchInteraction = (item) => { //funzione che definisce come appariranno le impostazioni di tipo switch
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{ flex: 0.5, alignItems: 'flex-start' }}>
                <Text style={styles.InfoTextLeft}>
                    {item.title}
                </Text>
            </View>
            <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                <Switch value={item.value}/>
            </View>
        </View>
    )
}

const settingsInfo = [ // questo oggetto definisce i testi e la struttura dati delle impostazioni
    //  id: devono necessariamente diversi tra loro in ogni livello
    //  title: testo che descrive cosa apparià nelle impostazioni (es: 'notifications' oppure "messages")
    //  (gruppo) settables: se si vuole definire un gruppo di impostazioni, questo campo prende un array di impostazioni
    //  (singolo) interaction: prende una funzione che permette di visualizzare l'impostazione in maniera desiderata
    //  (singolo) value: dovrebbe essere il valore delle impostazioni (verrà modificato in futuro)
{
        id:1 ,title: 'notifications',
        settables:[
            {id:4, title:"massages", interaction: switchInteraction, value:false},
            {id:5, title:"calls", interaction: switchInteraction, value:false},
            {id:6, title:"push", interaction: switchInteraction, value:false}
        ]
    },
    {
        id:2 ,title: 'payment method',
        settables:[
            settingSetter(7,"credit card", textInteraction, "TextInput"),
            settingSetter(8,"paypal", switchInteraction,false),
            settingSetter(9,"cash", switchInteraction,false)
        ]
    },
    groupSettingSetter(3,"tag associaction",[ // funzione che definisce un gruppo (perchè potevo)
        settingSetter(10,"connected tags",elementsListedInteraction, [ // i gruppi si possono innestare
            settingSetter(11,"tag 1",textInteraction,"edit"), // funzione che definisce un impostazione singola
            settingSetter(12,"tag 2",textInteraction,"edit"),
            settingSetter(13,"tag 3",textInteraction,"edit")
        ]),
        settingSetter(12,"add tag",textInteraction,"toggle"),
        settingSetter(13,"disconnect all",textInteraction,"toggle")        
    ])
];



export default settingsInfo; // permette di richiamare settinsInfo in un altro file

// crea una serie di stili che potranno essere usati dentro i tag/components di questo file come PROPietà
const styles = StyleSheet.create({
    Bottoni: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    InfoTextLeft: {
        textAlign: 'left', // <-- the magic
        fontWeight: 'bold'
    },
    InfoTextRight: {
        textAlign: 'right', // <-- the magic
        fontWeight: 'bold'
    }
});