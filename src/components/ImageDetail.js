import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, path }) => {
  return (
    <View>
      <Image source= {path} />
      <Text>{title}</Text>
    </View>
  );
};

export default ImageDetail;
