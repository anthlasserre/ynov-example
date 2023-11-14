import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EmptyScreen } from "../components/EmptyScreen";

// Create a native stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FirstScreen" component={EmptyScreen} />
      <Stack.Screen name="SecondScreen" component={EmptyScreen} />
    </Stack.Navigator>
  );
}
