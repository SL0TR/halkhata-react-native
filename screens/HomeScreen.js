import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import * as Contacts from "expo-contacts";
import * as Permissions from "expo-permissions";

export default function HomeScreen(props) {
  const [userConatcts, setUserConatcts] = useState([]);

  const showFirstContactAsync = async () => {
    // Ask for permission to query contacts.
    const permission = await Permissions.askAsync(Permissions.CONTACTS);

    if (permission.status !== "granted") {
      // Permission was denied...
      return;
    }
    const contacts = await Contacts.getContactsAsync({
      fields: [Contacts.PHONE_NUMBERS],
      pageSize: 20,
      pageOffset: 0
    });
    if (contacts.total > 0) {
      setUserConatcts(contacts.data);
      console.log(contacts.data);
    }
  };

  useEffect(() => {
    showFirstContactAsync();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={{ fontSize: 17, marginBottom: 10 }}>
          Welcome to the home page!
        </Text>
        <FlatList
          data={userConatcts}
          renderItem={({ item }) => (
            <Text style={{ padding: 10 }}>{item.name}</Text>
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: "Home"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  }
});
