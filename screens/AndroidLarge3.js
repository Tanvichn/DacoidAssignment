import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import Property1Default from "../components/Property1Default";
import TimeStatusContainer from "../components/TimeStatusContainer";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const AndroidLarge3 = () => {
  return (
    <View style={styles.androidLarge6}>
      <Text style={[styles.whatAreYour, styles.confirmTypo]}>
        What are your goals?
      </Text>
      <View style={[styles.androidLarge6Child, styles.rectangleChildLayout]} />
      <Text style={[styles.weightLoss, styles.andTypo]}>Weight Loss</Text>
      <View style={[styles.androidLarge6Item, styles.rectangleChildLayout]} />
      <Text style={[styles.muscleGain, styles.andTypo]}>Muscle Gain</Text>
      <View style={[styles.androidLarge6Inner, styles.rectangleChildLayout]} />
      <Text style={[styles.flexibilityAndMobility, styles.andTypo]}>
        Flexibility and Mobility
      </Text>
      <View style={[styles.rectangleView, styles.rectangleChildLayout]} />
      <Text style={[styles.generalFitness, styles.andTypo]}>
        General Fitness
      </Text>
      <View style={[styles.androidLarge6Child1, styles.rectangleChildLayout]} />
      <Text style={[styles.eventSpecific, styles.andTypo]}>
        Event - specific training
      </Text>
      <View style={[styles.androidLarge6Child2, styles.rectangleChildLayout]} />
      <Text style={[styles.mindfulnessAndMental, styles.andTypo]}>
        Mindfulness and Mental Health
      </Text>
      <Property1Default
        vector={require("../assets/vector2.png")}
        property1DefaultPosition="absolute"
        property1DefaultTop={149}
        property1DefaultLeft={321}
        rectangleViewBorderColor="#809aff"
      />
      <Property1Default
        vector={require("../assets/vector2.png")}
        property1DefaultPosition="absolute"
        property1DefaultTop={215}
        property1DefaultLeft={321}
        rectangleViewBorderColor="#809aff"
      />
      <Property1Default
        vector={require("../assets/vector2.png")}
        property1DefaultPosition="absolute"
        property1DefaultTop={281}
        property1DefaultLeft={321}
        rectangleViewBorderColor="#809aff"
      />
      <Property1Default
        vector={require("../assets/vector2.png")}
        property1DefaultPosition="absolute"
        property1DefaultTop={347}
        property1DefaultLeft={321}
        rectangleViewBorderColor="#809aff"
      />
      <Property1Default
        vector={require("../assets/vector2.png")}
        property1DefaultPosition="absolute"
        property1DefaultTop={413}
        property1DefaultLeft={321}
        rectangleViewBorderColor="#809aff"
      />
      <Property1Default
        vector={require("../assets/vector2.png")}
        property1DefaultPosition="absolute"
        property1DefaultTop={479}
        property1DefaultLeft={321}
        rectangleViewBorderColor="#809aff"
      />
      <LinearGradient
        style={[styles.rectangleLineargradient, styles.rectangleChildLayout]}
        locations={[0, 1]}
        colors={["#7b91ff", "#95beff"]}
      />
      <Text style={[styles.confirm, styles.confirmTypo]}>Confirm</Text>
      <TimeStatusContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  confirmTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  rectangleChildLayout: {
    height: 50,
    width: 343,
    borderRadius: Border.br_xs,
    left: 16,
    position: "absolute",
  },
  andTypo: {
    fontSize: FontSize.size_xs,
    left: 36,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  whatAreYour: {
    marginLeft: -109.5,
    top: 68,
    fontSize: FontSize.size_xl,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  androidLarge6Child: {
    top: 135,
    backgroundColor: Color.gray50,
    width: 343,
    borderRadius: Border.br_xs,
    left: 16,
  },
  weightLoss: {
    top: 153,
  },
  androidLarge6Item: {
    top: 201,
    backgroundColor: Color.gray50,
    width: 343,
    borderRadius: Border.br_xs,
    left: 16,
  },
  muscleGain: {
    top: 219,
  },
  androidLarge6Inner: {
    top: 267,
    backgroundColor: Color.gray50,
    width: 343,
    borderRadius: Border.br_xs,
    left: 16,
  },
  flexibilityAndMobility: {
    top: 285,
  },
  rectangleView: {
    top: 333,
    backgroundColor: Color.gray50,
    width: 343,
    borderRadius: Border.br_xs,
    left: 16,
  },
  generalFitness: {
    top: 351,
  },
  androidLarge6Child1: {
    top: 399,
    backgroundColor: Color.gray50,
    width: 343,
    borderRadius: Border.br_xs,
    left: 16,
  },
  eventSpecific: {
    top: 417,
  },
  androidLarge6Child2: {
    top: 465,
    backgroundColor: Color.gray50,
    width: 343,
    borderRadius: Border.br_xs,
    left: 16,
  },
  mindfulnessAndMental: {
    top: 483,
  },
  rectangleLineargradient: {
    top: 665,
    backgroundColor: "transparent",
    width: 343,
    borderRadius: Border.br_xs,
    left: 16,
  },
  confirm: {
    marginLeft: -33.5,
    top: 680,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  androidLarge6: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge3;
