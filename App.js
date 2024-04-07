import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Library Theme from React
import { ThemeProvider } from 'styled-components';
//My Const Theme that I have created
import theme from './src/theme/theme';


import Home from './src/screens/Home';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import PetList from './src/screens/PetList';

import { Routes } from './src/routes';

export default function App() {
  return (

    //Theme Provider will add the theme for all screens
    <ThemeProvider theme={theme}>
      {/** Here I''m calling Routes wich has the Navigation Container and the Routes setted  */}
     <Routes />
    </ThemeProvider>
    
  );
}
