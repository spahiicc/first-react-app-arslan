import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import data from "../data/countries.json";

class CountriesScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    this.setState({
      countries: data,
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.screenTitle}>Countries Screen</Text>
        <FlatList
          data={this.state.countries}
          keyExtractor={(countries) => countries.id}
          renderItem={({ item }) => (
            <View style={styles.cardWrapper}>
              <Text>City name: {item.name}</Text>
              <Text style={styles.countryStyle}>
                Country name: {item.country}
              </Text>
              <Text>City description: {item.description}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  countryStyle: {
    fontWeight: "bold",
  },
  cardWrapper: {
    backgroundColor: "#d3d3d3",
    marginBottom: 15,
  },
  screenTitle: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 15,
    fontWeight: "bold",
  },
});

export default CountriesScreen;

// Easy: Add a third property to each country object in the JSON file, such as "population",
// and then modify the renderItem function in CountriesScreen.js to display it.

// Medium:
// Add a new screen called CountryDetailsScreen.js that displays the details of the selected country.
// You can navigate to this screen by tapping on a country in the CountriesScreen.js.

// Hard:
// Add a search bar to CountriesScreen.js that allows you to filter the list of countries based on the entered text.
// You will need to add a new piece of state to store the search text,
// and then use the filter function on the countries array to only display countries that match the search text.
