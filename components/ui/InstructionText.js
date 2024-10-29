import { StyleSheet, Text } from "react-native";
import Colors from "../../util/colours";
export default function InstructionText({children, style}) {
    return <Text style={[styles.instructionText, style]}>{children}</Text>
}

const styles = StyleSheet.create({
instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24
}
});