import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeedScreen from '../screens/Feed';
import CreatePostScreen from '../screens/CreatePost';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      ScreenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'CreatePost') {
            iconName = focused ? 'create' : 'create-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
       tabBarOptions={{
         activeTintColor:'tomato',
         inactiveTintColor:'grey'
       }}
      >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="CreatePost" component={CreatePostScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
