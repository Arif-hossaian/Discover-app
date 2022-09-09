import { View, Text, useWindowDimensions } from 'react-native';
import React, { useState, useContext } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';
import DiscoverScreen from '../screens/DiscoverScreen';
import NewsScreen from '../screens/NewsScreen';
import TopNavigation from './TopNavigation';
import { NewsContext } from '../context/Context';

export default function DiscoverNow() {
  const { index, setIndex } = useContext(NewsContext);
  const layout = useWindowDimensions();
  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  });

  const [routes] = React.useState([
    { key: 'first', title: 'Discover' },
    { key: 'second', title: 'News' },
  ]);
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
}
