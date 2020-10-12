import React from "react";
import { View, FlatList } from "react-native";
import SinglePost from "./SinglePost";
function Blogs() {
  const Blogs = [
    {
      titles: "11 Essential Skills to become Software Developer in 2020",
      image: require("../assets/hotel.jpg"),
      blogerImage: require("../assets/icon.png"),
      id: "2",
    },
    {
      titles:
        "Best design 🎨 resources websites every developer 💻 should bookmark",
      image: require("../assets/hotel.jpg"),
      blogerImage: require("../assets/icon.png"),
      id: "3",
    },
    {
      titles:
        "Data Structures Explained – Learn Computer Science Concepts in This 3 Hour Tutorial",
      image: require("../assets/hotel.jpg"),
      blogerImage: require("../assets/icon.png"),
      id: "5",
    },
    {
      titles:
        "The addEventListener() Method – JavaScript Event Listener Example Code",
      image: require("../assets/hotel.jpg"),
      blogerImage: require("../assets/icon.png"),
      id: "1",
    },
  ];
  return (
    <View>
      <FlatList
        data={Blogs}
        renderItem={({ item }) => {
          return (
            <View>
              <SinglePost
                titles={item.titles}
                image={item.image}
                blogerImage={item.blogerImage}
              />
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
