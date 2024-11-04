import { Text, SafeAreaView, ScrollView } from 'react-native';
import { pal1, pal2, pal3, pal4, pal5, styles } from '../../src/estilo.js';
import CarroselOfertas from '../Componentes/Carrosel/Ofertas'
import Logo from "../Componentes/Logo/Logo"
import CardRecentes from '../../src/Componentes/Card/CardRecentes/CardRecentes';

import CardPacotes from '../../src/Componentes/Card/CardPacotes/CardPacotes.js';
import Extra from '../../src/Componentes/Sticker/extra';
import BarraBusca from "../Componentes/SearchBar/SearchBar.js"
import CardPontosTuristicos from '../../src/Componentes/Card/CardPontosTuristicos/CardPontosTuristicos';
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Logo
        avatar={"https://th.bing.com/th/id/R.ec41fc356afffcad45ed2b35755f42fb?rik=lB1c3%2byspk0L%2fQ&pid=ImgRaw&r=0&sres=1&sresct=1"}
        nome="amanda"
      />
      <ScrollView>
<BarraBusca/>
        <CarroselOfertas />



        <CardRecentes />

        <CardPacotes
          local={'Pequim (China)'}
          precoOriginal={'R$: 400'}
          tempoViagem={'3 dias / 2 noites'}
          precoPromocional={'200'}
          data={'10-12 dec.'}
          img={
            'https://th.bing.com/th/id/R.e1f4dcb4d7201414e8b56f20b834cd73?rik=OxKo7zDYxZLk5A&riu=http%3a%2f%2fwww.joaoleitao.com%2fviagens%2fwp-content%2fuploads%2f2015%2f11%2fVisitar-Pequim.jpg&ehk=Na1H3WMvwXV%2fSbG%2b%2fruk5kr4sb57%2ba510bvPU1Gx8FM%3d&risl=&pid=ImgRaw&r=0'
          }
          qtdAvaliacoes={'5'}
          star1={'star'}
          star2={'star'}
          star3={'star'}
          star4={'star'}
          star5={'star'}
          solid1
          solid2
          solid3>
          <Extra icone={'mug-hot'} txtExtra={'café da manha gratis'} />
          <Extra icone={'mug-hot'} txtExtra={'café da manha gratis'} />
        </CardPacotes>
        <CardPontosTuristicos
          img={
            'https://cdn.awsli.com.br/800x800/163/163535/produto/12248168/800fe34bea.jpg'
          }
          solid1
          solid2
          solid3
          solid4
          titulo={'parque das cerejeiras'}
          tipoPontoTuristico={"parque"}
          descricao={"lorem ispum dolor sit amet"}
          tipoEntrada={"entrada gratuita"}
        />
      </ScrollView>
    </SafeAreaView>
  )
}