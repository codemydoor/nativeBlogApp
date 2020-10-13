import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import SinglePost from "./SinglePost";

function Blogs({ navigation }) {
  const Blogs = [
    {
      titles: "11 Essential Skills to become Software Developer in 2020",
      image: require("../assets/images/hotel.jpg"),
      blogerImage: require("../assets/images/gps.png"),
      name: "Solomon Huges",
      id: "2",
    },
    {
      titles:
        "Best design 🎨 resources websites every developer 💻 should bookmark",
      image: require("../assets/images/hotel.jpg"),
      blogerImage: require("../assets/images/gps.png"),
      id: "3",
      name: "Micheal Ronny",
    },
    {
      titles:
        "Data Structures Explained – Learn Computer Science Concepts in This 3 Hour Tutorial",
      image: require("../assets/images/hotel.jpg"),
      blogerImage: require("../assets/images/gps.png"),
      id: "5",
      name: "Steven Watkins",
    },
    {
      titles:
        "The addEventListener() Method – JavaScript Event Listener Example Code",
      image: require("../assets/images/hotel.jpg"),
      blogerImage: require("../assets/images/gps.png"),
      id: "1",
      name: "Mary Blakes",
    },
  ];
  return (
    <View>
      <FlatList
        data={Blogs}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("MainBlogs");
                }}
              >
                <SinglePost
                  titles={item.titles}
                  image={item.image}
                  name={item.name}
                  blogerImage={item.blogerImage}
                />
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Blogs;

// const styles = StyleSheet.create({});
