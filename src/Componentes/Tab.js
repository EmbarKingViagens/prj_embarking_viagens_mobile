import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import Pacotes from "../Pages/Pacotes"
import PontosTuristicos from '../Pages/PontosTuristicos.js';
const Tab = createBottomTabNavigator();
import { pal1, pal2, pal3, pal4, pal5, styles } from '../../src/estilo.js';
export default (props) => (
  <Tab.Navigator 
  tabBarOptions={{ 
    activeTintColor: pal3, 
    inactiveTintColor: pal3, 
    labelStyle: { fontSize: 12 } 
  }}
  screenOptions={{ 
    headerShown: false 
  }}
>


    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: () => (
          <Icon name="home" type="font-awesome-5" color={pal3} />
        ),
      }}
    />
    <Tab.Screen
      name="Pacotes"
      component={Pacotes}
      options={{
        tabBarLabel: 'Pacotes',
        tabBarIcon: () => (
          <Icon name="suitcase-rolling" type="font-awesome-5" color={pal3} />
        ),
      }}
    />
    {/* o location-dot n está functionando */}
    <Tab.Screen
      name="Pontos turisticos"
      component={PontosTuristicos}
      options={{
        tabBarLabel: 'Pontos',
        tabBarIcon: () => (
          <Icon name="bars" type="font-awesome-5" color={pal3} />
        ),
      }}
    />
    {/*o icone pode ser ou coração ou estrela */}
    <Tab.Screen
      name="Chat"
      component={Home}
      options={{
        tabBarLabel: 'Favoritos',
        tabBarIcon: () => (
          
          <Icon name="heart" type="font-awesome-5" color={pal3} solid />
        ),
      }}
    />
    <Tab.Screen
      name="Minha conts"
      component={Home}
      options={{
        tabBarLabel: 'Minha conta',
        tabBarIcon: () => (
          <Icon name="user" type="font-awesome-5" color={pal3} solid />
        ),
      }}
    />
  </Tab.Navigator>
);
