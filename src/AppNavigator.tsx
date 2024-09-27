import { createStackNavigator } from '@react-navigation/stack';
import PreviewPage from './PreviewPage'; // 确保路径正确
import HomePage from './HomePage';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Preview" component={PreviewPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};