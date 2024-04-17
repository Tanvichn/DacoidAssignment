import React, { useMemo } from "react";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default = ({
  vector,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  rectangleViewBorderColor,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("top", property1DefaultTop),
      ...getStyleValue("left", property1DefaultLeft),
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("borderColor", rectangleViewBorderColor),
    };
  }, [rectangleViewBorderColor]);

  return (
    <View style={[styles.property1default, property1DefaultStyle]}>
      <View style={[styles.property1defaultChild, rectangleViewStyle]} />
      <Image style={styles.vectorIcon} contentFit="cover" source={vector} />
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
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: "#838892",
    borderWidth: 1,
    position: "absolute",
  },
  vectorIcon: {
    height: "50%",
    width: "72.73%",
    top: "22.73%",
    right: "13.64%",
    bottom: "27.27%",
    left: "13.64%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  property1default: {
    width: 22,
    height: 22,
  },
});

export default Property1Default;
