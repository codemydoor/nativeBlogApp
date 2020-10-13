import React from "react";
import { View, Text, StyleSheet } from "react-native";

function MainBlogs({ route }) {
  const { item } = route.params;
  console.log(item);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}></View>
      <View style={styles.imageContainer}>
        <Text>{item.titles}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Text>{item.blogs}</Text>
      </View>
    </View>
  );
}

export default MainBlogs;

const styles = StyleSheet.create({});
