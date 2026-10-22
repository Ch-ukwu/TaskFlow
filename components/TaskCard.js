import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const statusStyles = {
  Done: styles.done,
  Pending: styles.pending,
  'In Progress': styles.inProgress,
};

export default function TaskCard({ task }) {
  return (
    <Link href={{ pathname: '/task/[id]', params: { id: task.id } }} asChild>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${task.title}, ${task.status}. Open task details.`}
        style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      >
        <View style={styles.topRow}>
          <Text numberOfLines={2} style={styles.title}>
            {task.title}
          </Text>
          <Text style={[styles.badge, statusStyles[task.status] || styles.pending]}>
            {task.status}
          </Text>
        </View>
        {task.description ? (
          <Text numberOfLines={2} style={styles.description}>
            {task.description}
          </Text>
        ) : null}
        <Text style={styles.time}>{task.time}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 12,
    padding: 16,
    shadowColor: '#172033',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
  },
  pressed: {
    opacity: 0.8,
  },
  topRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  title: {
    color: '#172033',
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
  },
  badge: {
    borderRadius: 20,
    fontSize: 11,
    fontWeight: '700',
    overflow: 'hidden',
    paddingHorizontal: 9,
    paddingVertical: 5,
  },
  pending: {
    backgroundColor: '#EEF0F5',
    color: '#5C6475',
  },
  inProgress: {
    backgroundColor: '#E5EDFF',
    color: '#3159C9',
  },
  done: {
    backgroundColor: '#E1F5E9',
    color: '#247A45',
  },
  description: {
    color: '#6C7485',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 10,
  },
  time: {
    color: '#858C9B',
    fontSize: 12,
    marginTop: 12,
  },
});
