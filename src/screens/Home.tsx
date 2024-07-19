import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/header/index'
; // Adjust the import path as needed

const Cards: React.FunctionComponent = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Header title={'omc'} />,
    });
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Your content here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
});

export default Cards;
