import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

const NavigationDrawerHeader = (props) => {
    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={toggleDrawer}>
                <Image
                    source={require('../image/icons/drawerWhite.png')}
                    style={{width: 25, height: 25, marginLeft: 5}}
                />
            </TouchableOpacity>
        </View>
    );
};
export default NavigationDrawerHeader;
