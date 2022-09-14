import React, { useState} from 'react';

import { 
  StyleSheet,
  Text, 
  View, 
  TextInput, 
  Button, 
  // textButton, 
  addItem, 
  color,
} from 'react-native';

// import { AddTask, CustomModal } from ´./components/index´;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
    justifyContent: "center" , 
    alignItems: "center", 
  },
  Button: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: "center", 
    alignItems: "center", 
    paddingHorizontal: 20, 
    paddingVertical: 40, 
  },
  item: {
    fontSize: 20,
  },
});

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  return (

  <View style= {styles.container}> 
    <View style={styles.inputContainer}>
      <TextInput placeholder="Galería1"/>
      <Button title={"Hola mundo"} onPress={addItem} color={color}/>
      <TextInput placeholder="Galería2"/>
      <Button title={"Hola mundo"} onPress={addItem} color={color}/>
      <TextInput placeholder="Galería3"/>
      <Button title={"Hola mundo"} onPress={addItem} color={color}/>
      <TextInput placeholder="Galería4"/>
      <Button title={"Hola mundo"} onPress={addItem} color={color}/>
    </View> 
  </View>
  );
}
