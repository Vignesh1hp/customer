import "./App.css";
import AddCustomer from "./components/AddCustomer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerForm from "./components/CustomerForm";
import MyForm from "./components/MyForm";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AddCustomer />} />
          <Route path="/customerform" element={<CustomerForm />} />
        </Routes>
      </Router>

        {/* <MyForm/> */}

      {/* <AddCustomer /> */}
    </>
  );
}

export default App;
