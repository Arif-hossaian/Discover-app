import React, { useContext } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DiscoverNow from './components/DiscoverNow';
import Context, { NewsContext } from './context/Context';

const App = () => {
  const { darkTheme } = useContext(NewsContext);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? '#282c35' : 'white',
      }}
    >
      <DiscoverNow />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
