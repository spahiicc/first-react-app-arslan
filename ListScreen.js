import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

const ListScreen = (props) => {
  // Personal info variables
  let firstName = "John";
  let lastName = "Doe";
  const birthday = "2000-05-15";

  // Combine first and last name
  let fullName = firstName + " " + lastName;

  // Hobbies array
  const hobbies = ["Coding", "Reading", "Gaming", "Traveling", "Music"];

  // Subjects with grades
  const grades = [
    { subject: "Math", grade: 9 },
    { subject: "English", grade: 10 },
    { subject: "History", grade: 8 },
    { subject: "Physics", grade: 9 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Info</Text>

      {/* Personal Info */}
      <Text style={styles.info}>Full Name: {fullName}</Text>
      <Text style={styles.info}>Birthday: {birthday}</Text>

      {/* Hobbies */}
      <Text style={styles.subtitle}>My Hobbies:</Text>
      <FlatList
        data={hobbies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.hobby}>{item}</Text>}
      />

      {/* Grades */}
      <Text style={styles.subtitle}>My Grades:</Text>
      <FlatList
        data={grades}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.gradeItem}>
            <Text style={styles.subject}>{item.subject}</Text>
            <Text style={styles.grade}>{item.grade}</Text>
          </View>
        )}
      />
      <Button title="Go back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  info: {
    fontSize: 18,
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 22,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "600",
  },
  hobby: {
    fontSize: 16,
    padding: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    marginVertical: 4,
  },
  gradeItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#dceefc",
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
  },
  subject: {
    fontSize: 18,
    fontWeight: "500",
  },
  grade: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a73e8",
  },
});

export default ListScreen;
