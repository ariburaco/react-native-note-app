import { Text, View } from 'components/Themed';
import { useState } from 'react';
import { Pressable, StyleSheet, TextInput } from 'react-native';
import 'react-native-get-random-values';
import { useAppDispatch } from 'store/hooks';
import { addNote, Note } from 'store/slices/noteSlice';
import { RootTabScreenProps } from 'types';
import { v4 as uuidv4 } from 'uuid';

export default function ModalScreen({ navigation }: any) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useAppDispatch();

  const addNewNoteHandler = () => {
    const newNote: Note = {
      id: uuidv4(),
      title,
      content,
    };
    dispatch(addNote(newNote));
    navigation.navigate('TabOne');
  };

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
          addNewNoteHandler();
        }}
      >
        <Text style={styles.buttonText}>Save</Text>
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
  buttonText: { fontSize: 16, color: '#fff', fontWeight: 'bold' },
});
