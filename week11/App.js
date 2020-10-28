import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Button, Text } from "react-native-elements";

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Nikhil Desai</Card.Title>
        <Text>Thai Red Curry</Text>
        <Card.Divider />
        <Text>Chocolate Cake</Text>
        <Button title="SUBMIT"></Button>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
