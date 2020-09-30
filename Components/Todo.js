import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Todo = (props) => {
  let {list, handlePress, handleTaskComplete} = props;
  return (
    <ScrollView>
      <View>
        <Text style={styles.textStyle}>Your Todo's</Text>
      </View>
      {list.map((item) => {
        return (
          <View key={item.id} style={{flexDirection: 'row'}}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => handleTaskComplete(item)}>
                <Text
                  style={
                    item.isCompleted && {textDecorationLine: 'line-through'}
                  }>
                  {item.todo}
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.delete}
                onPress={() => handlePress(item)}>
                <FontAwesome5
                  style={{fontSize: 15, color: 'white'}}
                  name="trash"
                />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

//Styles for the todo component
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#CFBFCF',
    padding: 10,
    height: 40,
    width: 300,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: '#7B0B48',
    borderWidth: 2,
  },
  delete: {
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 10,
    height: 35,
    width: 35,
    marginVertical: 8,
    marginHorizontal: 2,
    borderColor: '#7B0B48',
  },
  textStyle: {
    marginTop: 20,
    marginLeft: 10,
    textAlign: 'center',
    fontSize: 20,
    color: '#7B0B48',
    fontFamily: 'Acme-Regular',
  },
});
export default Todo;
