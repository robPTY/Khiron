import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const style = {
    color: '#fff',
    fontSize: 64,
    fontWeight: 'bold',
  };

  return (
    <View style={styles.container}>
      <Text style={style}>SOLO</Text>
      <Button title="Click me" onPress={()=> console.log("Button tapped")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#32ad2a',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
