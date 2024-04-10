import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.tipo) {
    case "setText":
      return { ...state, texto: action.payload };
    case "setNomeCompleto":
      return { ...state, nomeUsuario: action.payload };
    default:
      return state;
  }
};

const valorInicial = {
  texto: "",
  nomeUsuario: ""
};

export default function App() {
  let textoDigitado;
  let nomeCompleto;

  const [state, dispatch] = useReducer(reducer, valorInicial);

  return (
    <View style={styles.container}>
      <Text>Use Reduce</Text>
      <Text>{state.texto}</Text>
      <Text>{state.nomeUsuario}</Text>

      <TextInput
        style={styles.input}
        onChangeText={(texto) => (textoDigitado = texto)}
      />

      <TextInput
        style={styles.input}
        onChangeText={(texto) => (nomeCompleto = texto)}
      />

      <Button
        title="Alterar Texto"
        onPress={() => dispatch({ tipo: "setText", payload: textoDigitado })}
      />

      <Button
        title="Nome Completo"
        onPress={() =>
          dispatch({ tipo: "setNomeCompleto", payload: nomeCompleto })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 15
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
  },
});
