import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const App = () => {
  const [isPayClicked, setIsPayClicked] = useState(false);

  return (
    <>
      {!isPayClicked ?
        <View style={styles.container}>
          <Text>Click on Pay to continue</Text>
          <TouchableOpacity style={styles.button} onPress={() => setIsPayClicked(true)}>
            <Text style={styles.buttonText}>Pay</Text>
          </TouchableOpacity>
        </View>
        :
        <></>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  button: {
    backgroundColor: "#2B85F3",
    width: 80,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginTop: 40
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  }
});

export default App;
