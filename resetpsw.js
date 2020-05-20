import React from "react";
import auth from "@react-native-firebase/auth";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";

export default class Reset extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../../assets/customLogo.gif")} />
        <Text style={styles.fshn}>Ndryshimi i fjalekalimit</Text>

        <TextInput
          style={styles.inputText}
          placeholder="fjalëkalimi i ri"
          secureTextEntry
          placeholderTextColor="#ada5a5"
          // onChange={(e) => this.handleChangePassword(e)}
        />
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={() => alert("sukses")}>
            NDRYSHO
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn2}>
          <Text style={styles.loginnew} onPress={() => this.props.navigation.navigate("login")}>
            HYR ME FJALEKALIMIN E RI
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
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
  },
  forgot: {
    color: "white",
    fontSize: 12,
    paddingTop: 7,
    textDecorationLine: "underline",
  },
  loginBtn: {
    width: "40%",
    backgroundColor: "#000",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  loginBtn2: {
    width: "60%",
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
  loginnew: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
  fshn: {
    marginBottom: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
  },
});
