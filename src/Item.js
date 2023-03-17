import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Item = ({ content }) => {
  const handleLongPress = () => {
    console.log("Long press");
  };
  return (
    <TouchableOpacity onLongPress={handleLongPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{content.title}</Text>
        <Text>{content.id}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 20,
    margin: 20,
    height: 140,
  },
  text: {
    color: "white",
  },
});
export default Item;
