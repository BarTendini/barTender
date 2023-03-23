import React from "react";
import {Animated, Platform, FlatList, View} from "react-native";

// ...props è un deconstructor che serve a indicature un oggetto contentente tutte le altre proprietà non elencate
export const TenderFlatList = ({children, scroll, header_height, ListFooterComponent, footerPadding=15, ...props}) => {
    const listFooter = () => {
        return (
            <View>
                {ListFooterComponent}
                <View style={{padding: footerPadding}}></View>
            </View>
        )
    }

    return (
        <FlatList
            {...props}
            scrollEventThrottle={16}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scroll }}}],
                {useNativeDriver: false}
                // {useNativeDriver: Platform.OS !== 'web'}
            )}
            contentContainerStyle={{flexGrow: 1, paddingTop: isNaN(header_height) ? 0 : header_height }}
            ListFooterComponent={listFooter()}
        >
            {children}
        </FlatList>
    )
}