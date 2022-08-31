import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useColorScheme from 'hooks/useColorScheme';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ModalScreen from 'screens/NewNoteModal';
import NotFoundScreen from 'screens/NotFoundScreen';
import TabOneScreen from 'screens/Home';
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from 'types';
import LinkingConfiguration from './LinkingConfiguration';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  clearSelectedNotes,
  selectCurrentNotes,
  setSelectedNotes,
} from '../store/slices/selectedNotesSlice';
import { View } from 'components/Themed';
import { deleteSelectedNotes } from 'store/slices/noteSlice';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group>
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={({}) => ({
            title: 'New Note',
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const selectedNotes = useAppSelector(selectCurrentNotes);
  const dispatch = useAppDispatch();

  const onPressDelete = () => {
    dispatch(deleteSelectedNotes(selectedNotes));
    dispatch(clearSelectedNotes());
  };

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Notes',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {selectedNotes.length > 0 && (
                <Pressable
                  onPress={() => onPressDelete()}
                  style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                  })}
                >
                  <FontAwesome name="trash" size={32} />
                </Pressable>
              )}

              <Pressable
                onPress={() => navigation.navigate('Modal')}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <FontAwesome
                  name="plus"
                  size={32}
                  style={{ marginHorizontal: 15 }}
                />
              </Pressable>
            </View>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: 0 }} {...props} />;
}
