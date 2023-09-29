import { View, StyleSheet, TextInput } from 'react-native';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.searchBar} placeholder='Search ...'/>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272727',
    alignItems: 'center',
  },
  searchBar: {
    borderWidth: 0.5,
    borderColor: 'white',
    borderRadius: 5,
    width: 375,
    height: 50,
  },
});

export default SearchBar;
