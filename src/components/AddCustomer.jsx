import React, { useState } from "react";
// import "./AddCustomer.css";
import { MdAddCircleOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { data } from "../assets/data";
import DataTable from "react-data-table-component";
// const AddCustomer = () => {
//   const navigate = useNavigate();
//   const customers = JSON.parse(localStorage.getItem("customers")) || [];

//   const handleButtonClick = () => {
//     navigate("/customerform");
//   };
//   return (
//     <div className="wrapper-container">
//       <div className="heading">
//         <div className="customer">
//           <h2>customers</h2>
//         </div>
//         <div className="btn-create">
//           <button onClick={handleButtonClick}>
//             <MdAddCircleOutline size={20} />
//             <span>Create New Customer</span>
//           </button>
//         </div>
//       </div>

//       <table border="1" style={{ marginTop: "20px" }}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Type</th>
//             <th>Email</th>
//             <th>phone</th>
//           </tr>
//         </thead>
//         <tbody>
//           {customers.length > 0 ? (
//             customers.map((customer, index) => (
//               <tr key={index}>
//                 <td>{customer.name}</td>
//                 <td>{customer.type}</td>
//                 <td>{customer.email}</td>
//                 <td>{customer.phone}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4">No customers yet</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Type",
    selector: (row) => row.type,
  },

  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Phone",
    selector: (row) => row.phone,
  },
  {
    name: "Action",
    selector: (row) => row.action,
  },
];

const customStyles = {
  headCells: {
    style: {
      backgroundColor: "#006666",
      color: "white",
      fontSize: "18px",
      fontWeight: "bolder",
    },
  },
};

const AddCustomer = () => {
  const [records, setRecords] = useState(data);
  const navigate = useNavigate();

  const handleChange = (e) => {
    let query = e.target.value;
    const newrecords = data.filter((item) =>
      item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
    setRecords(newrecords);
  };
  const handleButtonClick = () => {
    navigate("/customerform");
  };
  return (
    <div className="mt-7 rounded shadow-2xl pt-10 pl-6">
      <div className="flex justify-between p-2">
        <h2 className="text-[1.25rem]">Customers</h2>
        <div>
          <div>
            <button
              onClick={handleButtonClick}
              className="h-10 bg-[#006666] text-white flex justify-center items-center px-6 py-4 rounded-lg"
            >
              <MdAddCircleOutline size={20} />
              <span className="text-[0.90rem] font-semibold ml-2">
                Add New Customer
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end mb-4 mt-2 p-2">
        <input
          type="text"
          className="border border-gray-300 rounded-sm p-2 focus:border-blue-600 focus:ring-0 focus:outline-none"
          placeholder="Search..."
          onChange={handleChange}
        />
      </div>
      <DataTable
        columns={columns}
        data={records}
        customStyles={customStyles}
        pagination
      />
    </div>
  );
};
export default AddCustomer;
