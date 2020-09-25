/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text,
  TextInput,
  FlatList,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Todo from './Components/Todo';
const App = () => {
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
        <View flexDirection={'row'}>
          <View marginLeft={30}>
            <Text>Task Assigned</Text>
            <View style={styles.innerbox}>
              <Text style={styles.textInnerBox}>9</Text>
            </View>
          </View>
          <View marginLeft={30}>
            <Text>Task Completed</Text>

            <View style={styles.innerbox}>
              <Text
                alignItems="center"
                alignItems="center"
                justifyContent="center"
                alignSelf="center">
                9
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View flexDirection={'row'} style={styles.outerTextInput}>
        <View>
          <TextInput style={styles.textInput} placeholder="Enter your todo's" />
        </View>
        <View style={styles.button}>
          <Button title="Add Task" color="green"></Button>
        </View>
      </View>
      <View>
        <Text style={styles.textStyle}>Your Todo's</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#DAE0E2',
  },
  textStyle: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 20,
    color: '#7B0B48',
    fontFamily: 'Acme-Regular',
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
  innerbox: {
    width: 50,
    height: 30,
    left: 10,
    top: 10,
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#CFBFCF',
    elevation: 10,
    position: 'relative',
  },
  outerTextInput: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  textInnerBox: {
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default App;
