import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Footer } from '../../components'



class Home extends Component {
    render() {
        const { headerFont } = styles;
        return (
            <View style={{ flex: 1 }}>
                <Text style={headerFont}>HOME SCREEN</Text>




                {/* Footer w/ IconButton Components */}
                <Footer
                    onBack={()=> console.log('Going Back')}
                    onHome={()=> console.log('Go Home')}
                    onMenu={()=> console.log('GO to MEnu')}
                 />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerFont: {
        textAlign: 'center',
        paddingTop: 15,
        fontSize: 25,
        fontWeight: '500'
    },

});

export default Home;
