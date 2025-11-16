import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.box1Style}></View>
      <View style={styles.box2Style}></View>
      <View style={styles.box3Style}></View>
      <View style={styles.box4Style}></View>
      <View style={styles.box5Style}></View>
      <View style={styles.box6Style}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap", // required for alignContent to work
    alignContent: "space-evenly", // try changing to 'center', 'flex-start', 'stretch', etc.
    backgroundColor: "#eee",
  },
  box1Style: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  box2Style: {
    width: 100,
    height: 100,
    backgroundColor: "yellow",
  },
  box3Style: {
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
  box4Style: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
  box5Style: {
    width: 100,
    height: 100,
    backgroundColor: "orange",
  },
  box6Style: {
    width: 100,
    height: 100,
    backgroundColor: "purple",
  },
});

export default BoxScreen;

// 1 Novi screen 'BoxScreenChallenge', dodati u navigaciju, button u Menu screen.
//U njemu dodati tri boxa, razlicitih boja i da budu horizontalno poredane, evenly jedna izmedju druge. E

// 2 Modify the "BoxScreenChallenge" to position the second box (Box 2) in the center of the screen both horizontally and vertically. E M

// 3 Create a new screen called "AdvancedBoxScreenChallenge" and add it to the navigation.
// In this screen, create a layout with three boxes stacked on top of each other, occupying equal heights,
// and align them in the following way:

// The first box should be aligned to the left of the screen.
// The second box should be horizontally centred.
// The third box should be aligned to the right of the screen. E M H
