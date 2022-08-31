import NoteCard from 'components/NoteCard';
import { View, Text } from 'components/Themed';
import { ScrollView, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectNotes } from 'store/slices/noteSlice';
import { RootTabScreenProps } from 'types';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const dispatch = useAppDispatch();
  const notes = useAppSelector(selectNotes);
  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ScrollView>
        {notes.length > 0 ? (
          <View style={styles.grid}>
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </View>
        ) : (
          <View style={styles.centered}>
            <Text>No notes yet</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 6,
    height: 1,
    width: '100%',
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'baseline',
  },
});
