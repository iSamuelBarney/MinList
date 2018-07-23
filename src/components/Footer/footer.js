import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Entypo, Feather, Octicons } from '@expo/vector-icons';
import { IconButton } from '../';

const Footer = (props) => {
    const { footerContainer, footer } = styles;
    const {onBack,onHome,onMenu} = props;
    return (
        <View style={footerContainer} >
            <View style={footer}>
                <IconButton onPress={onBack}>
                    <Entypo name="triangle-left" size={30} color="#babac1" />
                </IconButton>
                <IconButton onPress={onHome}>
                    <Octicons style={{ paddingLeft: 10 }} name="primitive-dot" size={30} color="#babac1" />
                </IconButton>
                <IconButton onPress={onMenu}>
                    <Feather name="menu" size={30} color='#babac1' />
                </IconButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 30
    },
});

export {
    Footer
}