import React from "react";
import {Animated, Platform, ScrollView, View} from "react-native";

// ...props è un deconstructor che serve a indicature un oggetto contentente tutte le altre proprietà non elencate
export const TenderScroll = ({children, scroll, header_height, footerPadding=15, ...props}) => {
    return (
        <ScrollView
            {...props}
            scrollEventThrottle={16}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scroll }}}],
                {useNativeDriver: false}
                // {useNativeDriver: Platform.OS !== 'web'}
            )}
            contentContainerStyle={{flexGrow: 1, paddingTop: isNaN(header_height) ? 0 : header_height }}
        >
            {/*<View style={{padding: 200}}></View>*/}
            {children}
            <View style={{paddingBottom: footerPadding}}></View>
        </ScrollView>
    )
}
TenderScroll.displayName = 'TenderScroll'
TenderScroll.animazioneHeader=true