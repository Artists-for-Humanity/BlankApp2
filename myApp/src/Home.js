import React from 'react';
import { Text, View, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';

const Home = ({ navigation }) => {
  const navigateToNewNote = () => {
    navigation.navigate('NewNote');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesomeIcon icon={faGear} size={27} color="white" />
        </TouchableOpacity>
        <Image style={styles.logo} source={require('../assets/BLANK.png')} />
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size={22.5} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={navigateToNewNote}>
          <FontAwesomeIcon icon={faPlus} size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272727',
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: 55,
    width: 450,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  actionButton: {
    width: 50,
    height: 50,
    backgroundColor: '#494949',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  actionText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  logo: {
    width: 130,
    height: 40,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 20, // Adjust as needed for vertical positioning
    right: 20, // Adjust as needed for horizontal positioning
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: '#494949',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
});
