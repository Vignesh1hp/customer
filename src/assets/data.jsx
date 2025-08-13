import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const customers = JSON.parse(localStorage.getItem("customers")) || [];
export const data = [
  {
    name: "vicky",
    type: "person",
    email: "vicky@gmail.com",
    phone: "1234567890",
    action: (
      <div className="flex justify-evenly items-center w-full text-2xl ">
        <a href="#" className="mr-4">
          <FaEye />
        </a>
        <a href="#" className="mr-4">
          <FaEdit />
        </a>
        <a href="#">
          <MdDelete />
        </a>
      </div>
    ),
  },
  {
    name: "vicky",
    type: "person",
    email: "vicky@gmail.com",
    phone: "1234567890",
    action: (
      <div className="flex justify-evenly items-center w-full text-2xl ">
        <a href="#" className="mr-4">
          <FaEye />
        </a>
        <a href="#" className="mr-4">
          <FaEdit />
        </a>
        <a href="#">
          <MdDelete />
        </a>
      </div>
    ),
  },
  {
    name: "vicky",
    type: "person",
    email: "vicky@gmail.com",
    phone: "1234567890",
    action: (
      <div className="flex justify-evenly items-center w-full text-2xl ">
        <a href="#" className="mr-4">
          <FaEye />
        </a>
        <a href="#" className="mr-4">
          <FaEdit />
        </a>
        <a href="#">
          <MdDelete />
        </a>
      </div>
    ),
  },
  {
    name: "vicky",
    type: "person",
    email: "vicky@gmail.com",
    phone: "1234567890",
    action: (
      <div className="flex justify-evenly items-center w-full text-2xl ">
        <a href="#" className="mr-4">
          <FaEye />
        </a>
        <a href="#" className="mr-4">
          <FaEdit />
        </a>
        <a href="#">
          <MdDelete />
        </a>
      </div>
    ),
  },
  {
    name: "vicky",
    type: "person",
    email: "vicky@gmail.com",
    phone: "1234567890",
    action: (
      <div className="flex justify-evenly items-center w-full text-2xl ">
        <a href="#" className="mr-4">
          <FaEye />
        </a>
        <a href="#" className="mr-4">
          <FaEdit />
        </a>
        <a href="#">
          <MdDelete />
        </a>
      </div>
    ),
  },
  {
    name: "vicky",
    type: "person",
    email: "vicky@gmail.com",
    phone: "1234567890",
    action: (
      <div className="flex justify-evenly items-center w-full text-2xl ">
        <a href="#" className="mr-4">
          <FaEye />
        </a>
        <a href="#" className="mr-4">
          <FaEdit />
        </a>
        <a href="#">
          <MdDelete />
        </a>
      </div>
    ),
  },
  {
    name: "vicky",
    type: "person",
    email: "vicky@gmail.com",
    phone: "1234567890",
    action: (
      <div className="flex justify-evenly items-center w-full text-2xl ">
        <a href="#" className="mr-4">
          <FaEye />
        </a>
        <a href="#" className="mr-4">
          <FaEdit />
        </a>
        <a href="#">
          <MdDelete />
        </a>
      </div>
    ),
  },
  {
    name: "vicky",
    type: "person",
    email: "vicky@gmail.com",
    phone: "1234567890",
    action: (
      <div className="flex justify-evenly items-center w-full text-2xl ">
        <a href="#" className="mr-4">
          <FaEye />
        </a>
        <a href="#" className="mr-4">
          <FaEdit />
        </a>
        <a href="#">
          <MdDelete />
        </a>
      </div>
    ),
  },
  {
    name: "vicky",
    type: "person",
    email: "vicky@gmail.com",
    phone: "1234567890",
    action: (
      <div className="flex justify-evenly items-center w-full text-2xl ">
        <a href="#" className="mr-4">
          <FaEye />
        </a>
        <a href="#" className="mr-4">
          <FaEdit />
        </a>
        <a href="#">
          <MdDelete />
        </a>
      </div>
    ),
  },
  {
    name: "sudhan",
    type: "person",
    email: "vicky@gmail.com",
    phone: "1234567890",
    action: (
      <div className="flex justify-evenly items-center w-full text-2xl ">
        <a href="#" className="mr-4">
          <FaEye />
        </a>
        <a href="#" className="mr-4">
          <FaEdit />
        </a>
        <a href="#">
          <MdDelete />
        </a>
      </div>
    ),
  },
  {
    name: "abi",
    type: "person",
    email: "vicky@gmail.com",
    phone: "1234567890",
    action: (
      <div className="flex justify-evenly items-center w-full text-2xl ">
        <a href="#" className="mr-4">
          <FaEye />
        </a>
        <a href="#" className="mr-4">
          <FaEdit />
        </a>
        <a href="#">
          <MdDelete />
        </a>
      </div>
    ),
  },
  {
    name: "vicky",
    type: "person",
    email: "vicky@gmail.com",
    phone: "1234567890",
    action: (
      <div className="flex justify-evenly items-center w-full text-2xl">
        <a href="#" className="mr-4">
          <FaEye />
        </a>
        <a href="#" className="mr-4">
          <FaEdit />
        </a>
        <a href="#">
          <MdDelete />
        </a>
      </div>
    ),
  },
  {
    name: "john",
    type: "person",
    email: "vicky@gmail.com",
    phone: "1234567890",
    action: (
      <div className="flex justify-evenly items-center w-full text-2xl ">
        <a href="#" className="mr-4">
          <FaEye />
        </a>
        <a href="#" className="mr-4">
          <FaEdit />
        </a>
        <a href="#">
          <MdDelete />
        </a>
      </div>
    ),
  },
];

{
  customers.length > 0 ? (
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
  );
}
