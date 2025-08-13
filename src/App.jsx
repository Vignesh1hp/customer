import "./App.css";
import AddCustomer from "./components/AddCustomer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerForm from "./components/CustomerForm";
import SideBar from "./components/SideBar";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Default page: AddCustomer */}
            <Route index element={<Dashboard />} />
            <Route path="customers" element={<AddCustomer />} />
            <Route path="customer/create" element={<CustomerForm/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
