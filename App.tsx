import { NavigationContainer } from "@react-navigation/native"
import Login from "./pages/Login"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "./pages/Home"

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
