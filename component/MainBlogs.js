import React from "react";
import { View, Text, StyleSheet } from "react-native";

function MainBlogs() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}></View>
      <View style={styles.imageContainer}>
        <Text>hello</Text>
      </View>
      <View style={styles.imageContainer}>
        <Text></Text>
      </View>
    </View>
  );
}

export default MainBlogs;

const styles = StyleSheet.create({});
