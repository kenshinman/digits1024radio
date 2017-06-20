import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  $iconRed: "$primaryRed",
  icon: {
    paddingLeft: 15
  },
  bg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  logoCenter: {
    width: 150,
    height: 150
  },
  playButton: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "rgba(0,0,0,0.6)",
    marginVertical: 20
  },
  playText: {
    color: "$white",
    fontWeight: "600",
    fontSize: 18
  },
  noShows: {
    fontSize: 22,
    textAlign: "center"
  },
  singleShowBanner: {
    width: "100%"
  }
});

export default styles;
