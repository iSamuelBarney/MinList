import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';

const store = createStore(reducers,
     {},                                // Set Preload state here: [HOW-TO] https://github.com/reduxjs/redux/blob/master/docs/api/createStore.md
     compose(applyMiddleware(thunk)));

const ListApp = () => {
    return (
        <Provider store={store}>
            <View style={{flex: 1, marginTop: 25,}}>
                <Text>Hello MinList Community Project!!!</Text>
            </View>
        </Provider>
    );
}

// If we want to point to different Project Env..
export {
    ListApp
};