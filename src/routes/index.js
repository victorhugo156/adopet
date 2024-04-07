import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.raoutes";

export function Routes(){
    return(
        //This is the Container which will hold the Routes, it cames from the React-Native Library.
        <NavigationContainer>
            {/** This is a componet of the Routes */}
            <AppRoutes />
        </NavigationContainer>
    )
}