import {FlatList, StyleSheet, View, Switch, Text} from 'react-native';

const settingSetter = (identifier, titleString, mystyle,theValue) => {
    return ({id: identifier, title: titleString, interaction: mystyle, value:theValue});
};

const groupSettingSetter = (identifier, sectionTitleString, subSettings) => {
    return ({id: identifier, title:sectionTitleString, settables: subSettings});
};

// Bisognerebbe discutere come vuoi aggiornare il valore dello switch e cosa vuoi fare quando il valore cambia


const textInteraction = (item) => {
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

const elementsListedInteraction = (item) => {
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

const singleElementListedInteraction = ({item}) => {
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

const switchInteraction = (item) => {
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

const settingsInfo = [
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
    groupSettingSetter(3,"tag associaction",[
        settingSetter(10,"connected tags",elementsListedInteraction, [
            settingSetter(11,"tag 1",textInteraction,"edit"),
            settingSetter(12,"tag 2",textInteraction,"edit"),
            settingSetter(13,"tag 3",textInteraction,"edit")
        ]),

        settingSetter(12,"add tag",textInteraction,"toggle"),
        settingSetter(13,"disconnect all",textInteraction,"toggle")        
    ])
];



export default settingsInfo;
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