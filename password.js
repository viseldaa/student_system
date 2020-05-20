import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Image } from "react-native";

export default function password(props) {
  return (
    <View style={styles.textBoxContainer}>
      <TextInput
        style={styles.inputText}
        placeholder="fjalëkalimi"
        secureTextEntry
        placeholderTextColor="#ada5a5"
        underlineColorAndroid="transparent"
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a0a2a3",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  inputView: {
    width: "100%",
    backgroundColor: "#465881",
    borderRadius: 25,
    marginBottom: 20,
    justifyContent: "flex-start",
    padding: 20,
  },
  inputText: {
    height: 50,
    width: 300,
    color: "#2f2f2f",
    marginTop: 25,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingLeft: 25,
    alignSelf: "auto",
  },
  textBoxContainer: {
    position: "relative",
    alignSelf: "auto",
    justifyContent: "center",
  },

  forgot: {
    color: "white",
    fontSize: 12,
    paddingTop: 7,
    textDecorationLine: "underline",
  },
  loginBtn: {
    width: "40%",
    backgroundColor: "#DA251C",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  logo: {
    width: 70,
    height: 70,
    alignItems: "flex-start",
    marginTop: 170,
    marginBottom: 15,
    justifyContent: "center",
  },
  loginText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
  fshn: {
    marginBottom: 100,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 16,
  },
  touachableButton: {
    position: "absolute",
    right: 17,
    bottom: 4,
    height: 40,
    width: 35,
    padding: 2,
    flexDirection: "row",
  },
  passbtn: {
    flex: 1,
    width: 35,
    height: 35,
    flexDirection: "row",
  },
});
