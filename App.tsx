import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import AppRoutes from './src/app/routes/app.routes';
import { useColorScheme } from 'react-native';
import ToastsComponent from './src/utils/components/message/Toasts.component';
import { KEY_NICK, KEY_TOKEN } from './src/utils/constants/storages.constant';
import { useEffect } from 'react';
import { useLoggInStore } from './src/stores/LoggIn.store';

const Stack = createNativeStackNavigator()

export default function App() {
  const updateLoggIn = useLoggInStore(state => state.updateLoggIn)

  async function verifyTokenAuth() {
    const resultToken = await SecureStore.getItemAsync(KEY_TOKEN)
    const resultNick = await SecureStore.getItemAsync(KEY_NICK)
    if(resultToken && resultNick) {
      updateLoggIn({ nick: resultNick, token: resultToken })
    }
  }

  useEffect(() => {
    verifyTokenAuth()
  })

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <ToastsComponent position='top' iconClose={true} animation='sliceTop' />
      <Stack.Navigator initialRouteName='Login' screenOptions={{
        headerShadowVisible: false,
        headerShown: false
      }}>
        {
          AppRoutes.map((route, index) => (
            <Stack.Screen key={index} name={route.name} component={route.component} />
          ))
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
