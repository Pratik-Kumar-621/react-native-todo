import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import {addTodo} from '../reducers/actions';

const Input = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter the todo"
        onChangeText={newText => setTextInput(newText)}
        value={textInput}
      />
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.6}
        onPress={() => {
          if (textInput.length > 0) {
            dispatch(addTodo(textInput));
            setTextInput('');
          } else {
            Alert.alert('No Input', `The Input box can't be empty`, [
              {text: 'OK'},
            ]);
          }
        }}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    height: 50,
  },
  input: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: '70%',
    borderBottomWidth: 0.5,
    paddingLeft: 10,
    backgroundColor: '#fff',
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
    height: '100%',
  },
  btn: {
    height: '100%',
    width: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#5eba7d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 27,
    color: '#fff',
    fontWeight: '700',
  },
});

export default Input;
