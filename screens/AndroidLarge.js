import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import TimeStatusContainer from "../components/TimeStatusContainer";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";



const AndroidLarge = () => {
  return (
    <View style={styles.androidLarge2}>
      <Image
        style={styles.androidLarge2Child}
        contentFit="cover"
        source={require("../assets/group-12.png")}
      />
      <Text style={styles.getBurn}>Get Burn</Text>
      <Text style={[styles.letsKeepBurning, styles.skipTypo]}>
        Let’s keep burning to achieve your goals, it hurts only temporarily, if
        you give up now you will be in pain forever
      </Text>
      <Text style={[styles.skip, styles.skipTypo]}>require("./AndroidLarge6")</Text>
      <Image
        style={styles.image16Icon}
        contentFit="cover"
        source={require("../assets/image-16.png")}
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
  androidLarge2Child: {
    top: 696,
    left: 299,
    width: 60,
    height: 60,
    position: "absolute",
  },
  getBurn: {
    top: 499,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.black,
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  letsKeepBurning: {
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
  image16Icon: {
    marginLeft: -176.5,
    top: 156,
    left: "50%",
    width: 352,
    height: 235,
    position: "absolute",
  },
  androidLarge2: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge;
