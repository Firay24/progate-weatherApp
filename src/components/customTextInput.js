import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const CustomTextInput = ({
  text,
  onChange,
  multiline = false,
  placeholder,
  nmberOfLines,
}) => (
  <View style={styles.container}>
    <TextInput
      multiline={multiline}
      numberOfLines={nmberOfLines}
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChange}
      defaultValue={text}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "#DDDDDD",
    padding: 10,
  },
  container: {
    marginTop: 20,
  },
});

export default CustomTextInput;
