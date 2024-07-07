import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SignUp } from './screens'; // Make sure this path is correct
import Tabs from './navigation/tabs'; // Uncomment and ensure this file exists

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: 'transparent',
    },
};

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={'SignUp'}
            >
                <Stack.Screen name="SignUp" component={SignUp} />

                {/* Tabs */}
                <Stack.Screen name="HomeTabs" component={Tabs} />

                {/* <Stack.Screen name="Scan" component={Scan} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
