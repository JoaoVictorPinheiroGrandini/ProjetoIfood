import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export const OptionBox = ({ text, source, onPress, style}) => {
    return (
      <TouchableOpacity style={[styles.caixa, style]} onPress={onPress}>
          <Image style={styles.caixaimagem} source={source}/>
          <Text style={styles.caixaTexto}> 
            {text}
          </Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  caixa: {
    height: 80,
    backgroundColor: '#DCDCDC',
    borderRadius: 9,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 6,
  },
  caixaTexto: {
    fontSize: 10,
    color: "black",
    fontWeight: "500",
  },
  caixaimagem: {
    width: 50,
    height: 50,
    marginBottom: 10
  },
});