import { Link } from 'expo-router';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useGetKnights } from '../../Hooks/Main/useGetKninghts';
import { AnimatedItemCard } from '../Common/Card';

export function KninghtsComponent() {
  const kininghts = useGetKnights();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {kininghts.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={kininghts}
          keyExtractor={(kininght) => kininght.name}
          renderItem={({ item, index }) => (
            <AnimatedItemCard item={item} index={index}></AnimatedItemCard>
          )}
        ></FlatList>
      )}
      <Link href="/" asChild></Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 12,
  },
});
