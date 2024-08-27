import { useEffect, useRef } from 'react';
import { Image, StyleSheet, View, Text, Animated } from 'react-native';

interface PropsCard {
  name: string;
  domain?: string;
  constellation?: string;
  image: string;
}

export const Card = (props: PropsCard) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: props.image }} style={styles.image}></Image>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.constellation}>
        {props.constellation ? 'Constellation: ' : 'Domain: '}

        {props.constellation || props.domain}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
    objectFit: 'contain',
  },
  card: {
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  constellation: {
    fontSize: 16,
    color: '#eee',
  },
});

export function AnimatedItemCard({
  item,
  index,
}: {
  item: PropsCard;
  index: number;
}) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }, [index, opacity]);

  return (
    <Animated.View style={{ opacity }}>
      <Card {...item}></Card>
    </Animated.View>
  );
}
