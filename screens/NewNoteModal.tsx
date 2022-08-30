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
        style={styles.textarea}
        onChangeText={setContent}
        value={content}
        multiline
        numberOfLines={4}
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          alert('Saved');
        }}
      >
        <Text style={{ fontSize: 16 }}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  input: {
    margin: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    textAlign: 'left',
    textAlignVertical: 'center',
    width: '80%',
  },

  textarea: {
    margin: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    textAlign: 'left',
    textAlignVertical: 'top',
    width: '80%',
  },
  button: {
    width: '80%',
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    elevation: 10,
    borderRadius: 4,
    backgroundColor: '#ff4081',
  },
});
