import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faStar as faSolidStar,
  faEllipsisVertical,
  faPaperclip,
  faListCheck,
} from '@fortawesome/free-solid-svg-icons';
import {
  faStar as faRegularStar,
  faImage,
  faPenToSquare,
} from '@fortawesome/free-regular-svg-icons';

const NewNote = () => {
  const navigation = useNavigation();
  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  const [TitleInput, setTitleInput] = useState('');
  const [BodyInput, setBodyInput] = useState('');
  const [isBodyFocused, setIsBodyFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleTitleChange = (text) => {
    // Limit the input text to 75 characters
    if (text.length <= 75) {
      setTitleInput(text);
    }
  };

  const handleBodyChange = (text) => {
    setBodyInput(text);
  };

  const handleBodyFocus = () => {
    setIsBodyFocused(true);
  };

  const handleBodyBlur = () => {
    setIsBodyFocused(false);
  };

  const starIconPress = () => {
    setIsPressed(!isPressed);
  };

  const handleSubmit = () => {
    // Save the input from BodyInput (this can be stored in your state or sent to an API, etc.)
    const savedText = BodyInput;

    // Clear the BodyInput field
    setBodyInput('');

    // Dismiss the keyboard
    Keyboard.dismiss();
    // Optionally, it can navigate to another screen or perform other actions here
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={{ flex: 1 }}>
        <View style={styles.navContainer}>
          <TouchableOpacity style={styles.buttonContainer} onPress={navigateToHome}>
            <FontAwesomeIcon icon={faHome} style={styles.homeIcon} />
            <Text style={styles.buttonText}>Main</Text>
          </TouchableOpacity>
          <View style={styles.colorBar}></View>
        </View>
        <View style={styles.topContainer}>
          <TextInput
            multiline
            placeholder="Title"
            style={styles.titleBox}
            onChangeText={handleTitleChange}
            value={TitleInput}
            underlineColorAndroid="transparent"
            placeholderTextColor="#B6B6B6"
            maxLength={75}
          />
          <TouchableOpacity onPress={starIconPress}>
            <View style={styles.starIconContainer}>
              {isPressed ? (
                <FontAwesomeIcon icon={faSolidStar} style={styles.starIconSolid} size={30} />
              ) : (
                <FontAwesomeIcon icon={faRegularStar} style={styles.starIconOutline} size={30} />
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faEllipsisVertical} style={styles.shareIcon} size={26} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            multiline
            placeholder="What's on your mind?"
            style={[
              styles.bodyContainer,
              isBodyFocused && BodyInput ? styles.focusedInput : styles.blurredInput,
              // Conditionally apply text color based on user input
              BodyInput ? { color: 'white' } : null,
            ]}
            onChangeText={handleBodyChange}
            value={BodyInput}
            underlineColorAndroid="transparent"
            placeholderTextColor="#B6B6B6"
            onFocus={handleBodyFocus}
            onBlur={handleBodyBlur}
          />
        </View>
        {/* Sticky Action Menu */}
        <View style={styles.stickyMenu}>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
          <View style={styles.actionMenu}>
            <TouchableOpacity>
              <View style={styles.actionButton}>
                <FontAwesomeIcon icon={faImage} size={25} color="white" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.actionButton}>
                <FontAwesomeIcon icon={faPaperclip} size={25} color="white" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.actionButton}>
                <Text style={styles.actionText}>Tt</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.actionButton}>
                <FontAwesomeIcon icon={faListCheck} size={25} color="white" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.actionButton}>
                <FontAwesomeIcon icon={faPenToSquare} size={25} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272727',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navContainer: {
    width: 375,
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    backgroundColor: '#272727',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeIcon: {
    marginLeft: 10,
    marginHorizontal: 5,
    color: 'white',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  colorBar: {
    width: 260,
    height: 8,
    marginTop: 3,
    marginRight: 3,
    alignSelf: 'center',
    backgroundColor: '#676767',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  topContainer: {
    width: 375,
    marginTop: 15,
    flexDirection: 'row',
    alignContent: 'flex-start',
  },
  titleBox: {
    width: 275,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 37,
  },
  starIconContainer: {
    flexDirection: 'row',
  },
  starIconOutline: {
    marginVertical: 2,
    marginLeft: 3,
    marginRight: 2,
    color: 'white',
  },
  starIconSolid: {
    marginVertical: 2,
    marginLeft: 3,
    marginRight: 2,
    color: '#EACD68', // Solid star color
  },
  shareIcon: {
    marginVertical: 5,
    color: 'white',
  },
  bodyContainer: {
    flex: 1,
    marginLeft: 37,
    marginRight: 3,
    marginBottom: 125,
    fontSize: 20,
  },
  focusedInput: {
    borderColor: 'white', // Add a border color for focused input
    borderWidth: 1,
  },
  blurredInput: {
    borderColor: 'transparent', // No border for blurred input
  },
  bodyText: {
    fontSize: 20,
  },
  stickyMenu: {
    position: 'absolute',
    bottom: 0,
    // backgroundColor: '#343434',
    // padding: 15,
    // borderRadius: 5,
  },
  submitButton: {
    width: 80,
    height: 40,
    borderRadius: 15,
    backgroundColor: '#007AFF',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
  actionMenu: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    alignItems: 'center',
    width: 375,
    height: 50,
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
});
