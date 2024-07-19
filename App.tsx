import './gesture-handler';
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import Store from "./src/redux/configureStore"

import * as React from 'react';
import Navigations from './src/navigations';

function App() {
  return (
    <Provider store={Store}>
     <Navigations/>
    </Provider>
  
  );
}

export default App;
