import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

class PostsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await data.json();

    // OPC1
    // const firstTen = jsonData.slice(0, 10);
    // this.setState({
    //   users: firstTen,
    // });

    this.setState({
      posts: jsonData,
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <View>
        <Text>Posts Screen</Text>
        <FlatList
          keyExtractor={(posts) => posts.id}
          data={posts}
          // OPC2 initialNumToRender={10}
          renderItem={({ item }) => (
            <View>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default PostsScreen;
