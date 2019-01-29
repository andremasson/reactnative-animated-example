import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated
} from 'react-native';

const myProfileUri = 'https://avatars1.githubusercontent.com/u/504357?s=400&u=e111718e7a238a19568afa42ea2ab005cc16f2b2&v=4'

export default class App extends React.Component {
  state = {
    opacity: new Animated.Value(0),
    width: new Animated.Value(0),
    height: new Animated.Value(0)
  }
  componentDidMount() {
    const { opacity, width, height } = this.state

    Animated.timing(opacity, { toValue: 1, duration: 1000 })
      .start()

    Animated.spring(width, { toValue: 200, speed: 2.5}).start()
    Animated.spring(height, { toValue: 200, speed: 2.5}).start()
  }
  render() {
    const { opacity, width, height } = this.state

    return (
      <View style={styles.container}>
        <Animated.Image
          style={[styles.img, {opacity, width, height}]}
          source={{uri: myProfileUri}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 200,
    height: 200

  }
});
