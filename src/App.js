import Body from './components/Body';
import {Provider} from "react-redux";
import appStore from './utils/appStore';

function App() {

  return (
    // store - The single Redux store in your application.
    <Provider store={appStore}>
     <Body />
    </Provider>
  );
}

export default App;
