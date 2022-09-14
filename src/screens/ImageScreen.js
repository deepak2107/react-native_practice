import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  
  return (
    <View>
      <ImageDetail title= "Forest" path = { require('../../assets/forest.jpg') } />
      <ImageDetail title= "Beach" path = {require('../../assets/beach.jpg')} />
      <ImageDetail title= "Mountain" path = {require('../../assets/mountain.jpg')} />
      
    </View>
  );
};

export default ImageScreen;
