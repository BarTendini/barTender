import {View, Switch, Text} from 'react-native';

const settingSetter = (identifier, titleString, mystyle) => {
    return ({id: identifier, title: titleString, interaction: mystyle});
};

const groupSettingSetter = (identifier, sectionTitleString, subSettings) => {
    return ({id: identifier, title:sectionTitleString, settables: subSettings});
};

// Bisognerebbe discutere come vuoi aggiornare il valore dello switch e cosa vuoi fare quando il valore cambia
const switchInteraction = () => {
    return (
        <Switch />
    )
}

const textInteraction = (testo) => {
    return (
        <Text>
            {testo}
        </Text>
    )
}

const settingsInfo = [
    {
        id:1 ,title: 'notifications',
        settables:[
            {id:2, title:"massages", interaction: switchInteraction()},
            {id:3, title:"calls", interaction: switchInteraction()},
            {id:4, title:"push", interaction: switchInteraction()}
        ]
    },
    {
        id:2 ,title: 'payment method',
        settables:[
            settingSetter(1,"credit card", textInteraction("TextInput")),
            settingSetter(3,"calls",switchInteraction()),
            settingSetter(6,"push",switchInteraction())
        ]
    },
    groupSettingSetter(3,"tag associaction",[
        settingSetter(1,"connected tags", textInteraction("CardTender")),
        settingSetter(2,"calls",textInteraction("toggle")),
        settingSetter(3,"push",textInteraction("toggle"))
    ])
];



export default settingsInfo;
