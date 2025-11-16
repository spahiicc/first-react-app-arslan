import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StudentDetails from "../components/StudentDetails";

const StudentsScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Students Screen</Text>
      <StudentDetails
        name="Dušan"
        image={require("../assets/Avatar-1.jpeg")}
        description="Prvi student"
      />
      <StudentDetails
        name="Marko"
        image={require("../assets/Avatar-2.png")}
        description="Drugi student"
      />
      <StudentDetails
        name="Haris"
        image={require("../assets/Avatar-3.png")}
        description="Treci student"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
  },
});

export default StudentsScreen;
