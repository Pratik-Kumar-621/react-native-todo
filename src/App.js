import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Provider} from 'react-redux';
import {Dimensions} from 'react-native';

let screenHeight = Dimensions.get('window').height;
import Input from './components/input';
import store from './reducers/store';

import Heading from './components/Heading';
import List from './components/List';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Heading />
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            <Input />
            <List />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
  },
});

export default App;
