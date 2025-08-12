import React from "react";
import "./AddCustomer.css";
import { MdAddCircleOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {
  const navigate = useNavigate();
  const customers = JSON.parse(localStorage.getItem("customers")) || [];

  const handleButtonClick = () => {
    navigate("/customerform");
  };
  return (
    <div className="wrapper-container">
      {/* head part */}
      <div className="heading">
        <div className="customer">
          <h2>customers</h2>
        </div>
        <div className="btn-create">
          <button onClick={handleButtonClick}>
            <MdAddCircleOutline size={20} />
            <span>Create New Customer</span>
          </button>
        </div>
      </div>

      {/* <div className="search-section">
        
      </div> */}

      {/* customer details table section */}
      <table border="1" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Email</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {customers.length > 0 ? (
            customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.name}</td>
                <td>{customer.type}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No customers yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AddCustomer;
