import React from 'react';
import {
  StyleSheet, Text, View,
  YellowBox,
  PanResponder
} from 'react-native'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'

import log from './log'

YellowBox.ignoreWarnings = ([
  'Remote debugger is in a background',
])

const DumbComponent = ({ gestureName }) => (
  <View>
    <Text style={{
        fontSize:27
      }}>onSwipe callback received gesture: {gestureName}</Text>
  </View>
)

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myText: 'I\'m ready to get swiped!',
      gestureName: 'none',
      backgroundColor: '#fff'
    }
  }
  onSwipeUp(gestureState) {
    this.setState({myText: 'You swiped up!'});
  }

  onSwipeDown(gestureState) {
    this.setState({myText: 'You swiped down!'});
  }

  onSwipeLeft(gestureState) {
    this.setState({myText: 'You swiped left!'});
  }
  static getDerivedStateFromProps(nextProps,nextState) {
    return {
      ...nextState
    }
  }
  onSwipeRight(gestureState) {
    this.setState({myText: 'You swiped right!'});
  }
  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_UP:
        this.setState({backgroundColor: 'red'});
        break;
      case SWIPE_DOWN:
        this.setState({backgroundColor: 'green'});
        break;
      case SWIPE_LEFT:
        this.setState({backgroundColor: 'blue'});
        break;
      case SWIPE_RIGHT:
        this.setState({backgroundColor: 'yellow'});
        break;
    }
  }
  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    }
    log('something mounted',this)
    const { gestureName, backgroundColor } = this.state
    const dumbProps = {
      gestureName // gestureName:gestureName || this.state.guestureName
    }
    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeUp={(state) => this.onSwipeUp(state)}
        onSwipeDown={(state) => this.onSwipeDown(state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: backgroundColor
        }}
        >
        <Text>{this.state.myText}</Text>
        <DumbComponent {...dumbProps} />
      </GestureRecognizer>
    )
  }
}
