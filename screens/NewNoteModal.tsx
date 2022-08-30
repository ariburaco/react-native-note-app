import EditScreenInfo from 'components/EditScreenInfo';
import { View, Text } from 'components/Themed';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Button,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useAppSelector } from 'store/hooks';
import { selectCount } from 'store/slices/counterSlice';

export default function ModalScreen() {
  const count = useAppSelector(selectCount);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Note</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
        placeholder="Title"
      />
      <TextInput
        placeholder="Content"
        style={styles.input}
        onChangeText={setContent}
        value={content}
        multiline
        numberOfLines={4}
      />
      <Pressable style={styles.button} onPress={() => {}}>
        <Text style={styles.button}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: 'left',
    textAlignVertical: 'top',
    width: '80%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ff4081',
  },
});
