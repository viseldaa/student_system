import React from "react";
import { StyleSheet, Text, View, TextInput, Image, Alert, TouchableOpacity } from "react-native";
import { db } from "../config";
let login = (eml, psw) => {
  db.ref("/logins").push({
    email: eml,
    password: psw,
  });
};

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChangeEmail = (event) => {
    this.setState({
      email: event.nativeEvent.text,
    });
  };
  handleChangePassword = (event) => {
    this.setState({
      password: event.nativeEvent.text,
    });
  };

  handleSubmit = () => {
    //Handler for the Submit onPress
    if (this.state.email != "" && this.state.password != "") {
      login(this.state.email, this.state.password);
      this.props.navigation.navigate("home");
    } else if (this.state.email != "" && this.state.password == "") {
      alert("Ju lutem vendosni një fjalëkalim!");
    } else if (this.state.email == "" && this.state.password != "") {
      alert("Ju lutem vendosni e-mailin!");
    } else alert("Ju lutem vendosni e-mailin dhe fjalëkalimin!");
  };
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../../assets/customLogo.gif")} />
        <Text style={styles.fshn}>Fakulteti i Shkencave të Natyrës</Text>
        <TextInput
          style={styles.inputText}
          placeholder="emër.mbiemër@fshnstudent.info"
          placeholderTextColor="#ada5a5"
          onChange={(e) => this.handleChangeEmail(e)}
        />

        <TextInput
          style={styles.inputText}
          placeholder="fjalëkalimi"
          secureTextEntry
          placeholderTextColor="#ada5a5"
          onChange={(e) => this.handleChangePassword(e)}
        />
        <TouchableOpacity>
          <Text style={styles.forgot} onPress={() => this.props.navigation.navigate("Reset")}>
            Harruat fjalëkalimin?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={() => this.handleSubmit()}>
            HYR
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
    marginBottom: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 16,
  },
});
