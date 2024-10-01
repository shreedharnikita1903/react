import React, { useState } from "react";
import { Link } from "react-router-dom";
import useApi from "./useApi";
const CreateDriver = () => {
  const { data, loading, error, postData, deleteData } = useApi('http://localhost:3010/api/drivers');
  const [driverData, setDriverData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    dateOfBirth: "",
    experience: 0,
    license: "",
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

    setDriverData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleExperienceChange = (change) => {
    setDriverData((prevState) => ({
      ...prevState,
      experience: Math.max(0, prevState.experience + change),
    }));

    if (errors.experience && driverData.experience > 0) {
      setErrors((prevErrors) => ({ ...prevErrors, experience: "" }));
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Basic validation for required fields
    if (!driverData.firstName) newErrors.firstName = "First Name is required";
    if (!driverData.lastName) newErrors.lastName = "Last Name is required";
    if (!driverData.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(driverData.email)) newErrors.email = "Email is invalid";
    if (!driverData.password) newErrors.password = "Password is required";
    if (!driverData.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
    if (!driverData.dateOfBirth) newErrors.dateOfBirth = "Date of Birth is required";
    if (driverData.experience < 0) newErrors.experience = "Experience must be non-negative"; // Changed error message
    if (!driverData.license) newErrors.license = "License Number is required";
    if (!driverData.address1) newErrors.address1 = "Address 1 is required";
    if (!driverData.address2) newErrors.address2 = "Address 2 is required";
    if (!driverData.zip) newErrors.zip = "Zip Code is required";
    if (!driverData.state) newErrors.state = "State is required";
    if (!driverData.city) newErrors.city = "City is required";
    if (!driverData.country) newErrors.country = "Country is required";

    setErrors(newErrors);

    // Returns true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitDriver = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data:", driverData); // Log form data

      try {
        const response = await postData(driverData)
       
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
          setDriverData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phoneNumber: "",
            dateOfBirth: "",
            experience: 0,
            license: "",
            address1: "",
            address2: "",
            zip: "",
            state: "",
            city: "",
            country: "",
          });

       
          setErrors({});
        } else {
          
        
          console.log("Validation failed");
    
     
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
                <Link to="/ListDriver">
                    <button
                      type="button"
                      className="btn btn-success waves-effect waves-light mb-3"
                    >
                      <i className="mdi mdi-plus me-1"></i> Views Drivers
                    </button>
                  </Link>
                  <h4 className="mb-0">Create A New Driver</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body">
                    <form onSubmit={handleSubmitDriver}>
                      <div className="row">
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="col-form-label">First Name</label>
                            <input
                              type="text"
                              name="firstName"
                              placeholder="First Name"
                              value={driverData.firstName}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                            {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="col-form-label">Last Name</label>
                            <input
                              type="text"
                              name="lastName"
                              placeholder="Last Name"
                              value={driverData.lastName}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                            {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="col-form-label">Email</label>
                            <input
                              type="email"
                              name="email"
                              placeholder="Email"
                              value={driverData.email}
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
                              value={driverData.password}
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
                              value={driverData.phoneNumber}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                            {errors.phoneNumber && <p style={{ color: "red" }}>{errors.phoneNumber}</p>}
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="col-form-label">Date Of Birth</label>
                            <input
                              type="date"
                              name="dateOfBirth"
                              value={driverData.dateOfBirth}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                            {errors.dateOfBirth && <p style={{ color: "red" }}>{errors.dateOfBirth}</p>}
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="col-md-12 col-form-label">Years Of Experience</label>
                            <div className="col-md-12">
                              <button
                                type="button"
                                onClick={() => handleExperienceChange(-1)}
                                className="btn btn-success waves-effect waves-light mb-3"
                              >
                                <i className="mdi mdi-minus me-1"></i>
                              </button>

                              <span style={{ padding: "10px" }}>{driverData.experience}</span>

                              <button
                                type="button"
                                onClick={() => handleExperienceChange(1)}
                                className="btn btn-success waves-effect waves-light mb-3"
                              >
                                <i className="mdi mdi-plus me-1"></i>
                              </button>
                              <div>
                                {errors.experience && <p style={{ color: "red" }}>{errors.experience}</p>}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="col-form-label">License Number</label>
                            <input
                              type="text"
                              name="license"
                              placeholder="License Number"
                              value={driverData.license}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                            {errors.license && <p style={{ color: "red" }}>{errors.license}</p>}
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="col-form-label">Address 1</label>
                            <input
                              type="text"
                              name="address1"
                              placeholder="Address 1"
                              value={driverData.address1}
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
                              value={driverData.address2}
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
                              value={driverData.zip}
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
                              value={driverData.state}
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
                              value={driverData.city}
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
                              value={driverData.country}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                            {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
                          </div>
                        </div>
                      </div>

                      <div className="d-flex flex-wrap gap-3 mt-3">
                        <button type="submit" className="btn btn-primary waves-effect waves-light w-md">
                          Submit
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setDriverData({
                            firstName: "",
                            lastName: "",
                            email: "",
                            password: "",
                            phoneNumber: "",
                            dateOfBirth: "",
                            experience: 0,
                            license: "",
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
                    </form>
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

export default CreateDriver;
