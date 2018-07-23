import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';

const IconButton = (props) => {
    const {iconButtonStyle} = styles;
    const {children, iconStyle, onPress} = props;
    return (
        <View style={[iconButtonStyle, iconStyle]}>
            <TouchableHighlight underlayColor='white' onPress={onPress}>
                {children}
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    iconButtonStyle: {
        width: 50
    }
});

export {
    IconButton
}