/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground
} from 'react-native';
import SearchInput from './components/SearchInput';

import getImageForWeather from './utils/getImageForWeather';


export default class App extends Component {
  constructor(props) {
    super(props); this.state = {
          location: 'San Francisco',
        };
    }



handleUpdateLocation = city => { this.setState({
  location: city,
});
};

  render() {
    const { location } = this.state;
    return (
      <KeyboardAvoidingView
       style={styles.container}
  
       >
       <ImageBackground
           source={getImageForWeather('Clear')}
           style={styles.imageContainer}
           imageStyle={styles.image}
       >

<View style={styles.detailsContainer}>



      <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
      <Text style={[styles.smallText, styles.textStyle]}>Light Clouds</Text>
       <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
           <SearchInput placeholder='Search any city'
           onSubmit={this.handleUpdateLocation}
           />
           </View>
           </ImageBackground>
           
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  red: {
    color: 'red',
    },
    textStyle: {
      textAlign: 'center',
      fontFamily:
        Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
      color: 'white',
    },  
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  largeText: {
     fontSize: 44,
     },
  smallText: {
     fontSize: 18,
     },
     imageContainer: {
      flex: 1,
  }, image: {
  flex: 1,
  width: null,
  height: null, resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
},
   
     
});
