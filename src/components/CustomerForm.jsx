import React from "react";
import { useFormik } from "formik";
import { validateSchema } from "../schemas";
import { useNavigate } from "react-router-dom";

const onSubmit = async (values, actions, navigate) => {
  const storedCustomers = JSON.parse(localStorage.getItem("customers")) || [];
  const updatedCustomers = [...storedCustomers, values];
  localStorage.setItem("customers", JSON.stringify(updatedCustomers));

  console.log(values);

  navigate("/customers");
};

const CustomerForm = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        type: "person",
        name: "",
        phone: "",
        email: "",
        sort: "",
        type1: "",
        add1: "",
        add2: "",
        city: "",
        state: "",
        country: "",
        postal: "",
        gst: "",
      },
      validationSchema: validateSchema,
      onSubmit: (values, actions) => onSubmit(values, actions, navigate),
    });

  return (
    <>
      <div className="shadow-lg rounded p-15">
        <h1 className="font-bold text-lg mb-3">Add New Customer</h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div className="sections flex">
              <div className="fields mr-6">
                <label
                  htmlFor="type"
                  className="block font-medium text-sm text-gray-700"
                >
                  Type:
                </label>
                <select
                  name="type"
                  id="type"
                  value={values.type}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="p-3 mt-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-0 w-full"
                >
                  <option value="person">Person</option>
                  <option value="company">Company</option>
                </select>
              </div>

              <div className="fields">
                <label
                  htmlFor="name"
                  className="block font-medium text-sm text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`border border-gray-300 mt-2 p-2 rounded-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-0  ${
                    errors.name ? "border border-red-500" : ""
                  }`}
                />
                {errors.name && touched.name && (
                  <p className="text-red-500">{errors.name}</p>
                )}
              </div>
            </div>
            <div className="sections flex">
              <div className="fields mr-6 w-full">
                <label htmlFor="phone" className="block">
                  Phone
                </label>
                <input
                  id="phone"
                  type="text"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`border border-gray-300 mt-2 p-2 rounded-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-0 w-full ${
                    errors.phone ? "border border-red-500" : ""
                  }`}
                />
                {errors.phone && touched.phone && (
                  <p className="text-red-500">{errors.phone}</p>
                )}
              </div>

              <div className="fields w-full">
                <label htmlFor="email" className="block">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`border border-gray-300 mt-2 p-2 rounded-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-0 w-full ${
                    errors.email ? "border border-red-500" : ""
                  }`}
                />
                {errors.email && touched.email && (
                  <p className="text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="sections">
              <div className="fields w-full">
                <label htmlFor="sort" className="block">
                  Sort Order
                </label>
                <input
                  id="sort"
                  type="number"
                  value={values.sort}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`border border-gray-300 mt-2 p-2 rounded-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-0 w-full`}
                />
              </div>
            </div>
            <div className="address space-y-5 p-5 shadow-lg w-full">
              <h3 className="mb-8 font-bold">Address 1</h3>
              <div className="sections flex">
                <div className="fields mr-6 w-full">
                  <label htmlFor="type1" className="block">
                    Type:
                  </label>
                  <select
                    name="type1"
                    id="type1"
                    value={values.type1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`p-2 mt-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-0 w-full`}
                  >
                    <option value="billing-delivery">Billing & Delivery</option>
                    <option value="billing">Billing</option>
                    <option value="delivery">Delivery</option>
                  </select>
                </div>

                <div className="fields w-full">
                  <label htmlFor="add1" className="block">
                    Address Line 1
                  </label>
                  <input
                    id="add1"
                    type="text"
                    value={values.add1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`border border-gray-300 mt-2 p-2 rounded-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-0 w-full ${
                      errors.add1 ? "border border-red-500" : ""
                    }`}
                  />
                  {errors.add1 && touched.add1 && (
                    <p className="text-red-500">{errors.add1}</p>
                  )}
                </div>
              </div>

              <div className="sections flex">
                <div className="fields mr-6 w-full">
                  <label htmlFor="add2" className="block">
                    Address Line 2
                  </label>
                  <input
                    id="add2"
                    type="text"
                    value={values.add2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`border border-gray-300 mt-2 p-2 rounded-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-0 w-full`}
                  />
                  {/* {errors.add2 && touched.add2 && (
                    <p className="text-red-500">{errors.add2}</p>
                  )} */}
                </div>
                <div className="fields w-full">
                  <label htmlFor="city" className="block">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`border border-gray-300 mt-2 p-2 rounded-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-0 w-full ${
                      errors.city ? "border border-red-500" : ""
                    }`}
                  />
                  {errors.city && touched.city && (
                    <p className="text-red-500">{errors.city}</p>
                  )}
                </div>
              </div>

              <div className="sections flex">
                <div className="fields mr-6 w-full">
                  <label htmlFor="state" className="block">
                    State
                  </label>
                  <select
                    name="state"
                    id="state"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`p-2 mt-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-0 w-full ${
                      errors.city ? "border border-red-500" : ""
                    }`}
                  >
                    <option value="tamilnadu">Tamilnadu</option>
                    <option value="kerala">Kerala</option>
                    <option value="delhi">Delhi</option>
                  </select>
                </div>

                <div className="fields w-full">
                  <label htmlFor="country" className="block">
                    Country
                  </label>
                  <input
                    id="country"
                    type="text"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`border border-gray-300 mt-2 p-2 rounded-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-0 w-full ${
                      errors.country ? "border border-red-500" : ""
                    }`}
                  />
                  {errors.country && touched.country && (
                    <p className="text-red-500">{errors.country}</p>
                  )}
                </div>
              </div>

              <div className="sections flex">
                <div className="fields mr-6 w-full">
                  <label htmlFor="postal" className="block">
                    Postal Code
                  </label>
                  <input
                    id="postal"
                    type="text"
                    value={values.postal}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`border border-gray-300 mt-2 p-2 rounded-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-0 w-full ${
                      errors.postal ? "border border-red-500" : ""
                    }`}
                  />
                  {errors.postal && touched.postal && (
                    <p className="text-red-500">{errors.postal}</p>
                  )}
                </div>
                <div className="fields w-full">
                  <label htmlFor="gst" className="block">
                    GST No.
                  </label>
                  <input
                    id="gst"
                    type="text"
                    value={values.gst}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`border border-gray-300 mt-2 p-2 rounded-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-0 w-full ${
                      errors.gst ? "border border-red-500" : ""
                    }`}
                  />
                  {errors.gst && touched.gst && (
                    <p className="text-red-500">{errors.gst}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end items-center">
              <button
                type="submit"
                className="h-9 bg-[#006666] text-white flex items-center px-6 py-4 rounded-lg font-semibold"
              >
                Create Customer
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default CustomerForm;
