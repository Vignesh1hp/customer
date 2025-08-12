import React from "react";
import "./CustomerForm.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const CustomerForm = () => {
  const {values,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues: {
      type: "",
      name: "",
      phone: "",
      email: "",
      sort: "",
      type1: "",
      add1: "",
      add2:"",
      city: "",
      state:"",
      country:"",
      postal:"",
      gst:""
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // console.log(formik);

  return (
    <>
      <div className="form-wrapper">
        <h2>Add New Customer</h2>
        <form onSubmit={handleSubmit}>
          <div className="section-wrapper">
            <div className="sections">
              <div className="fields">
                <label htmlFor="type">Type:</label>
                <select
                  name="type"
                  id="type"
                  value={values.type}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Select Type</option>
                  <option value="person">Person</option>
                  <option value="company">Company</option>
                </select>
              </div>

              <div className="fields">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="sections">
              <div className="fields">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="text"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div className="fields">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <div className="sections">
              <div className="fields">
                <label htmlFor="sort">Sort Order</label>
                <input
                  id="sort"
                  type="text"
                  value={values.sort}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="address">
              <h3>Address 1</h3>
              <div className="sections">
                {/* <div className="sections"> */}
                <div className="fields">
                  <label htmlFor="type1">Type:</label>
                  <select
                    name="type1"
                    id="type1"
                    value={values.type1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Select Type</option>
                    <option value="billing-delivery">Billing & Delivery</option>
                    <option value="billing">Billing</option>
                    <option value="delivery">Delivery</option>
                  </select>
                </div>

                <div className="fields">
                  <label htmlFor="add1">Address Line 1</label>
                  <input
                    id="add1"
                    type="text"
                    value={values.add1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div className="sections">
                <div className="fields">
                  <label htmlFor="add2">Address Line 2</label>
                  <input
                    id="add2"
                    type="text"
                    value={values.add2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="fields">
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    type="text"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div className="sections">
               
                <div className="fields">
                  <label htmlFor="state">State</label>
                  <select
                    name="state"
                    id="state"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Select State</option>
                    <option value="tamilnadu">Tamilnadu</option>
                    <option value="kerala">Kerala</option>
                    <option value="delhi">Delhi</option>
                  </select>
                </div>

                <div className="fields">
                  <label htmlFor="country">Country</label>
                  <input
                    id="country"
                    type="text"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div className="sections">
                <div className="fields">
                  <label htmlFor="postal">Postal Code</label>
                  <input
                    id="postal"
                    type="text"
                    value={values.postal}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="fields">
                  <label htmlFor="gst">GST No.</label>
                  <input
                    id="gst"
                    type="text"
                    value={values.gst}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
            </div>
            <button type="submit">Create Customer</button>
          </div>
          
        </form>
      </div>
    </>
  );
};
export default CustomerForm;
