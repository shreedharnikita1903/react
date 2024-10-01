import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const EditDriver = () => {
  const { id } = useParams(); // Get driver ID from the route parameters
  const navigate = useNavigate();

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

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchDriver = async () => {
      try {
        const res = await axios.get(`http://localhost:3010/api/drivers/${id}`);
        setDriverData(res.data);  
        setLoading(false);
      } catch (err) {
        setError("Error fetching driver data");
        setLoading(false);
      }
    };

    fetchDriver();
  }, [id]);

  const handleChange = (e) => {
    setDriverData({ ...driverData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3010/api/drivers/${id}`, driverData);
      console.log("Driver updated successfully");
      navigate("/listDriver"); // Redirect to the driver list page
    } catch (err) {
      setError("Error updating driver data");
    }
  };

  if (loading) {
    return <p>Loading driver details...</p>;
  }

  if (error) {
    return <p>{error}</p>; 
  }

  const { 
    firstName,
    lastName,
    email,
    phoneNumber,
    dateOfBirth,
    experience,
    license,
    address1,
    address2,
    zip,
    state,
    city,
    country,
  } = driverData; // Destructure driver data for easier access

  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Edit Driver</h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">
                              First Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="firstName"
                              name="firstName"
                              value={firstName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">
                              Last Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="lastName"
                              name="lastName"
                              value={lastName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              name="email"
                              value={email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="phoneNumber"
                              name="phoneNumber"
                              value={phoneNumber}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="dateOfBirth" className="form-label">
                              Date of Birth
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              id="dateOfBirth"
                              name="dateOfBirth"
                              value={dateOfBirth}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="experience" className="form-label">
                              Experience (years)
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="experience"
                              name="experience"
                              value={experience}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="license" className="form-label">
                              License
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="license"
                              name="license"
                              value={license}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="address1" className="form-label">
                              Address Line 1
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="address1"
                              name="address1"
                              value={address1}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="address2" className="form-label">
                              Address Line 2
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="address2"
                              name="address2"
                              value={address2}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="zip" className="form-label">
                              Zip Code
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="zip"
                              name="zip"
                              value={zip}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="state" className="form-label">
                              State
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="state"
                              name="state"
                              value={state}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="city" className="form-label">
                              City
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="city"
                              name="city"
                              value={city}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="country" className="form-label">
                              Country
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="country"
                              name="country"
                              value={country}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap gap-3 mt-3">
                        <button
                          type="submit"
                          className="btn btn-primary waves-effect waves-light w-md"
                        >
                          Submit
                        </button>
                        <Link to='/listDriver'>
                          <button
                            type="button"
                            className="btn btn-outline-danger waves-effect waves-light w-md"
                          >
                            Back
                          </button>
                        </Link>
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

export default EditDriver;
