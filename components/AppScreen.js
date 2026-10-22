import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

export default function AppScreen({ children, includeBottom = false }) {
  return (
    <SafeAreaView
      edges={includeBottom ? ['top', 'right', 'bottom', 'left'] : ['top', 'right', 'left']}
      style={styles.screen}
    >
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F7F8FC',
  },
});
