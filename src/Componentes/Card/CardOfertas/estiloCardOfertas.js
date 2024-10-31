import { StyleSheet } from 'react-native';
import { pal1, pal2, pal3, pal4, pal5 } from '../../../estilo';

export default StyleSheet.create({
  cardOfertas: {
    width: '80%',
    backgroundColor: '#fff',
    borderBottomWidth: 10,
    borderRadius: 10,
    padding: 5,
    overflow: 'hidden',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 3,
  },
  subtitulo: {
    fontSize: 20,
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
    width: 100,
    height: 100,
    borderRadius: 5,
    margin: 0,
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
  divisor: {
    flexDirection: 'row',
  },
});
