import React from "react";
import { Text, StyleSheet, View } from "react-native";

const QuoteScreen = () => {
  //   Deklaracija varijabli let, const

  let quote = "Injustice anywhere is a threat to justice everywhere.";

  const author = "- Martin Luther King Jr";

  return (
    <View style={styles.container}>
      <Text style={styles.quoteStyle}>{quote}</Text>
      <Text>{author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 10,
  },
  quoteStyle: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 10,
  },
  authorStyle: {
    fontSize: 20,
    textAlign: "left",
  },
});

export default QuoteScreen;

//Komponenta QuoteScreen prikazuje citat i njegovog autora.
// Koristiti let i const varijable za citat i autora.
