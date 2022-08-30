import NoteCard from 'components/NoteCard';
import { Text, View } from 'components/Themed';
import Layout from 'constants/Layout';
import { Button, FlatList, ScrollView, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { decrement, increment, selectCount } from 'store/slices/counterSlice';
import { RootTabScreenProps } from 'types';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ScrollView>
        <View style={styles.grid}>
          <NoteCard
            title="First Note"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
          <NoteCard
            title="First Note"
            content="Lorem Ipsum is simply dummy text of the standard dummy text ever since the 1ter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
          <NoteCard
            title="First Note"
            content="s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
          <NoteCard
            title="First Note"
            content="Lorem Ipsum is simply dummy te standard dummy text ever since the 1500s, when an un galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
          <NoteCard title="First Note" content="asdasdasdasdas" />
          <NoteCard
            title="First Note"
            content="Lorem dard dumunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
          <NoteCard
            title="First Note"
            content="dummy text ever since the 1500s, type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
          <NoteCard
            title="First Note"
            content="Lorem Ipsum the industry's standard dummy text ever since ook a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
        </View>
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

  grid: {
    alignSelf: 'baseline',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'baseline',
  },
});
