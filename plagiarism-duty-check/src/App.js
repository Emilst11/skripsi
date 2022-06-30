import FormUpload from "./components/FormUpload";
import ListItems from "./components/ListItems";
import Navbar from "./components/Navbar";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FormUpload/>
      <ListItems/>
    </div>
  );
}

export default App;
