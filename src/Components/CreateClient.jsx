import React, { useState } from "react";
import { Link } from "react-router-dom";
import useApi from "./useApi";

const CreateClient = () => {
  const { data, loading, error, postData } = useApi('http://localhost:3010/api/client');
  const [clientData, setclientData] = useState({
    companyName: "",
    email: "",
    password: "",
    phoneNumber: "",
    establishedOn: "",
    registrationNo: "",
    website: "",
    address1: "",
    address2: "",
    zip: "",
    state: "",
    city: "",
    country: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    setclientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!clientData.companyName) newErrors.companyName = "Company Name is required";
    if (!clientData.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(clientData.email)) newErrors.email = "Email is invalid";
    if (!clientData.password) newErrors.password = "Password is required";
    if (!clientData.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
    if (!clientData.establishedOn) newErrors.establishedOn = "Established Date is required";
    if (!clientData.registrationNo) newErrors.registrationNo = "Registration No is required";
    if (!clientData.address1) newErrors.address1 = "Address 1 is required";
    if (!clientData.zip) newErrors.zip = "Zip Code is required";
    if (!clientData.state) newErrors.state = "State is required";
    if (!clientData.city) newErrors.city = "City is required";
    if (!clientData.country) newErrors.country = "Country is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitClients = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data:", clientData);

      try {
        const response = await postData(clientData);

        if (response.ok) {
          const result = await response.json();
          console.log("Data posted successfully:", result);
        } else {
            console.error("Error posting data:", response.statusText);
          }
        } catch (error) {
          console.error("Error:", error);
        }
  
          // Reset form data
          setclientData({
            companyName: "",
            email: "",
            password: "",
            phoneNumber: "",
            establishedOn: "",
            registrationNo: "",
            website: "",
            address1: "",
            address2: "",
            zip: "",
            state: "",
            city: "",
            country: "",
          });

          setErrors({});
        } else {
       
    
   
    }
  };

  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <Link to="/ListClients">
                    <button
                      type="button"
                      className="btn btn-success waves-effect waves-light mb-3"
                    >
                      <i className="mdi mdi-plus me-1"></i> View Clients
                    </button>
                  </Link>
                  <h4 className="mb-0">Create A New Client</h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body">
                    <form onSubmit={handleSubmitClients}>
                      <div className="row">
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="col-form-label">Company Name</label>
                            <input
                              type="text"
                              name="companyName"
                              placeholder="Company Name"
                              value={clientData.companyName}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                            {errors.companyName && <p style={{ color: "red" }}>{errors.companyName}</p>}
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="col-form-label">Email</label>
                            <input
                              type="email"
                              name="email"
                              placeholder="Email"
                              value={clientData.email}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="col-form-label">Password</label>
                            <input
                              type="password"
                              name="password"
                              placeholder="Password"
                              value={clientData.password}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="col-form-label">Phone Number</label>
                            <input
                              type="tel"
                              name="phoneNumber"
                              placeholder="Phone Number"
                              value={clientData.phoneNumber}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                            {errors.phoneNumber && <p style={{ color: "red" }}>{errors.phoneNumber}</p>}
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="col-form-label">Established On</label>
                            <input
                              type="date"
                              name="establishedOn"
                              placeholder="Established On"
                              value={clientData.establishedOn}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                            {errors.establishedOn && <p style={{ color: "red" }}>{errors.establishedOn}</p>}
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="col-form-label">Registration No</label>
                            <input
                              type="text"
                              name="registrationNo"
                              placeholder="Registration No"
                              value={clientData.registrationNo}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                            {errors.registrationNo && <p style={{ color: "red" }}>{errors.registrationNo}</p>}
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="col-form-label">Address 1</label>
                            <input
                              type="text"
                              name="address1"
                              placeholder="Address 1"
                              value={clientData.address1}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                            {errors.address1 && <p style={{ color: "red" }}>{errors.address1}</p>}
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="col-form-label">Address 2</label>
                            <input
                              type="text"
                              name="address2"
                              placeholder="Address 2"
                              value={clientData.address2}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                            {errors.address2 && <p style={{ color: "red" }}>{errors.address2}</p>}
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="col-form-label">Zip Code</label>
                            <input
                              type="text"
                              name="zip"
                              placeholder="Zip Code"
                              value={clientData.zip}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                            {errors.zip && <p style={{ color: "red" }}>{errors.zip}</p>}
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="col-form-label">State</label>
                            <input
                              type="text"
                              name="state"
                              placeholder="State"
                              value={clientData.state}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                            {errors.state && <p style={{ color: "red" }}>{errors.state}</p>}
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="col-form-label">City</label>
                            <input
                              type="text"
                              name="city"
                              placeholder="City"
                              value={clientData.city}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                            {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="col-form-label">Country</label>
                            <input
                              type="text"
                              name="country"
                              placeholder="Country"
                              value={clientData.country}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                            {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
                          </div>
                        </div>

                        <div className="d-flex flex-wrap gap-3 mt-3">
                        <button type="submit" className="btn btn-primary waves-effect waves-light w-md">
                          Submit
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setclientData({
                                companyName: "",
                                email: "",
                                password: "",
                                phoneNumber: "",
                                establishedOn: "",
                                registrationNo: "",
                                website: "",
                                address1: "",
                                address2: "",
                                zip: "",
                                state: "",
                                city: "",
                                country: "",
                          })  
                          setErrors({});}}
                         className="btn btn-outline-danger waves-effect waves-light w-md" 
                        >
                          Reset
                        </button>
                      </div>
                      </div>
                    </form>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error.message}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateClient;
