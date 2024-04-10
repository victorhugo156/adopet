import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import PetList from "../screens/PetList";
import ProfilePet from "../screens/ProfilePet";

//Destructure the Stack Navigator so I can have access to the elements Navigator and Screen
const { Navigator, Screen } = createNativeStackNavigator()

//This Function is mapping all the screen where the routes needs to take it.
export function AppRoutes() {
    return (
        //Inside the "createNativeStackNavigator", there are lots of differntes elements to work on,
        //that's why I have destructed the element above to have just access to the Navigator and Screen
        <Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
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

            <Screen
            name='profilePet'
            component={ProfilePet}
            
            />
        </Navigator>
    )
}