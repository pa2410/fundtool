import React, { useEffect, useState } from "react";
import RootNavigator from "./src/navigators/RootNavigator";
import { Provider } from "react-redux";
import store from "./src/store/store";
import NetInfo from "@react-native-community/netinfo";
import { StyleSheet, Text, View } from "react-native";

const App = () => {

  const [isConnected, setIsConnected] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      if (state.isConnected) {
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RootNavigator />
        {!isConnected && (
          <View style={styles.offlineContainer}>
            <Text style={styles.offlineText}>Internet is off</Text>
          </View>
        )}
        {showMessage && isConnected && (
          <View style={styles.onlineContainer}>
            <Text style={styles.onlineText}>Internet is on</Text>
          </View>
        )}
      </View>
    </Provider>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  offlineContainer: {
    backgroundColor: "red",
    padding: 10,
    alignItems: "center",
  },
  offlineText: {
    color: "#fff",
  },
  onlineContainer: {
    backgroundColor: "green",
    padding: 10,
    alignItems: "center",
  },
  onlineText: {
    color: "#fff",
  },
});
