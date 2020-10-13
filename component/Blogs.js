import React from "react";
import { View, FlatList } from "react-native";
import SinglePost from "./SinglePost";
import Legal from "../assets/images/legal.jpg";

function Blogs() {
  const Blogs = [
    {
      titles: "11 Essential Skills to become Software Developer in 2020",
      image: Legal,
      blogerImage: require("../assets/images/gps.png"),
      blogs:
        "Hello friends, If you have been doing software development for some time and thinking about what makes a good programmer? What should a programmer learn in 2020 to become a better developer? What should computer science graduates can learn in advance for a career in software development and programming? ",
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
      blogs:
        "Are you looking for the best design resources websites? Well, then this collection is something every developer should bookmark, as it consists of the best resources that can help you to develop an amazing eye-catchy and visually enriched project.Here you'll find the best websites and resources with modern UI components in different formats such as PSD, Sketch, Figma, Icons, and Illustrations, etc. They are great for ideas for web components/UI.",
    },
    {
      titles:
        "Data Structures Explained – Learn Computer Science Concepts in This 3 Hour Tutorial",
      image: require("../assets/images/hotel.jpg"),
      blogerImage: require("../assets/images/gps.png"),
      id: "5",
      name: "Steven Watkins",
      blogs:
        "This course assumes you have a basic understanding of Computer Science. If you don't yet, don't worry – we've got you covered with this free 2-hour Computer Science primer.This course, taught by Steven from NullPointer Exception, is a general overview of data structures. And the great thing is you don't need to know Java or C or any of the languages data structures are traditionally taught in",
    },
    {
      titles:
        "The addEventListener() Method – JavaScript Event Listener Example Code",
      image: require("../assets/images/hotel.jpg"),
      blogerImage: require("../assets/images/gps.png"),
      id: "1",
      name: "Mary Blakes",
      blogs:
        "Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired. For example, if the user selects a button on a webpage, you might want to respond to that action by displaying an information box. In this article, we discuss some important concepts surrounding events, and look at how they work in browsers. This won't be an exhaustive study; just what you need to know at this stage.",
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
                name={item.name}
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
