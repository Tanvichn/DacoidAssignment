import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import TimeStatusContainer from "../components/TimeStatusContainer";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const AndroidLarge2 = () => {
  return (
    <View style={styles.androidLarge5}>
      <Text style={styles.welcomeBack}>Welcome Back</Text>
      <View style={[styles.androidLarge5Child, styles.androidLayout]} />
      <View style={[styles.androidLarge5Item, styles.androidLayout]} />
      <Text style={[styles.email, styles.passwordClr]}>Email</Text>
      <Text style={[styles.password, styles.passwordClr]}>Password</Text>
      <Text style={[styles.forgotYourPassword, styles.orTypo]}>
        Forgot your password?
      </Text>
      <Text style={[styles.dontHaveAnContainer, styles.orPosition]}>
        <Text style={styles.dontHaveAn}>{`Don’t have an account yet? `}</Text>
        <Text style={styles.createAnAccount}>Create an account</Text>
      </Text>
      <LinearGradient
        style={[styles.androidLarge5Inner, styles.androidLayout]}
        locations={[0, 1]}
        colors={["#7b91ff", "#95beff"]}
      />
      <View style={[styles.lineView, styles.lineViewPosition]} />
      <View style={[styles.androidLarge5Child1, styles.lineViewPosition]} />
      <Text style={[styles.or, styles.orPosition]}>Or</Text>
      <Image
        style={[styles.eyeOffIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/eyeoff.png")}
      />
      <Text style={[styles.signIn, styles.orPosition]}>Sign In</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.androidLarge5Child2, styles.rectangleViewLayout]} />
      <Image
        style={[styles.flatColorIconsgoogle, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/flatcoloriconsgoogle.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <TimeStatusContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  androidLayout: {
    height: 50,
    width: 343,
    borderRadius: Border.br_xs,
    left: 16,
    position: "absolute",
  },
  passwordClr: {
    color: Color.gray100,
    textAlign: "left",
    position: "absolute",
  },
  orTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  orPosition: {
    left: "50%",
    textAlign: "left",
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
  iconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  rectangleViewLayout: {
    height: 44,
    width: 44,
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    top: 686,
    borderColor: Color.gray100,
    borderStyle: "solid",
    position: "absolute",
  },
  welcomeBack: {
    top: 68,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    fontWeight: "600",
    color: Color.black,
    left: 16,
    position: "absolute",
  },
  androidLarge5Child: {
    top: 135,
    backgroundColor: Color.gray50,
    width: 343,
    borderRadius: Border.br_xs,
  },
  androidLarge5Item: {
    top: 209,
    backgroundColor: Color.gray50,
    width: 343,
    borderRadius: Border.br_xs,
  },
  email: {
    top: 153,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    left: 36,
    color: Color.gray100,
  },
  password: {
    top: 227,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    left: 36,
    color: Color.gray100,
  },
  forgotYourPassword: {
    top: 269,
    left: 21,
    textDecoration: "underline",
    fontWeight: "500",
    color: Color.gray100,
    textAlign: "left",
    position: "absolute",
  },
  dontHaveAn: {
    color: Color.black,
  },
  createAnAccount: {
    color: "#829dff",
  },
  dontHaveAnContainer: {
    marginLeft: -140.5,
    top: 756,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textDecoration: "underline",
  },
  androidLarge5Inner: {
    top: 574,
    backgroundColor: "transparent",
    width: 343,
    borderRadius: Border.br_xs,
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
  androidLarge5Child1: {
    left: 202,
    width: 158,
  },
  or: {
    marginLeft: -6.5,
    top: 646,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    color: Color.black,
  },
  eyeOffIcon: {
    top: 226,
    left: 327,
    width: 16,
    height: 16,
  },
  signIn: {
    marginLeft: -29.5,
    top: 589,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  rectangleView: {
    left: 134,
  },
  androidLarge5Child2: {
    left: 196,
  },
  flatColorIconsgoogle: {
    top: 699,
    left: 147,
    width: 18,
    height: 18,
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
  },
  androidLarge5: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge2;
