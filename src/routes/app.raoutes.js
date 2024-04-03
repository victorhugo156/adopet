import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import PetList from "../screens/PetList";

//Destructure the Stack Navigator so I can have access to the elements Navigator and Screen
const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="login"
                component={Login}
            />

            <Screen
                name="signUp"
                component={SignUp}
            />

            <Screen
                name="petsList"
                component={PetList}
            />
        </Navigator>
    )
}