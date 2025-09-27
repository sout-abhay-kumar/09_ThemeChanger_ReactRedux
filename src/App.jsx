import { Provider } from "react-redux";
import { store } from "./app/store";
import Changer from "./components/Changer";

function App() {
  

  return (
    <Provider store={store}>
      <Changer/>
    </Provider>
  )
}

export default App
