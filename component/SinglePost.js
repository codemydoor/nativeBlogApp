import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function SinglePost({ titles, image, bolgerImage }) {
  return (
    <View style={styles.parentContainer}>
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
        </View>
      </View>
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
    height: 170,
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
    left: 130,
  },
  text: {
    fontWeight: "bold",
    fontSize: 13,
    marginRight: 15,
  },
});
