import { StyleSheet, Platform } from "react-native";

const isAndroid = Platform.OS === "android";

export default StyleSheet.create({
  container: {
    top: isAndroid ? -1 : 2,
    justifyContent: "center",
  },
});
