import { Text, View } from 'components/Themed';
import Colors from 'constants/Colors';
import Layout from 'constants/Layout';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Note } from 'store/slices/noteSlice';
import {
  selectCurrentNotes,
  setSelectedNotes,
} from 'store/slices/selectedNotesSlice';

interface CardProps {
  note: Note;
}

const NoteCard = ({ note }: CardProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useAppDispatch();
  const selectedNotes = useAppSelector(selectCurrentNotes);

  useEffect(() => {
    console.log('selectedNotes', selectedNotes);
  }, [selectedNotes]);

  const onLongPressHandler = () => {
    setIsSelected(!isSelected);
    dispatch(setSelectedNotes(note));
  };

  const onPressHandler = () => {
    if (isSelected) {
      setIsSelected(false);
      dispatch(setSelectedNotes(note));
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, isSelected ? styles.selected : {}]}
      onLongPress={() => onLongPressHandler()}
      activeOpacity={0.6}
      onPress={() => onPressHandler()}
    >
      <View style={styles.stackCol}>
        <Text style={styles.title}>{note.title}</Text>
        <View style={styles.separator} />
        <Text style={styles.content}>{note.content}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default NoteCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 8,
    width: Layout.window.width / 2 - 20,
    borderRadius: 10,
    borderColor: Colors.light.tabIconDefault,
    borderWidth: 0.8,
  },
  selected: {
    borderColor: Colors.light.tint,
  },
  stackCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  separator: {
    marginBottom: 10,
    height: 1,
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 12,
  },
});
