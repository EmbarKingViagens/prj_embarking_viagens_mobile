import { Text, SafeAreaView, ScrollView } from 'react-native';
import { pal1, pal2, pal3, pal4, pal5, styles } from './src/estilo.js';
import { NavigationContainer } from '@react-navigation/native';

import Tab from "./src/Componentes/Tab"
export default function App() {
  return (
      <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Tab />
      </SafeAreaView>
    </NavigationContainer>
  );
}
