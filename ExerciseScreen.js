import React from "react";
import { Text, StyleSheet, View } from "react-native";

const student = {
  name: "Darko",
  hobbies: ["Coding", "Reading"],
  grades: [
    {
      subject: "Math",
      grade: 9,
    },
  ],
};

const ExcerciseScreen = () => {
  //   Deklaracija varijabli let, const

  let message1 = "Hi there!";

  let message2 = "Moja varijabla ima novu vrijednost!";

  return (
    <View style={styles.container}>
      <Text>{message1}</Text>
      <Text>{message2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ExcerciseScreen;

// NOVI SCREEN - StudentScreen - informacije o studnetu:
// Ime, Prezime, Datum rodjenja, Broj Indeksa, Lista ocjena, Lista hobija
