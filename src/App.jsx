import "./App.css";
import AddCustomer from "./components/AddCustomer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerForm from "./components/CustomerForm";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AddCustomer />} />
          <Route path="/customerform" element={<CustomerForm />} />
        </Routes>
      </Router>
      {/* <AddCustomer /> */}
    </>
  );
}

export default App;
