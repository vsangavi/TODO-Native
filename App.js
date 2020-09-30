/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text,
  TextInput,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Todo from './Components/Todo';
import Display from './Components/Display';
const App = () => {
  let [todo, setTodo] = useState('');
  let [list, setList] = useState([]);
  const [taskCount, settaskCount] = useState(0);
  const [completedTask, setcompletedTask] = useState(0);
  const clickHandler = (e) => {
    e.preventDefault();
    if (todo.length === 0) {
      return;
    }
    const newTodo = {
      todo,
      id: Date.now(),
      isCompleted: false,
    };
    settaskCount(taskCount + 1);
    let newlist = list;
    newlist.push(newTodo);
    setList(newlist);
    setTodo('');
  };
  const handlePress = (item) => {
    const id = item.id;
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
    settaskCount(taskCount - 1);
    setcompletedTask(completedTask + 1);
    alert(`${id}`);
  };
  const handleTaskComplete = (item) => {
    const id = item.id;
    const findId = (todo) => todo.id === id;
    const index = list.findIndex(findId);
    let data = {
      ...item,
      isCompleted: true,
    };
    let todos = [...list];
    todos[index] = data;
    setList(todos);
  };
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.textStyle}>
          {' '}
          <FontAwesome5
            name={'clipboard-list'}
            solid
            size={30}
            color={'green'}
          />{' '}
          Goal Setter
        </Text>
      </View>
      <View style={styles.box}>
        <Display taskCount={taskCount} completedTask={completedTask} />
      </View>
      <View flexDirection={'row'} style={styles.outerTextInput}>
        <View>
          <TextInput
            style={styles.textInput}
            value={todo}
            onChangeText={(value) => setTodo(value)}
            placeholder="Enter your todo's"
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Add Task"
            color="green"
            onPress={clickHandler}></Button>
        </View>
      </View>

      <Todo
        list={list}
        handlePress={handlePress}
        handleTaskComplete={handleTaskComplete}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#DAE0E2',
  },

  button: {
    marginTop: 35,
    marginLeft: 10,
  },
  box: {
    width: 320,
    height: 130,
    left: 35,
    top: 30,
    padding: 20,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#e8e9eb',
    elevation: 10,
    position: 'relative',
  },
  textInput: {
    height: 40,
    width: 200,
    borderColor: '#7B0B48',
    borderRadius: 6,
    backgroundColor: '#CFBFCF',
    borderWidth: 2,
    marginTop: 45,
    marginBottom: 10,
  },
  outerTextInput: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  textStyle: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 25,
    color: '#7B0B48',
    fontFamily: 'Acme-Regular',
  },
});
export default App;

