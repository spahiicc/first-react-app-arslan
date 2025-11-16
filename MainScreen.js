// importovanje biblioteka
import React from "react";
import { Text, StyleSheet, View } from "react-native";

// kreiranje komponenete
const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is Main Screen</Text>
    </View>
  );
};

//kreiranje stylesheet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 30,
  },
});

//eksportovanje komponente
export default MainScreen;

//challenge
