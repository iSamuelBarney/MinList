import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';


class Home extends Component {
    render() {
        const {header, footerContainer, footer, iconContainer} = styles;
        return (
            <View style={{flex:1}}>
                <Text style={header}>HOME SCREEN</Text>
                <View style={footerContainer} >
                    <View style={footer}>

                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        paddingTop: 15,
        fontSize: 25,
        fontWeight: '500'
    },
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    footer: {
        flex:1,
        backgroundColor: 'white',
        height: 30
    },
    iconContainer: {

    }
});

export{
    Home
};
