import { Text, SafeAreaView, ScrollView } from 'react-native';
import { pal1, pal2, pal3, pal4, pal5, styles } from '../../src/estilo.js';
import CarroselOfertas from '../Componentes/Carrosel/Ofertas'
import Logo from "../Componentes/Logo/Logo"
import CardRecentes from '../../src/Componentes/Card/CardRecentes/CardRecentes';
import CarroselRecentes from "../Componentes/Carrosel/Recentes"
import CardPacotes from '../../src/Componentes/Card/CardPacotes/CardPacotes.js';
import CarroselPacotes from "../Componentes/Carrosel/Pacotes"
import Extra from '../../src/Componentes/Sticker/extra';
import BarraBusca from "../Componentes/SearchBar/SearchBar.js"
import CarroselPontosTuristicos from "../Componentes/Carrosel/PontosTuristicos"
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Logo
        avatar={"https://th.bing.com/th/id/R.ec41fc356afffcad45ed2b35755f42fb?rik=lB1c3%2byspk0L%2fQ&pid=ImgRaw&r=0&sres=1&sresct=1"}
        nome="amanda"
      />
      <ScrollView>
        <BarraBusca />
        <CarroselOfertas />
        <CarroselRecentes />
        <CarroselPacotes />
        <CarroselPontosTuristicos tipoPontoTuristico={"Pontos turisticos"} />
      </ScrollView>
    </SafeAreaView>
  )
}