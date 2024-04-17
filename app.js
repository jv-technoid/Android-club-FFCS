import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Jai Vignesh SD </Text>
      <StatusBar style="auto" />
      <CustomButton />
    </View>
  );
}

const CustomButton = () => {
  return (
    <View>
      <Button 
        title="Click Me!" 
        onPress={() => console.log("Button clicked")}
        color="darkkhaki" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkslategray",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
    color: "darkseagreen",
    fontFamily: "Times New Roman",
  },
});
