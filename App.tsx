import React from "react";
import RootNavigator from "./src/navigators/RootNavigator";
import { Provider } from "react-redux";
import store from "./src/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

export default App;