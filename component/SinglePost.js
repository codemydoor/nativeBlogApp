import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

function SinglePost({ navigation, titles, image, blogerImage, name }) {
  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("MainBlogs")}>
        <View style={styles.container}>
          <View style={styles.shapeContainer}>
            <View style={styles.shapeUp}></View>
            <View style={styles.shapeBottom}></View>
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{titles}</Text>
            <View style={styles.profileContainer}>
              <Image source={blogerImage} style={styles.profile} />
              <Text style={styles.name}>{name}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default SinglePost;

const styles = StyleSheet.create({
  parentContainer: {
    marginTop: 10,
  },
  container: {
    backgroundColor: "white",
    height: 135,
    width: 350,
    alignSelf: "center",
  },
  shapeUp: {
    backgroundColor: "deeppink",
    height: 13,
    width: 95,
  },
  shapeBottom: {
    backgroundColor: "deeppink",
    height: 95,
    width: 13,
  },
  imageContainer: {
    position: "absolute",
    left: 20,
    top: 20,
  },
  image: {
    height: 100,
    width: 90,
  },
  textContainer: {
    position: "absolute",
    top: 20,
    left: 120,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    paddingRight: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "JuliusSansOne-Regular",
    color: "red",
  },
  profileContainer: {
    position: "absolute",
    top: 76,
    flexDirection: "row",
  },
  profile: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  name: {
    fontSize: 10,
    fontStyle: "italic",
    marginTop: 3,
    marginLeft: 5,
  },
});
