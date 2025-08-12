import React from "react";
import "./AddCustomer.css";
import { MdAddCircleOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {
  const navigate = useNavigate();

  const handleButtonClick = () =>{
    navigate("/customerform");
  }
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
    </div>
  );
};

export default AddCustomer;
