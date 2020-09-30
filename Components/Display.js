import React from 'react';
import {StyleSheet, ScrollView, Button, View, Text} from 'react-native';
const Display = (props) => {
  let {taskCount, completedTask} = props;
  return (
    <ScrollView>
      <View>
        <View flexDirection={'row'}>
          <View marginLeft={40}>
            <Text style={{fontFamily: 'Acme-Regular'}}>Task Assigned</Text>
            <View style={styles.innerbox}>
              <Text style={styles.textInnerBox}>{taskCount}</Text>
            </View>
          </View>
          <View marginLeft={30}>
            <Text style={{fontFamily: 'Acme-Regular'}}>Task Completed</Text>
            <View style={styles.innerbox}>
              <Text style={styles.textInnerBox}>{completedTask}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  innerbox: {
    width: 50,
    height: 45,
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
    marginBottom: 10,
  },
});

export default Display;
