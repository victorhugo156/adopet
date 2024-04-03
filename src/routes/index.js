import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.raoutes";

export function Routes(){
    return(
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}