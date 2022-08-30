import { Text, View } from 'components/Themed';
import Colors from 'constants/Colors';
import Layout from 'constants/Layout';
import { Button, StyleSheet, TouchableOpacity } from 'react-native';

interface CardProps {
  title?: string;
  content?: string;
}

const NoteCard = ({ title, content }: CardProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        // alert('touched');
      }}
    >
      <View style={styles.stackCol}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.separator} />
        <Text style={styles.content}>{content}</Text>
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
    borderColor: Colors.light.tint,
    borderWidth: 0.8,
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
