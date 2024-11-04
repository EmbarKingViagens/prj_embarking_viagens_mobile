import { StyleSheet } from 'react-native';
import { pal1, pal2, pal3, pal4, pal5 } from '../../../estilo';
export default StyleSheet.create({
  cardPacotes: {
    height: 500,
    width: 250,
    backgroundColor: pal3,
    borderRadius: 10,
    overflow: 'hidden',
     marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  titulo: {
    position: 'absolute',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#fff',
    top: 170,
  },
  imagem: {
    width: '100%',
    height: 150,
  },
  cardTop: {
    position: 'absolute',
    bottom: 170,
  },
  cardBottom: {
    position: 'absolute',
    borderTopWidth: 1,
    borderTopColor: '#fff',
    margin: 10,
    bottom: 65,
  },
  precoOriginal: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    fontWeight: 'light',
    color: '#fff',
  },

  precoPromocional: {
    fontSize: 20,
    color: '#fff',
  },

  txtPrecoPessoa: {
    fontSize: 16,
    color: '#fff',
  },
  txtAviso: {
    fontSize: 10,
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 5,
  },
  texto: {
    color: '#fff',
    marginLeft: 5,
  },
  tempoViagem: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '50%',
    zIndex: 1,
    padding: 5,
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    top: 135,
  },
  txtTempoViagem: {
    textAlign: 'center',
  },
  pacoteBtn: {
    position: 'absolute',
    bottom: 10,
  },
});
