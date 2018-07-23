import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import {setExampleText} from '../../redux/actions/ExampleAction';
import { Footer } from '../../components'



class Home extends Component {
    onDispatchAction = () => {
        const someText = 'Dispatched a Action with Redux!';
        this.props.setExampleText(someText)
    }
    render() {
        const { headerFont } = styles;
        console.log(this.props.exampleText);
        return (
            <View style={{ flex: 1 }}>
                <Text style={headerFont}>HOME SCREEN</Text>
                
                {/* TODO: Temp button for now, I will work on making this a component for the project. -badpointer */}
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableHighlight style={styles.button}  onPress={this.onDispatchAction}>
                    <View style={{padding: 10}}>
                        <Text>Dispatch Action</Text>
                    </View>
                </TouchableHighlight>
                <Text >{this.props.exampleText}</Text>
                </View>

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
    button: {
        backgroundColor: 'white',
        width: 100,
        borderRadius: 10,
        borderColor: '#87CEEB',
        borderWidth: 2
        
    }
});

const mapStateToProps = state => {
    const { example} = state;
    console.log(state)
    return {
        exampleText: example.exampleText
    }
}

export default connect(mapStateToProps, {setExampleText}) (Home);
