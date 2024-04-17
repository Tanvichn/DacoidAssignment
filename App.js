const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AndroidLarge6 from "./screens/AndroidLarge6";
import AndroidLarge1 from "./screens/AndroidLarge1";
import AndroidLarge2 from "./screens/AndroidLarge2";
import AndroidLarge3 from "./screens/AndroidLarge3";
import AndroidLarge4 from "./screens/AndroidLarge4";
import AndroidLarge5 from "./screens/AndroidLarge5";
import AndroidLarge from "./screens/AndroidLarge";
import Property1Default from "./components/Property1Default";
import Property1Default1 from "./components/Property1Default1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Quicksand-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Quicksand-SemiBold": require("./assets/fonts/Quicksand-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="AndroidLarge6"
              component={AndroidLarge6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge1"
              component={AndroidLarge1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge2"
              component={AndroidLarge2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge3"
              component={AndroidLarge3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge4"
              component={AndroidLarge4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge5"
              component={AndroidLarge5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge"
              component={AndroidLarge}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
