import "./App.css";
import AddCustomer from "./components/AddCustomer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerForm from "./components/CustomerForm";
import SideBar from "./components/SideBar";
import Layout from "./components/Layout";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Default page: AddCustomer */}
            <Route index element={<AddCustomer />} />
            <Route path="customerform" element={<CustomerForm />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
