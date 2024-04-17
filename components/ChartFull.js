import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const ChartFull = () => {
  return (
    <View style={styles.chartFull}>
      <View style={styles.value}>
        <View style={styles.chart}>
          <Image
            style={[styles.backLinesIcon, styles.chartChildLayout3]}
            contentFit="cover"
            source={require("../assets/back-lines.png")}
          />
          <Text style={styles.cal}>900CAL</Text>
          <Text style={[styles.text, styles.textTypo]}>12:00</Text>
          <Text style={[styles.text1, styles.textTypo]}>6:00</Text>
          <Text style={[styles.text2, styles.textTypo]}>12:00</Text>
          <Text style={[styles.text3, styles.textTypo]}>6:00</Text>
          <View style={[styles.chartChild, styles.chartChildLayout2]} />
          <View style={[styles.chartItem, styles.chartChildLayout2]} />
          <View style={[styles.chartInner, styles.chartChildLayout2]} />
          <View style={[styles.rectangleView, styles.chartChildLayout1]} />
          <View style={[styles.chartChild1, styles.chartChildLayout2]} />
          <View style={[styles.chartChild2, styles.chartChildLayout2]} />
          <View style={[styles.chartChild3, styles.chartChildLayout]} />
          <View style={[styles.chartChild4, styles.chartChildLayout2]} />
          <View style={[styles.chartChild5, styles.chartChildLayout1]} />
          <View style={[styles.chartChild6, styles.chartChildLayout1]} />
          <View style={[styles.chartChild7, styles.chartChildLayout2]} />
          <View style={[styles.chartChild8, styles.chartChildLayout2]} />
          <View style={[styles.chartChild9, styles.chartChildPosition2]} />
          <View style={[styles.chartChild10, styles.chartChildLayout2]} />
          <View style={[styles.chartChild11, styles.chartChildPosition1]} />
          <View style={[styles.chartChild12, styles.chartChildPosition]} />
          <View style={[styles.chartChild13, styles.chartChildPosition2]} />
          <View style={styles.chartChild14} />
          <View style={[styles.chartChild15, styles.chartChildPosition1]} />
          <View style={[styles.chartChild16, styles.chartChildPosition]} />
          <View style={[styles.chartChild17, styles.chartChildLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartChildLayout3: {
    height: 70,
    top: 1,
  },
  textTypo: {
    fontSize: FontSize.size_smi_2,
    top: 75,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  chartChildLayout2: {
    width: 3,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
    position: "absolute",
  },
  chartChildLayout1: {
    height: 9,
    top: 62,
    backgroundColor: Color.colorCornflowerblue_400,
    width: 3,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
    position: "absolute",
  },
  chartChildLayout: {
    height: 10,
    top: 61,
    backgroundColor: Color.colorCornflowerblue_400,
    width: 3,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
    position: "absolute",
  },
  chartChildPosition2: {
    left: 263,
    width: 3,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
    position: "absolute",
  },
  chartChildPosition1: {
    left: 270,
    width: 3,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
    position: "absolute",
  },
  chartChildPosition: {
    left: 274,
    width: 3,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
    position: "absolute",
  },
  backLinesIcon: {
    left: 1,
    width: 328,
    position: "absolute",
  },
  cal: {
    top: 3,
    left: 0,
    fontSize: FontSize.size_sm_2,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  text: {
    left: 2,
    width: 40,
  },
  text1: {
    left: 84,
    width: 41,
  },
  text2: {
    width: 38,
    left: 167,
  },
  text3: {
    left: 250,
    width: 35,
  },
  chartChild: {
    backgroundColor: Color.colorLimegreen_200,
    borderStyle: "solid",
    borderColor: Color.colorLimegreen_100,
    borderWidth: 0.4,
    left: 153,
    width: 3,
    height: 70,
    top: 1,
  },
  chartItem: {
    top: 11,
    height: 60,
    backgroundColor: Color.colorCornflowerblue_400,
    left: 153,
    width: 3,
  },
  chartInner: {
    top: 41,
    left: 157,
    height: 31,
    backgroundColor: Color.colorCornflowerblue_400,
  },
  rectangleView: {
    left: 167,
  },
  chartChild1: {
    top: 54,
    left: 191,
    height: 17,
    backgroundColor: Color.colorCornflowerblue_400,
  },
  chartChild2: {
    top: 37,
    left: 195,
    height: 35,
    backgroundColor: Color.colorCornflowerblue_400,
  },
  chartChild3: {
    left: 198,
  },
  chartChild4: {
    top: 64,
    left: 202,
    height: 7,
    backgroundColor: Color.colorCornflowerblue_400,
  },
  chartChild5: {
    left: 218,
  },
  chartChild6: {
    left: 235,
  },
  chartChild7: {
    top: 46,
    left: 255,
    height: 25,
    backgroundColor: Color.colorCornflowerblue_400,
  },
  chartChild8: {
    top: 63,
    left: 259,
    height: 8,
    backgroundColor: Color.colorCornflowerblue_400,
  },
  chartChild9: {
    top: 38,
    height: 34,
    backgroundColor: Color.colorRed,
  },
  chartChild10: {
    top: 0,
    left: 266,
    height: 71,
    backgroundColor: Color.colorRed,
  },
  chartChild11: {
    top: 30,
    height: 42,
    backgroundColor: Color.colorRed,
  },
  chartChild12: {
    top: 42,
    height: 30,
    backgroundColor: Color.colorRed,
  },
  chartChild13: {
    top: 48,
    height: 23,
    backgroundColor: Color.colorCornflowerblue_400,
  },
  chartChild14: {
    top: 22,
    left: 267,
    width: 2,
    height: 49,
    backgroundColor: Color.colorCornflowerblue_400,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
    position: "absolute",
  },
  chartChild15: {
    top: 43,
    height: 29,
    backgroundColor: Color.colorCornflowerblue_400,
  },
  chartChild16: {
    top: 51,
    height: 20,
    backgroundColor: Color.colorCornflowerblue_400,
  },
  chartChild17: {
    left: 293,
  },
  chart: {
    width: 329,
    height: 90,
  },
  value: {
    width: 343,
  },
  chartFull: {
    top: 173,
    left: 16,
    height: 90,
    width: 343,
    position: "absolute",
  },
});

export default ChartFull;
