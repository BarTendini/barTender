const settingSetter = ({identifier, titleString, style}) => {
    return ({id: identifier, title: titleString, interaction: style});
};

const groupSettingSetter = ({identifier, sectionTitleString, subSettings}) => {
    return({id: identifier, title:sectionTitleString, settables: subSettings});
};

const settingsInfo = [
    {
        id:1 ,title: 'notifications', 
        settables:[
            settingSetter(1,"massages","Switch"),
            settingSetter(2,"calls","Switch"),
            settingSetter(3,"push","Switch")
        ]
    },
    {
        id:2 ,title: 'payment method', 
        settables:[
            settingSetter(1,"credit card","TextInput"),
            settingSetter(2,"calls","Switch"),
            settingSetter(3,"push","Switch")
        ]
    },
    groupSettingSetter(3,"tag associaction",[
        settingSetter(1,"connected tags","CardTender"),
        settingSetter(2,"calls","toggle"),
        settingSetter(3,"push","toggle")
    ])
];



export {settingsInfo};