import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import Calendar from "../components/Calendar";
import TimeStatusContainer from "../components/TimeStatusContainer";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const AndroidLarge5 = () => {
  return (
    <View style={styles.androidLarge9}>
      <LinearGradient
        style={[styles.androidLarge9Child, styles.androidLarge9ChildLayout]}
        locations={[0, 1]}
        colors={["#d3a4f4", "#e9b1e0"]}
      />
      <View style={[styles.androidLarge9Item, styles.androidChildLayout]} />
      <Text style={[styles.workoutSchedule, styles.amClr]}>
        Workout Schedule
      </Text>
      <View style={styles.androidLarge9Inner} />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-11.png")}
      />
      <Image
        style={styles.androidLarge9Child1}
        contentFit="cover"
        source={require("../assets/group-52.png")}
      />
      <Calendar />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={[styles.feb2024, styles.amTypo]}>Feb 2024</Text>
      <View style={[styles.lineView, styles.androidChildLayout]} />
      <View style={[styles.androidLarge9Child2, styles.androidChildLayout]} />
      <View style={[styles.androidLarge9Child3, styles.androidChildLayout]} />
      <View style={[styles.androidLarge9Child4, styles.androidChildPosition]} />
      <View style={[styles.androidLarge9Child5, styles.androidChildLayout]} />
      <View style={[styles.androidLarge9Child6, styles.androidChildLayout]} />
      <View style={[styles.androidLarge9Child7, styles.androidChildLayout]} />
      <View style={[styles.androidLarge9Child8, styles.androidChildLayout]} />
      <View style={[styles.androidLarge9Child9, styles.androidChildLayout]} />
      <View style={[styles.androidLarge9Child10, styles.androidChildLayout]} />
      <View style={[styles.androidLarge9Child11, styles.androidChildLayout]} />
      <Text style={[styles.am, styles.amPosition]}>06:00 AM</Text>
      <Text style={[styles.am1, styles.amPosition]}>07:00 AM</Text>
      <Text style={[styles.am2, styles.amPosition]}>08:00 AM</Text>
      <Text style={[styles.am3, styles.amPosition]}>09:00 AM</Text>
      <Text style={[styles.am4, styles.am4Typo]}>10:00 AM</Text>
      <Text style={[styles.am5, styles.amTypo]}>11:00 AM</Text>
      <Text style={[styles.am6, styles.amTypo]}>12:00 AM</Text>
      <Text style={[styles.am7, styles.am4Typo]}>01:00 AM</Text>
      <Text style={[styles.am8, styles.am8Typo]}>02:00 AM</Text>
      <Text style={[styles.am9, styles.amPosition]}>03:00 AM</Text>
      <Text style={[styles.am10, styles.amTypo]}>04:00 AM</Text>
      <Text style={[styles.am11, styles.amPosition]}>05:00 AM</Text>
      <LinearGradient
        style={[
          styles.rectangleLineargradient,
          styles.androidLarge9ChildLayout,
        ]}
        locations={[0, 1]}
        colors={["#d3a4f4", "#e9b1e0"]}
      />
      <Text style={[styles.abWorkout730am, styles.textFlexBox]}>
        Ab Workout, 7:30am
      </Text>
      <Text style={[styles.upperbodyWorkout9am, styles.textFlexBox]}>
        Upperbody Workout, 9am
      </Text>
      <View
        style={[styles.androidLarge9Child12, styles.androidChildPosition]}
      />
      <View style={[styles.rectangleView, styles.androidChildPosition]} />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-56.png")}
      />
      <View style={styles.androidLarge9Child13} />
      <Text style={[styles.lowerbodyWorkout3pm, styles.textFlexBox]}>
        Lowerbody Workout, 3pm
      </Text>
      <Image
        style={[styles.androidLarge9Child14, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-6.png")}
      />
      <Text style={[styles.text, styles.textFlexBox]}>+</Text>
      <Image
        style={[styles.chevronLeftIcon, styles.amPosition]}
        contentFit="cover"
        source={require("../assets/chevronleft.png")}
      />
      <TimeStatusContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  androidLarge9ChildLayout: {
    backgroundColor: "transparent",
    height: 30,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  androidChildLayout: {
    height: 1,
    borderStyle: "solid",
  },
  amClr: {
    color: Color.black,
    textAlign: "center",
  },
  groupIconLayout: {
    height: 63,
    width: 63,
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "85.25%",
    top: "13.75%",
    width: "1.33%",
    height: "1%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  amTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  androidChildPosition: {
    top: 392,
    position: "absolute",
  },
  amPosition: {
    left: 16,
    position: "absolute",
  },
  am4Typo: {
    left: 17,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  am8Typo: {
    top: 561,
    fontSize: FontSize.size_xs,
    color: Color.black,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  androidLarge9Child: {
    left: 100,
    width: 189,
    top: 367,
  },
  androidLarge9Item: {
    top: 712,
    width: 376,
    borderTopWidth: 0.5,
    borderColor: Color.gray100,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  workoutSchedule: {
    marginLeft: -96.5,
    top: 68,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    color: Color.black,
    left: "50%",
    position: "absolute",
  },
  androidLarge9Inner: {
    top: 724,
    backgroundColor: Color.colorWhite,
    width: 375,
    height: 76,
    left: 0,
    position: "absolute",
  },
  groupIcon: {
    top: 699,
    left: 156,
  },
  androidLarge9Child1: {
    height: "3.45%",
    width: "85.87%",
    top: "93.24%",
    right: "7.2%",
    bottom: "3.31%",
    left: "6.93%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    right: "60.53%",
    left: "38.13%",
  },
  vectorIcon1: {
    right: "38.13%",
    left: "60.53%",
  },
  feb2024: {
    marginLeft: -28.5,
    top: 106,
    textAlign: "center",
    color: Color.black,
    left: "50%",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  lineView: {
    top: 279,
    width: 376,
    borderTopWidth: 0.5,
    borderColor: Color.gray100,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  androidLarge9Child2: {
    top: 317,
    width: 376,
    borderTopWidth: 0.5,
    borderColor: Color.gray100,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  androidLarge9Child3: {
    top: 352,
    width: 376,
    borderTopWidth: 0.5,
    borderColor: Color.gray100,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  androidLarge9Child4: {
    height: 1,
    borderStyle: "solid",
    width: 376,
    borderTopWidth: 0.5,
    borderColor: Color.gray100,
    left: 0,
  },
  androidLarge9Child5: {
    top: 432,
    width: 376,
    borderTopWidth: 0.5,
    borderColor: Color.gray100,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  androidLarge9Child6: {
    top: 472,
    width: 376,
    borderTopWidth: 0.5,
    borderColor: Color.gray100,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  androidLarge9Child7: {
    top: 512,
    width: 376,
    borderTopWidth: 0.5,
    borderColor: Color.gray100,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  androidLarge9Child8: {
    top: 552,
    width: 376,
    borderTopWidth: 0.5,
    borderColor: Color.gray100,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  androidLarge9Child9: {
    top: 592,
    width: 376,
    borderTopWidth: 0.5,
    borderColor: Color.gray100,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  androidLarge9Child10: {
    top: 632,
    width: 376,
    borderTopWidth: 0.5,
    borderColor: Color.gray100,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  androidLarge9Child11: {
    top: 672,
    width: 376,
    borderTopWidth: 0.5,
    borderColor: Color.gray100,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  am: {
    top: 250,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.black,
  },
  am1: {
    top: 288,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.black,
  },
  am2: {
    top: 326,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.black,
  },
  am3: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.black,
    top: 367,
  },
  am4: {
    top: 406,
  },
  am5: {
    top: 444,
    left: 19,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  am6: {
    top: 484,
    left: 18,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  am7: {
    top: 523,
  },
  am8: {
    left: 16,
    position: "absolute",
    textAlign: "center",
  },
  am9: {
    top: 605,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.black,
  },
  am10: {
    top: 643,
    left: 15,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  am11: {
    top: 687,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.black,
  },
  rectangleLineargradient: {
    top: 300,
    left: 211,
    width: 149,
  },
  abWorkout730am: {
    top: 307,
    left: 221,
    width: 129,
    color: Color.colorWhite,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  upperbodyWorkout9am: {
    top: 374,
    left: 112,
    width: 165,
    color: Color.colorWhite,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  androidLarge9Child12: {
    left: 7,
    borderColor: "#5883f7",
    borderTopWidth: 1,
    width: 308,
    height: 1,
    borderStyle: "solid",
    top: 392,
  },
  rectangleView: {
    left: 104,
    width: 185,
    height: 10,
    backgroundColor: Color.colorGray_100,
  },
  ellipseIcon: {
    top: 389,
    left: 4,
    width: 6,
    height: 6,
    position: "absolute",
  },
  androidLarge9Child13: {
    top: 554,
    left: 101,
    backgroundColor: Color.gray50,
    width: 173,
    height: 30,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  lowerbodyWorkout3pm: {
    left: 109,
    top: 561,
    fontSize: FontSize.size_xs,
    color: Color.black,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  androidLarge9Child14: {
    top: 602,
    left: 296,
  },
  text: {
    top: 612,
    left: 317,
    fontSize: 36,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorWhite,
    textAlign: "left",
  },
  chevronLeftIcon: {
    top: 70,
    borderRadius: Border.br_10xs,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  androidLarge9: {
    borderRadius: Border.br_3xs,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
});

export default AndroidLarge5;
