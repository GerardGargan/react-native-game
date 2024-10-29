import { StyleSheet, View } from "react-native";
import Colors from "../../util/colours";

export default function Card({children}) {
    return (
        <View style={styles.inputContainer}>{children}</View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
      },
});