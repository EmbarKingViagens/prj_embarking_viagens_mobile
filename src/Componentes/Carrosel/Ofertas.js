import { ScrollView, View, Text } from "react-native"
import React from "react"
import { pal1, pal2, pal3, pal4, pal5, styles } from '../../estilo';
import CardOfertas from "../Card/CardOfertas/CardOfertas"
export default function CarroselOfertas() {
  //TODO: fazer conexão de dados para não precisar deixar tudo no codigo  
  const ofertas = [
    {
      "cod": 1,
      "simbolo1": "hotel",
      "simbolo2": 'mug-hot',
      "simbolo3": 'lock',
      "simbolo4": 'bus',
      "nomeOferta": "Rio de janeiro",
      "color": pal3,
      "txtTempoOfertas": '7 dias incluindo',
      "txtIncluindo1": "hotel incluso",
      "txtIncluindo2": "café da manha",
      "txtIncluindo3": "seguro",
      "txtIncluindo4": "onibus",
      "precoAntigo": 10,
      "precoNovo": 20,
      "link": "https://www.mappingmegan.com/wp-content/uploads/2014/12/shutterstock_134907293-002.jpg"
    },
    {
      "simbolo1": "hotel",
      "simbolo2": 'mug-hot',
      "simbolo3": 'lock',
      "simbolo4": 'bus',
      "nomeOferta": "Rio de janeiro",
      "color": pal4,
      "txtTempoOfertas": '7 dias incluindo',
      "txtIncluindo1": "hotel incluso",
      "txtIncluindo2": "café da manha",
      "txtIncluindo3": "seguro",
      "txtIncluindo4": "onibus",
      "link": "https://www.mappingmegan.com/wp-content/uploads/2014/12/shutterstock_134907293-002.jpg"
    },
    {
      "simbolo1": "hotel",
      "simbolo2": 'mug-hot',
      "simbolo3": 'lock',
      "simbolo4": 'bus',
      "nomeOferta": "Rio de janeiro",
      "color": pal1,
      "txtTempoOfertas": '7 dias incluindo',
      "txtIncluindo1": "hotel incluso",
      "txtIncluindo2": "café da manha",
      "txtIncluindo3": "seguro",
      "txtIncluindo4": "onibus",
      "link": "https://www.mappingmegan.com/wp-content/uploads/2014/12/shutterstock_134907293-002.jpg",

    },
    {
      "simbolo1": "hotel",
      "simbolo2": 'mug-hot',
      "simbolo3": 'lock',
      "simbolo4": 'bus',
      "nomeOferta": "Rio de janeiro",
      "color": pal2,
      "txtTempoOfertas": '7 dias incluindo',
      "txtIncluindo1": "hotel incluso",
      "txtIncluindo2": "café da manha",
      "txtIncluindo3": "seguro",
      "txtIncluindo4": "onibus",
      "link": "https://www.mappingmegan.com/wp-content/uploads/2014/12/shutterstock_134907293-002.jpg",
      "precoAntigo": 10
    },
  ]
  const ListaOfertas = ofertas
  return (
    <>
      <View style={styles.carrosel}>
        <Text style={styles.txtCarrosel}>
          Ofertas
        </Text>
        <ScrollView horizontal>
          {ListaOfertas.map((c) =>

            <CardOfertas
              simbolo1={c.simbolo1}
              simbolo2={c.simbolo2}
              simbolo3={c.simbolo3}
              simbolo4={c.simbolo4}
              nomeOferta={c.nomeOferta}
              color={c.color}
              txtTempoOfertas={c.txtTempoOfertas}
              txtIncluindo1={c.txtIncluindo1}
              txtIncluindo2={c.txtIncluindo2}
              txtIncluindo3={c.txtIncluindo3}
              txtIncluindo4={c.txtIncluindo4}
              txtPrecoAntigo={c.precoAntigo}
              txtPrecoNovo={c.precoNovo}
              link={
                c.link
              }
              key={c.cod}

            />
          )}
        </ScrollView>
      </View>
    </>
  )
}