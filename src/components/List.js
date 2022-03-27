import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeTodo} from '../reducers/actions';

const ListItem = ({data, id}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{data}</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(removeTodo({id}));
          console.log(id);
        }}>
        <Text style={styles.listItemDelete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const List = () => {
  const todoList = useSelector(state => state.todoReducer.todos);
  console.log(todoList);

  const renderItem = ({item}) => <ListItem data={item.data} id={item.id} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={todoList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  listItem: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderColor: 'rgb(0,0,225)',
    backgroundColor: '#f6f8ff',
  },
  listItemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listItemDelete: {
    fontSize: 16,
  },
});

export default List;
