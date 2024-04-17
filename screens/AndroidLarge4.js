import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import ChartFull from "../components/ChartFull";
import Property1Default1 from "../components/Property1Default1";
import TimeStatusContainer from "../components/TimeStatusContainer";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AndroidLarge4 = () => {
  return (
    <View style={styles.androidLarge8}>
      <View style={styles.androidLarge8Child} />
      <Image
        style={styles.androidLarge8Item}
        contentFit="cover"
        source={require("../assets/ellipse-55.png")}
      />
      <Text style={styles.workoutTracker}>Workout Tracker</Text>
      <Text style={[styles.upcomingWorkout, styles.whatDoYouTypo]}>
        Upcoming Workout
      </Text>
      <Text style={[styles.whatDoYou, styles.whatDoYouTypo]}>
        What Do You Want to Train
      </Text>
      <Image
        style={[styles.chevronLeftIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/chevronleft.png")}
      />
      <Image
        style={styles.unionIcon}
        contentFit="cover"
        source={require("../assets/union.png")}
      />
      <Image
        style={styles.unionIcon}
        contentFit="cover"
        source={require("../assets/union1.png")}
      />
      <ChartFull />
      <LinearGradient
        style={styles.youveBurnedFewerCaloriesTParent}
        locations={[0, 1]}
        colors={["rgba(129, 157, 255, 0.28)", "rgba(16, 16, 16, 0)"]}
      >
        <Text
          style={styles.youveBurnedFewer}
        >{`You've burned fewer calories than yesterday. Time to get moving! `}</Text>
        <Text style={styles.text}>
          <Text style={styles.text1}>􀆊</Text>
          <Text style={styles.text2}>{` `}</Text>
        </Text>
        <Image
          style={[styles.alertTriangleIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/alerttriangle.png")}
        />
      </LinearGradient>
      <Text style={[styles.lessThen320cal, styles.goodJobTypo]}>
        􀄩 less then 320cal
      </Text>
      <Text style={[styles.goodJob, styles.goodJobTypo]}>􀙬 Good job</Text>
      <View
        style={[styles.androidLarge8Inner, styles.rectangleViewShadowBox]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Text style={[styles.seeMore, styles.fullTypo]}>See more</Text>
      <Text style={[styles.fullBodyWorkout, styles.fullTypo]}>
        Full Body Workout
      </Text>
      <Text style={[styles.upperBodyWorkout, styles.fullTypo]}>
        Upper Body Workout
      </Text>
      <Text style={[styles.fullBodyWorkout1, styles.armsPosition]}>
        Full Body Workout
      </Text>
      <Text style={[styles.arms, styles.armsTypo]}>Arms</Text>
      <Text style={[styles.chest, styles.armsTypo]}>Chest</Text>
      <Text style={[styles.today3pm, styles.armsTypo]}>Today 3pm</Text>
      <Text style={[styles.feb330Pm, styles.armsTypo]}>4 Feb, 3:30 pm</Text>
      <Property1Default1
        ellipse52={require("../assets/ellipse-52.png")}
        property1DefaultPosition="absolute"
        property1DefaultTop={456}
        property1DefaultLeft={303}
        property1DefaultWidth={40}
        property1DefaultHeight={20}
        rectangleViewBorderRadius={14}
        rectangleViewBackgroundColor="#8099ff"
        rectangleViewBorderWidth={0.7}
        ellipseIconHeight="78.5%"
        ellipseIconWidth="39.25%"
        ellipseIconTop="10.5%"
        ellipseIconRight="53.5%"
        ellipseIconBottom="11%"
        ellipseIconLeft="7.25%"
      />
      <Property1Default1
        ellipse52={require("../assets/ellipse-52.png")}
        property1DefaultPosition="absolute"
        property1DefaultTop={547}
        property1DefaultLeft={303}
        property1DefaultWidth={40}
        property1DefaultHeight={20}
        rectangleViewBorderRadius={14}
        rectangleViewBackgroundColor="#8099ff"
        rectangleViewBorderWidth={0.7}
        ellipseIconHeight="78.5%"
        ellipseIconWidth="39.25%"
        ellipseIconTop="10.5%"
        ellipseIconRight="53.5%"
        ellipseIconBottom="11%"
        ellipseIconLeft="7.25%"
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-53.png")}
      />
      <Image
        style={[styles.androidLarge8Child1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-54.png")}
      />
      <View style={styles.androidLarge8Child2} />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-51.png")}
      />
      <Image
        style={styles.androidLarge8Child3}
        contentFit="cover"
        source={require("../assets/group-11.png")}
      />
      <TimeStatusContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  whatDoYouTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.black,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
    overflow: "hidden",
  },
  goodJobTypo: {
    fontSize: FontSize.size_xs_2,
    top: 143,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  rectangleViewShadowBox: {
    height: 75,
    backgroundColor: Color.colorWhite,
    width: 343,
    shadowOpacity: 1,
    elevation: 25,
    shadowRadius: 25,
    shadowOffset: {
      width: -4,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_xs,
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  fullTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  armsPosition: {
    left: 32,
    color: Color.black,
  },
  armsTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  ellipseIconLayout: {
    width: 50,
    left: 32,
    height: 50,
    position: "absolute",
  },
  androidLarge8Child: {
    top: 647,
    backgroundColor: "rgba(140, 177, 255, 0.6)",
    height: 124,
    width: 343,
    shadowOpacity: 1,
    elevation: 25,
    shadowRadius: 25,
    shadowOffset: {
      width: -4,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_xs,
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  androidLarge8Item: {
    left: 247,
    width: 100,
    height: 100,
    top: 663,
    position: "absolute",
  },
  workoutTracker: {
    marginLeft: -86.5,
    top: 68,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  upcomingWorkout: {
    top: 392,
    marginLeft: -171.5,
    fontSize: FontSize.size_base,
  },
  whatDoYou: {
    marginLeft: -170.5,
    top: 611,
  },
  chevronLeftIcon: {
    top: 70,
    borderRadius: Border.br_10xs,
    left: 16,
    height: 20,
    width: 20,
  },
  unionIcon: {
    width: 2,
    height: 10,
  },
  youveBurnedFewer: {
    top: 10,
    left: 37,
    fontSize: 13,
    width: 281,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  text1: {
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
  },
  text2: {
    fontFamily: FontFamily.montserratRegular,
  },
  text: {
    top: 13,
    left: 305,
    fontSize: FontSize.size_sm_2,
    textAlign: "right",
    width: 12,
    color: Color.black,
    position: "absolute",
  },
  alertTriangleIcon: {
    top: 16,
    left: 9,
  },
  youveBurnedFewerCaloriesTParent: {
    top: 287,
    borderStyle: "solid",
    borderColor: "rgba(69, 69, 69, 0.04)",
    borderWidth: 1,
    width: 329,
    backgroundColor: "transparent",
    height: 50,
    left: 16,
    position: "absolute",
    borderRadius: Border.br_3xs,
  },
  lessThen320cal: {
    left: 233,
  },
  goodJob: {
    left: 137,
  },
  androidLarge8Inner: {
    top: 428,
  },
  rectangleView: {
    top: 519,
  },
  seeMore: {
    top: 394,
    left: 300,
    color: Color.gray100,
  },
  fullBodyWorkout: {
    top: 444,
    left: 91,
    color: Color.black,
  },
  upperBodyWorkout: {
    top: 539,
    left: 91,
    color: Color.black,
  },
  fullBodyWorkout1: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
    top: 663,
  },
  arms: {
    top: 687,
    left: 32,
    color: Color.black,
  },
  chest: {
    top: 707,
    left: 32,
    color: Color.black,
  },
  today3pm: {
    top: 467,
    left: 91,
    color: Color.gray100,
  },
  feb330Pm: {
    top: 562,
    left: 91,
    color: Color.gray100,
  },
  ellipseIcon: {
    top: 441,
  },
  androidLarge8Child1: {
    top: 532,
  },
  androidLarge8Child2: {
    top: 724,
    left: 0,
    width: 375,
    height: 76,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  groupIcon: {
    height: "3.4%",
    width: "84.53%",
    top: "93.26%",
    right: "7.73%",
    bottom: "3.34%",
    left: "7.73%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  androidLarge8Child3: {
    top: 699,
    left: 156,
    width: 63,
    height: 63,
    position: "absolute",
  },
  androidLarge8: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    borderRadius: Border.br_3xs,
  },
});

export default AndroidLarge4;
