/*
Importing fonts from expo-google-fonts

You need to install the fonts: npx expo install expo-font @expo-google-fonts/poppins

More Info check: https://docs.expo.dev/develop/user-interface/fonts/
*/
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

//Library Theme from React
import { ThemeProvider } from 'styled-components';
//My Const Theme that I have created
import theme from './src/theme/theme';

//Importing Firebase stuff
import { firebaseConfig } from './src/config/Config';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { AuthContext } from './src/contexts/auth';
import { DBContext } from './src/contexts/Db';



import Home from './src/screens/Home';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import PetList from './src/screens/PetList';
import ProfilePet from './src/screens/ProfilePet';

import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';

export default function App() {

  /*
  Here I'm loading the fonts, sometimes the fonts can take awhile to be loaded,
  so it is important to make sure that our App will show up any font. 

  That's why I'm using an array that will return a boolean value. 

  The state "fontsLoaded" will be watching if the fonts are loaded and 
  it will return true or false.
  */
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold });

  //I'm Initializing the Firebase
  const FBapp = initializeApp(firebaseConfig);
  const FBauth = getAuth(FBauth);
  const FBdb = getFirestore(FBdb)


  return (

    //Theme Provider will add the theme for all screens
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={FBauth}>
        <DBContext.Provider value={FBdb}>
          {/** Here I''m calling Routes wich has the Navigation Container and the Routes setted  */}

          {/**Here I'm using the ternary condition to check if the fonts are loaded, 
       * if it's true will open the app if it's false will show loading...  */}
          {fontsLoaded ? <Routes /> : <Loading />}
        </DBContext.Provider>
      </AuthContext.Provider>
    </ThemeProvider>

  );
}
