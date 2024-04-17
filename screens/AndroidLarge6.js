import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import {TimeStatusContainer, Skip} from "../components/TimeStatusContainer";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AndroidLarge6 = () => {
  return (
    <View style={styles.androidLarge1}>
      <Image
        style={styles.androidLarge1Child}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
      <Text style={styles.trackYourGoal}>Track Your Goal</Text>
      <Text style={[styles.dontWorryIf, styles.skipTypo]}>
        Don’t worry if you have trouble determining your goals, We can help you
        determine your goals and track your goals
      </Text>
      <Skip />
      <Image
        style={[styles.image13Icon, styles.image13IconPosition]}
        contentFit="cover"
        source={require("../assets/image-13.png")}
      />
      <View style={[styles.androidLarge1Item, styles.image13IconPosition]} />
      <Image
        style={styles.androidLarge1Inner}
        contentFit="cover"
        source={require("../assets/group-5.png")}
      />
      <TimeStatusContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  skipTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  image13IconPosition: {
    left: "50%",
    position: "absolute",
  },
  androidLarge1Child: {
    top: 696,
    left: 299,
    width: 60,
    height: 60,
    position: "absolute",
  },
  trackYourGoal: {
    top: 499,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.black,
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  dontWorryIf: {
    top: 538,
    color: Color.colorGray_200,
    width: 343,
    left: 16,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  skip: {
    top: 44,
    left: 323,
    textDecoration: "underline",
    color: Color.colorCornflowerblue_100,
  },
  image13Icon: {
    marginLeft: -141.5,
    top: 132,
    width: 282,
    height: 282,
  },
  androidLarge1Item: {
    marginLeft: -1611.5,
    bottom: -96,
    borderRadius: Border.br_xl,
    backgroundColor: "#000",
    width: 390,
    height: 77,
  },
  androidLarge1Inner: {
    height: "3.38%",
    width: "66.93%",
    top: "104.25%",
    right: "394.4%",
    bottom: "-7.62%",
    left: "-361.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  androidLarge1: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge6;
