import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './estiloCardOfertas';

const CardOfertas = ({
  nomeOferta,
  txtTempoOfertas,
  link,
  color,
  simbolo1,
  simbolo2,
  simbolo3,
  simbolo4,
  txtIncluindo1,
  txtIncluindo2,
  txtIncluindo3,
  txtIncluindo4,
}) => {
  return (
    <View style={[styles.cardOfertas, { borderBottomColor: color }]}>
      <Text style={[styles.titulo, { color }]}>{nomeOferta}</Text>
      <View style={styles.divisor}>
        <View>
          <View style={styles.tempoOfertas}>
            <Text style={[styles.subtitulo, { color }]}>{txtTempoOfertas}</Text>
          </View>
          <View style={[styles.incluindo, { backgroundColor: color }]}>
            <View style={styles.icons}>
              {[
                { nome: simbolo1, texto: txtIncluindo1 },
                { nome: simbolo2, texto: txtIncluindo2 },
                { nome: simbolo3, texto: txtIncluindo3 },
                { nome: simbolo4, texto: txtIncluindo4 },
              ].map((item, index) => (
                <View key={index} style={styles.iconContainer}>
                  <Icon
                    name={item.nome}
                    style={styles.icon}
                    type="font-awesome-5"
                    color="#fff"
                  />
                  <Text style={styles.txtIncluindo}>{item.texto}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        <Image style={styles.imgOferta} source={{ uri: link }} />
      </View>
    </View>
  );
};

export default CardOfertas;
