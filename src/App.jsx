import "./App.css";
import AddCustomer from "./components/AddCustomer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerForm from "./components/CustomerForm";
import Dashboard from "./components/Dashboard"
import SideBar from "./components/SideBar";
function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<AddCustomer />} />
          <Route path="/customerform" element={<CustomerForm />} />
        </Routes>
      </Router> */}
        <div className="flex font-[Figtree]">
          <SideBar/>
          <Dashboard/>
        </div>
        {/* <MyForm/> */}

      {/* <AddCustomer /> */}
    </>
  );
}

export default App;
