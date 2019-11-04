import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ActivityIndicator
} from "react-native";

export default function LoginScreen({ navigation: { navigate } }) {
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      if (mobileNo === "123" && password === "123") {
        setLoading(false);
        navigate("Home");
      } else {
        setLoading(false);
      }
    }, 2000);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={{ marginBottom: 20 }}>
        User Log{!loading ? "in" : "ging in..."}
      </Text>
      {!loading && (
        <TextInput
          style={styles.input}
          placeholder="Mobile No."
          onChangeText={text => setMobileNo(text)}
          value={mobileNo}
        />
      )}
      {!loading && (
        <TextInput
          style={styles.input}
          placeholder="password"
          onChangeText={text => setPassword(text)}
          value={password}
        />
      )}
      {!loading && (
        <Button
          title="Login"
          onPress={handleLogin}
          style={{ marginTop: 20, width: 250 }}
        />
      )}
      {loading && (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{ marginTop: 20 }}
        />
      )}
    </ScrollView>
  );
}

LoginScreen.navigationOptions = {
  title: "Login"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: 250,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10
  }
});
