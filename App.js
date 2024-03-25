import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
  const handleTextChange = (text) => {
    setTodoText(text);
  };
  const addTodo = () => {
    if (todoText.trim() === '') return;
    let todoItem = todoText.trim().toLowerCase() === 'super' ? 'Thank you' : todoText;
    setTodos([...todos, { id: Math.random().toString(), text:'• ' + todoItem }]);
    setTodoText('');
  };
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
  <TextInput
    value={todoText}
    onChangeText={handleTextChange}
    placeholder="Enter Todo"
    style={styles.input}
  />

  <Button title="Add Todo" onPress={addTodo} />

  <FlatList
    data={todos}
    keyExtractor={(item) => item.id}
    renderItem={(item) => (
      <TouchableOpacity onPress={() => removeTodo(item.item.id)} style={styles.todoItem}>
        <Text style={styles.todoText}>{item.item.text}</Text>
        <Text style={styles.deleteButton}>❌</Text>
      </TouchableOpacity>
    )}
  />
</View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 10,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
  },
  deleteButton: {
    color: 'red',
    marginLeft: 10,
    fontSize: 16,
  },
});
export default TodoApp;