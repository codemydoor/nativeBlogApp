import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function MainBlogs({ route }) {
  const { blogs, titles, image, blogerImage, name, timeStamp } = route.params;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.design}></View>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titles}>{titles}</Text>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          <Image source={blogerImage} style={styles.profile} />
        </View>
        <Text style={styles.blogerName}>{name}</Text>
        <Text style={styles.timeStamp}>{timeStamp}</Text>
      </View>
      <View style={styles.blogContainer}>
        <Text style={styles.blogs}>{blogs}</Text>
      </View>
    </View>
  );
}

export default MainBlogs;

const styles = StyleSheet.create({
  mainContainer: {
    position: "relative",
    bottom: 100,
  },
  imageContainer: {
    alignSelf: "center",
    marginVertical: 15,
  },
  image: {
    height: 310,
    width: 310,
  },
  titles: {
    fontSize: 17,
    fontWeight: "bold",
    paddingHorizontal: 30,
  },

  profileImageContainer: {
    marginTop: 20,

    flexDirection: "row",
    marginHorizontal: 30,
  },
  profile: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  blogerName: {
    position: "absolute",
    left: 70,
    top: 29,
  },
  blogContainer: {
    minHeight: 100,
    marginTop: 10,
  },
  blogs: {
    paddingHorizontal: 30,
    fontSize: 17,
  },
  timeStamp: {
    fontSize: 10,
    position: "absolute",
    left: 200,

    marginVertical: 33,
  },
  design: {
    height: 100,
    width: 20,
    backgroundColor: "green",
    position: "relative",
    top: 100,
  },
});
