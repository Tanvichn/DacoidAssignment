import React, { useMemo } from "react";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default1 = ({
  ellipse52,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultWidth,
  property1DefaultHeight,
  rectangleViewBorderRadius,
  rectangleViewBackgroundColor,
  rectangleViewBorderWidth,
  ellipseIconHeight,
  ellipseIconWidth,
  ellipseIconTop,
  ellipseIconRight,
  ellipseIconBottom,
  ellipseIconLeft,
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("top", property1DefaultTop),
      ...getStyleValue("left", property1DefaultLeft),
      ...getStyleValue("width", property1DefaultWidth),
      ...getStyleValue("height", property1DefaultHeight),
    };
  }, [
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultWidth,
    property1DefaultHeight,
  ]);

  const rectangleView1Style = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", rectangleViewBorderRadius),
      ...getStyleValue("backgroundColor", rectangleViewBackgroundColor),
      ...getStyleValue("borderWidth", rectangleViewBorderWidth),
    };
  }, [
    rectangleViewBorderRadius,
    rectangleViewBackgroundColor,
    rectangleViewBorderWidth,
  ]);

  const ellipseIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", ellipseIconHeight),
      ...getStyleValue("width", ellipseIconWidth),
      ...getStyleValue("top", ellipseIconTop),
      ...getStyleValue("right", ellipseIconRight),
      ...getStyleValue("bottom", ellipseIconBottom),
      ...getStyleValue("left", ellipseIconLeft),
    };
  }, [
    ellipseIconHeight,
    ellipseIconWidth,
    ellipseIconTop,
    ellipseIconRight,
    ellipseIconBottom,
    ellipseIconLeft,
  ]);

  return (
    <View style={[styles.property1default, property1Default1Style]}>
      <View style={[styles.property1defaultChild, rectangleView1Style]} />
      <Image
        style={[styles.property1defaultItem, ellipseIconStyle]}
        contentFit="cover"
        source={ellipse52}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  property1defaultChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xl,
    backgroundColor: "#819aff",
    borderStyle: "solid",
    borderColor: Color.colorDarkslateblue,
    borderWidth: 1,
    position: "absolute",
  },
  property1defaultItem: {
    height: "78.57%",
    width: "39.29%",
    top: "10.71%",
    right: "53.57%",
    bottom: "10.71%",
    left: "7.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  property1default: {
    width: 56,
    height: 28,
  },
});

export default Property1Default1;
