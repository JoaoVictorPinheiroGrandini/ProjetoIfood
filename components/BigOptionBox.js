import { Text, Image, TouchableOpacity, StyleSheet, View } from 'react-native';

export const BigOptionBox = ({text, source, onPress, style}) => {
    return (
      <TouchableOpacity style={[styles.caixa, style]} onPress={onPress}>
          <View style={styles.caixaTexto}>
            <Text style={styles.texto}> 
              {text}
            </Text>
          </View>
          <View style={styles.caixaImagem}>
              <Image style={styles.imagem} source={source}/>
          </View>
      </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
  caixa: {
    height: 80,
    backgroundColor: '#DCDCDC',
    borderRadius: 9,
    justifyContent: 'space-evenly',
    paddingBottom: 6,
    flexDirection: "row",
    paddingTop: 5,
    paddingLeft: 5
  },
  texto: {
    fontSize: 12,
    fontWeight: "500",
    color: "black",
    flex: 1,
  },
  caixaTexto: {
    justifyContent: "start",
    flex: 1
  },
  caixaImagem: {
    flex: 1
  },
  imagem: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
});
