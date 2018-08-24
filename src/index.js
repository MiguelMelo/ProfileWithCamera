import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

export default class App extends Component {
  state = {
    profileUri: 'https://goo.gl/ZyYHrG',
  }

  pickImage = () => {
    ImagePicker.showImagePicker({title: "Selecione uma foto"}, res => {
      this.setState({ profileUri: res.uri });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#512DA8' />
        <View style={styles.imageContainer}>
          <Image source={{uri: this.state.profileUri}} style={styles.image}/>
          <Icon name="md-add-circle" style={styles.icon} size={24} onPress={this.pickImage}/>
        </View>
        <Text style={styles.text}>João Guilherme</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#673AB7',
  },
  image: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#3333',
    borderRadius: 100,
  },
  icon: {
    position: 'absolute',
    bottom: 0,
    right: 5,
    color: '#333'
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFFFFF',
  },
});
