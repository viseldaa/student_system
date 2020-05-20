import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from "react-native";
import firebase from "../config";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      uid: "",
    };
  }

  render() {
    // this.state = {
    //   displayName: firebase.auth().currentUser.displayName,
    //   uid: firebase.auth().currentUser.uid,
    // };
    return (
      <View style={styles.container}>
        <Button
          color="#000"
          title="Logout"
          onPress={() => this.props.navigation.navigate("login")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 35,
    backgroundColor: "#fff",
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20,
  },
});
