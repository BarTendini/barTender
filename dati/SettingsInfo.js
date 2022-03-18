const settingSetter = ({identifier, titleString, mystyle}) => {
    return ({id: identifier, title: titleString, interaction: mystyle});
};

const groupSettingSetter = ({identifier, sectionTitleString, subSettings}) => {
    return({id: identifier, title:sectionTitleString, settables: subSettings});
};

const settingsInfo = [
    {
        id:1 ,title: 'notifications', 
        settables:[
            {id:1, title:"massages", interaction: "Switch"},
            {id:2, title:"calls", interaction: "Switch"},
            {id:3, title:"push", interaction: "Switch"}
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



export default settingsInfo;