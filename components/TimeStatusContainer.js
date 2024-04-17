import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const TimeStatusContainer = () => {
  return (
    <View style={styles.status}>
      <View style={styles.rectangle} />
      <View style={styles.statusBar}>
        <View style={[styles.battery, styles.batteryPosition]}>
          <View style={styles.border} />
          <Image
            style={[styles.capIcon, styles.batteryPosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
      </View>
      <Text style={styles.time}>9:41</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  batteryPosition: {
    right: 0,
    position: "absolute",
  },
  rectangle: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorWhite,
    display: "none",
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.colorGray_300,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    width: 24,
    height: 11,
    top: 0,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  statusBar: {
    top: 16,
    right: 14,
    width: 67,
    height: 12,
    position: "absolute",
  },
  time: {
    marginTop: -10,
    width: "14.4%",
    top: "50%",
    left: "3.73%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorGray_300,
    textAlign: "center",
    position: "absolute",
  },
  status: {
    left: 0,
    width: 375,
    height: 44,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
});

export default TimeStatusContainer;
