import { StyleSheet } from 'react-native';
import { pal1, pal2, pal3, pal4, pal5 } from '../../../estilo';

export default StyleSheet.create({
  cardOfertas: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    overflow: 'hidden',
    margin: 5,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 3,
  },
  subtitulo: {
    fontSize: 15,
    textAlign: 'center',
  },
  tempoOfertas: {
    width: '65%',
    backgroundColor: pal5,
    padding: 4,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  incluindo: {
    width: '65%',
    padding: 4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  txtIncluindo: {
    color: '#fff',
    margin: 3,
    fontSize: 10,
  },
  imgOferta: {
    zIndex: 1,
    width: 100,
    height: '100%',
    borderRadius: 5,
    marginLeft: -35,
  },
  icons: {
    flexDirection: 'row',
    margin: 3,
  },
  txtIcons: {
    flexDirection: 'row',
  },
  icon: {
    margin: 3,
  },
  divisor1: {
    flexDirection: 'row',
  },
  divisor2: {
    flexDirection: 'column',
  },
  preco: {
    width: 140,
    height: 55,
    borderRadius: 5,
    margin: 3,
  },
  txtPrecoAntigo: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    fontWeight: 'light',
    color: pal5,
    marginLeft: 10,
  },
  txtPrecoNovo: {
    fontSize: 25,
    fontWeight: 'light',
    color: '#fff',
    marginLeft: 10,
  },
});
