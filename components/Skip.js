import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import AndroidLarge1  from "../screens/AndroidLarge1";

const Skip = () => {
    return 
};

const styles = StyleSheet.create({
  skip: {
    position: "absolute",
    top: 44,
    left: 323,
    fontSize: FontSize.size_base,
    textDecoration: "underline",
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorCornflowerblue_100,
    textAlign: "left",
  },
});

export default Skip;
