import { StyleSheet } from 'react-native';
import { pal1, pal2, pal3, pal4, pal5 } from '../../estilo';
export default StyleSheet.create({
  logo: {
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
    marginTop:25
  },
  imgPerfil: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: pal3,
  },
  imgLogo: {
    width: 25,
    height: 25,
    borderRadius: 50,
    zIndex: 1,
    right: 15,
    top: 45,
  },
  txtLogo:{
    color: pal3,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight:"bold"
  
  }
});
