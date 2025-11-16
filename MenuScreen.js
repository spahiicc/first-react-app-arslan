import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MenuScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Welcome to Menu Screen</Text>
      <Button
        style={styles.btn}
        title="Go to List Screen"
        onPress={() => props.navigation.navigate("List")}
      />
      <Button
        style={styles.btn}
        title="Go to Students Screen"
        onPress={() => props.navigation.navigate("Students")}
      />
      <Button
        style={styles.btn}
        title="Go to Box Screen"
        onPress={() => props.navigation.navigate("Box")}
      />
      <Button
        style={styles.btn}
        title="Go to Posts Screen"
        onPress={() => props.navigation.navigate("Posts")}
      />
      <Button
        style={styles.btn}
        title="Go to Countries Screen"
        onPress={() => props.navigation.navigate("Countries")}
      />
      <Button
        style={styles.btn}
        title="Go to Products Screen"
        onPress={() => props.navigation.navigate("Products")}
      />
    </View>
    // Touchable opacity koji ce voditi na drugi screen

    // Create a new screen called "HomeScreen" and add navigation from "MenuScreen" to this new screen using a Button element. E

    // Add another button in the HomeScreen that navigates back to the MenuScreen. E M

    //Create a "ProfileScreen" and add a TouchableOpacity in the HomeScreen that navigates to this "ProfileScreen". E M H
    // Also, add a button in the ProfileScreen that navigates back to the HomeScreen.
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
  },
  btn: {
    marginBottom: 20,
  },
});

export default MenuScreen;
