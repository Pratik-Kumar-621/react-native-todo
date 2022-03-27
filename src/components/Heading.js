import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {clearTodo} from '../reducers/actions';

const Heading = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>TODO-List</Text>
      <TouchableOpacity
        style={styles.btnClear}
        onPress={() => {
          dispatch(clearTodo());
        }}
        activeOpacity={0.6}>
        <Text style={styles.btnClearText}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    width: '100%',
    height: 65,
    backgroundColor: 'rgb(0,0,225)',
    paddingRight: 30,
    paddingLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnClear: {
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 7,
    paddingBottom: 7,
    backgroundColor: 'red',
    borderRadius: 7,
  },
  btnClearText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  titleText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Heading;
