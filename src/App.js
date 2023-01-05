import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddContact from "./Components/AddContact";
import EditContact from "./Components/EditContact";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:contactId" element={<EditContact />} />
      </Routes>
    </div>
  );
}
export default App;
