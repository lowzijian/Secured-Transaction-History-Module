import { COLORS } from "@/constants/theme";
import { StyleSheet, View } from "react-native";

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: COLORS["border-primary"],
    width: "100%",
  },
});

export default Divider;
