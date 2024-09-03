import { SafeAreaView, ScrollView, StyleSheet, StatusBar, Alert, View} from 'react-native';

import { OptionBox } from "./components/OptionBox"

import {BigOptionBox} from "./components/BigOptionBox"

export default function App() {
  const handlePress = () => {
    Alert.alert("Olá Mundo")
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerBigOptionBox}> 
        <BigOptionBox style={styles.styleBigOptionBox} text="Restaurantes" source={require("./assets/kitMedico.png")} onPress ={handlePress}/>
        <BigOptionBox style={styles.styleBigOptionBox} text="Mercados" source={require("./assets/kitMedico.png")} onPress ={handlePress}/>
      </View>
      <View style={styles.containerOptionBox}>
        <OptionBox style={styles.styleOptionBox} text="Farmácias" source={require("./assets/kitMedico.png")} onPress ={handlePress}/>
        <OptionBox style={styles.styleOptionBox} text="Bebidas" source={require("./assets/bebida.png")} onPress ={handlePress} />
        <OptionBox style={styles.styleOptionBox} text="Cupons" source={require("./assets/cupom.png")} onPress ={handlePress} />
        <OptionBox style={styles.styleOptionBox} text="Ver mais" source={require("./assets/adicao.png")} onPress ={handlePress} />
      </View>
      <ScrollView styles={styles.bigScroll} horizontal> 
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 5,
    paddingTop: StatusBar.currentHeight
  },
  containerOptionBox: {
    flexDirection: "row",
    marginTop: 7,
    paddingHorizontal: 5
  },
  containerBigOptionBox: {
    flexDirection: "row",
    paddingHorizontal: 5
  },
  styleBigOptionBox: {
    marginHorizontal: 5,
    flex: 1
  },
  styleOptionBox: {
    marginHorizontal: 5,
    flex: 1
  },
  bigScroll: {
    
  }
});
