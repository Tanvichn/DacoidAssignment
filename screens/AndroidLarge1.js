import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import Property1Default from "../components/Property1Default";
import TimeStatusContainer from "../components/TimeStatusContainer";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const AndroidLarge1 = () => {
  return (
    <View style={styles.androidLarge4}>
      <Text style={styles.createAnAccount}>Create an account</Text>
      <View style={[styles.androidLarge4Child, styles.rectangleLayout]} />
      <View style={[styles.androidLarge4Item, styles.rectangleLayout]} />
      <View style={[styles.androidLarge4Inner, styles.rectangleLayout]} />
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <Text style={[styles.byProceedingIContainer, styles.containerTypo]}>
        <Text
          style={styles.byProceedingI}
        >{`By proceeding, I agree to all `}</Text>
        <Text style={styles.tc}>{`T&C`}</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.byProceedingI}>{`and  `}</Text>
        <Text style={styles.tc}>Privacy Policy</Text>
      </Text>
      <Property1Default
        vector={require("../assets/vector.png")}
        property1DefaultPosition="absolute"
        property1DefaultTop={431}
        property1DefaultLeft={16}
        rectangleViewBorderColor="#808080"
      />
      <Text style={[styles.firstName, styles.nameTypo]}>First Name</Text>
      <Text style={[styles.lastName, styles.nameTypo]}>{`Last Name `}</Text>
      <Text style={[styles.email, styles.nameTypo]}>Email</Text>
      <Text style={[styles.password, styles.nameTypo]}>Password</Text>
      <Text style={[styles.alreadyHaveAnContainer, styles.orPosition]}>
        <Text style={styles.alreadyHaveAn}>{`Already have an account? `}</Text>
        <Text style={styles.login}>Login</Text>
      </Text>
      <View style={[styles.lineView, styles.lineViewPosition]} />
      <View style={[styles.androidLarge4Child1, styles.lineViewPosition]} />
      <Text style={[styles.or, styles.orPosition]}>Or</Text>
      <View style={[styles.androidLarge4Child2, styles.androidChildLayout]} />
      <View style={[styles.androidLarge4Child3, styles.androidChildLayout]} />
      <Image
        style={styles.flatColorIconsgoogle}
        contentFit="cover"
        source={require("../assets/flatcoloriconsgoogle.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <LinearGradient
        style={[styles.rectangleLineargradient, styles.rectangleLayout]}
        locations={[0, 1]}
        colors={["#7b91ff", "#95beff"]}
      />
      <Text style={[styles.createAnAccount1, styles.orPosition]}>
        Create an Account
      </Text>
      <TimeStatusContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 50,
    width: 343,
    borderRadius: Border.br_xs,
    left: 16,
    position: "absolute",
  },
  containerTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  nameTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  orPosition: {
    left: "50%",
    position: "absolute",
  },
  lineViewPosition: {
    height: 1,
    borderTopWidth: 0.5,
    borderColor: Color.gray100,
    borderStyle: "solid",
    top: 655,
    position: "absolute",
  },
  androidChildLayout: {
    height: 44,
    width: 44,
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    top: 686,
    borderColor: Color.gray100,
    borderStyle: "solid",
    position: "absolute",
  },
  createAnAccount: {
    top: 68,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    fontWeight: "600",
    color: Color.black,
    left: 16,
    position: "absolute",
  },
  androidLarge4Child: {
    top: 135,
    backgroundColor: Color.gray50,
    width: 343,
    borderRadius: Border.br_xs,
  },
  androidLarge4Item: {
    top: 209,
    backgroundColor: Color.gray50,
    width: 343,
    borderRadius: Border.br_xs,
  },
  androidLarge4Inner: {
    top: 283,
    backgroundColor: Color.gray50,
    width: 343,
    borderRadius: Border.br_xs,
  },
  rectangleView: {
    top: 357,
    backgroundColor: Color.gray50,
    width: 343,
    borderRadius: Border.br_xs,
  },
  byProceedingI: {
    color: Color.gray100,
  },
  tc: {
    color: Color.colorCornflowerblue_200,
    textDecoration: "underline",
  },
  text: {
    color: "#eb1754",
  },
  byProceedingIContainer: {
    top: 431,
    left: 46,
    lineHeight: 21,
    position: "absolute",
  },
  firstName: {
    top: 153,
    left: 36,
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.gray100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  lastName: {
    top: 227,
    left: 36,
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.gray100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  email: {
    top: 301,
    left: 36,
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.gray100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  password: {
    top: 375,
    left: 36,
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.gray100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  alreadyHaveAn: {
    color: Color.black,
  },
  login: {
    color: "#819cff",
    textDecoration: "underline",
  },
  alreadyHaveAnContainer: {
    marginLeft: -97.5,
    top: 756,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  lineView: {
    width: 156,
    left: 16,
    height: 1,
    borderTopWidth: 0.5,
    borderColor: Color.gray100,
    borderStyle: "solid",
    top: 655,
  },
  androidLarge4Child1: {
    left: 202,
    width: 158,
  },
  or: {
    marginLeft: -6.5,
    top: 646,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.black,
  },
  androidLarge4Child2: {
    left: 134,
  },
  androidLarge4Child3: {
    left: 196,
  },
  flatColorIconsgoogle: {
    top: 699,
    left: 147,
    width: 18,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "2.13%",
    width: "2.37%",
    top: "87.38%",
    right: "40.56%",
    bottom: "10.5%",
    left: "57.07%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleLineargradient: {
    top: 574,
    backgroundColor: "transparent",
    width: 343,
    borderRadius: Border.br_xs,
  },
  createAnAccount1: {
    marginLeft: -76.5,
    top: 589,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  androidLarge4: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge1;
