/* import StyleSheet from 'react-native';*/
import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  $underlayColor: "$border",
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    /*justifyContent: 'space-between',*/
    alignItems: "center",
    backgroundColor: "$white"
  },
  text: {
    fontSize: 16,
    color: "$darkText"
  },
  separator: {
    marginLeft: 20,
    backgroundColor: "$border",
    flex: 1,
    height: 1
  },
  icon: {
    backgroundColor: "transparent",
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  iconVisible: {
    backgroundColor: "$primaryBlue"
  },
  checkIcon: {
    width: 18
  },
  thumbnail: {
    height: 60,
    width: 60,
    paddingRight: 10
  },
  textArea: {
    flex: 1,
    marginLeft: 10,
    alignItems: "flex-start"
  },
  note: {
    color: "#bbb",
    fontStyle: "italic",
    fontSize: 14
  }
});

export default styles;
