import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Calendar = () => {
  return (
    <View style={styles.calendar}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.sun5, styles.sun5Typo]}>
          <Text style={styles.sun}>{`Sun
`}</Text>
          <Text style={styles.text}>{`5
`}</Text>
        </Text>
      </View>
      <View style={styles.rectangleGroup}>
        <LinearGradient
          style={[styles.groupItem, styles.groupPosition]}
          locations={[0, 1]}
          colors={["#8da4ff", "#d1dbff"]}
        />
        <Text style={[styles.mon6, styles.sun5Typo]}>
          <Text style={styles.sun}>{`Mon
`}</Text>
          <Text style={styles.text}>{`6
`}</Text>
        </Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupViewPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.sun5, styles.sun5Typo]}>
          <Text style={styles.sun}>{`Tue
`}</Text>
          <Text style={styles.text}>{`7
`}</Text>
        </Text>
        <Image
          style={styles.assignmentIndIcon}
          contentFit="cover"
          source={require("../assets/assignment-ind.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.sun5, styles.sun5Typo]}>
          <Text style={styles.sun}>{`Wed
`}</Text>
          <Text style={styles.text}>{`8
`}</Text>
        </Text>
      </View>
      <View style={styles.rectangleParent1}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.thu9, styles.sun5Typo]}>
          <Text style={styles.sun}>{`Thu
`}</Text>
          <Text style={styles.text}>{`9
`}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    borderRadius: 10,
    bottom: "0%",
    width: "100%",
    height: "100%",
    right: "0%",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  sun5Typo: {
    textAlign: "center",
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupViewPosition: {
    bottom: "0.13%",
    top: "0.78%",
    width: "18.28%",
    height: "99.09%",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorWhite,
  },
  sun: {
    fontSize: FontSize.size_xs_4,
  },
  text: {
    fontSize: FontSize.size_9xl_5,
    lineHeight: 17,
  },
  sun5: {
    color: Color.colorRoyalblue_100,
    left: "27.91%",
    top: "8.92%",
    width: "43.06%",
    height: "46.85%",
    textAlign: "center",
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
  },
  rectangleParent: {
    right: "81.72%",
    left: "0%",
    bottom: "0.13%",
    top: "0.78%",
    width: "18.28%",
    height: "99.09%",
    position: "absolute",
  },
  groupItem: {
    backgroundColor: "transparent",
  },
  mon6: {
    height: "48.24%",
    width: "42.86%",
    top: "8.65%",
    left: "27.94%",
    color: Color.colorWhite,
  },
  rectangleGroup: {
    height: "96.23%",
    width: "18.37%",
    top: "1.3%",
    right: "61.22%",
    bottom: "2.47%",
    left: "20.41%",
    position: "absolute",
  },
  assignmentIndIcon: {
    height: "10.5%",
    width: "14.04%",
    top: "81.5%",
    right: "75.28%",
    bottom: "8.01%",
    left: "10.69%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleContainer: {
    right: "40.85%",
    left: "40.87%",
  },
  groupView: {
    right: "20.44%",
    left: "61.28%",
  },
  thu9: {
    color: Color.colorDarkslategray_100,
    left: "27.91%",
    top: "8.92%",
    width: "43.06%",
    height: "46.85%",
    textAlign: "center",
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
  },
  rectangleParent1: {
    bottom: "0.91%",
    left: "81.72%",
    right: "0%",
    top: "0%",
    width: "18.28%",
    height: "99.09%",
    position: "absolute",
  },
  calendar: {
    height: "9.61%",
    width: "91.47%",
    top: "16.88%",
    right: "4.27%",
    bottom: "73.51%",
    left: "4.27%",
    position: "absolute",
  },
});

export default Calendar;
