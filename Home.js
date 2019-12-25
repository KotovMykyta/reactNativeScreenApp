import React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hoooooooooooooome Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Photo')}
        />
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
        <Button
          title="Open"
          onPress={() => this.props.navigation.navigate('Photo')}
        />
        <Image
          style={{width: 50, height: 50}}
          source={require('../../pic/pic1.png')}
          onPress={() => this.props.navigation.navigate('Photo')}
        />
    </View>
    );
  }
}


class Photo extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                style={{width: 400, height: 400}}
                source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
            />
        </View>
      );
    }
  }
  const RootStack = createStackNavigator(
    {
      Home: Home,
      Photo: Photo,
    },
    {
      initialRouteName: 'Home',
    }
  );
  
  const AppContainer = createAppContainer(RootStack);
  
  export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
  }
