import {ScrollView, View, Text} from "react-native"
import React from "react"
import { pal1, pal2, pal3, pal4, pal5, styles } from '../../estilo';
import CardPontosTuristicos from "../Card/CardPontosTuristicos/CardPontosTuristicos"
import Extra from "../Sticker/extra"
export default function CarroselOfertas(){
  //TODO: fazer conexão de dados para não precisar deixar tudo no codigo  
  const pontosTuristicos =[
{
"img":'https://cdn.awsli.com.br/800x800/163/163535/produto/12248168/800fe34bea.jpg',
"solid1":true,
"solid2":true,
"solid3":true,
"solid4":true,
"solid5":false,
"titulo":'parque das cerejeiras',
"tipoPontoTuristico":"parque",
"descricao":"lorem ispum dolor sit amet",
"tipoEntrada":"entrada gratuita"

},
{
"img":'https://cdn.awsli.com.br/800x800/163/163535/produto/12248168/800fe34bea.jpg',
"solid1":true,
"solid2":true,
"solid3":true,
"solid4":true,
"solid5":false,
"titulo":'parque das cerejeiras',
"tipoPontoTuristico":"parque",
"descricao":"lorem ispum dolor sit amet",
"tipoEntrada":"entrada gratuita"

},
{
"img":'https://cdn.awsli.com.br/800x800/163/163535/produto/12248168/800fe34bea.jpg',
"solid1":true,
"solid2":true,
"solid3":true,
"solid4":true,
"solid5":false,
"titulo":'parque das cerejeiras',
"tipoPontoTuristico":"parque",
"descricao":"lorem ispum dolor sit amet",
"tipoEntrada":"entrada gratuita"

},
{
"img":'https://cdn.awsli.com.br/800x800/163/163535/produto/12248168/800fe34bea.jpg',
"solid1":true,
"solid2":true,
"solid3":true,
"solid4":true,
"solid5":false,
"titulo":'parque das cerejeiras',
"tipoPontoTuristico":"parque",
"descricao":"lorem ispum dolor sit amet",
"tipoEntrada":"entrada gratuita"

},
  ]
 const ListaPontosTuristicos = pontosTuristicos
  return(
    <>
    <View  style={styles.carrosel}>
<Text style = {styles.txtCarrosel}>
Pontos turisticos
</Text>
    <ScrollView horizontal>
    {ListaPontosTuristicos.map ((c,key)  => 
   
      <CardPontosTuristicos
          img={
            c.img
          }
          solid1={c.solid1}
          solid2={c.solid2}
          solid3={c.solid3}
          solid4={c.solid4}
          solid5={c.solid5}
          titulo={c.titulo}
          tipoPontoTuristico={c.tipoPontoTuristico}
          descricao={c.descricao}
          tipoEntrada={c.tipoEntrada}
        />
      )}
    </ScrollView>
    </View>
    </>
  )
}