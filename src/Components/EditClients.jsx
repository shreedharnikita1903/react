import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const EditClients = () => {
  const { id } = useParams(); // Get client ID from the route parameters
  const navigate = useNavigate();

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

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchclient = async () => {
      try {
        const res = await axios.get(`http://localhost:3010/api/clients/${id}`);
        setclientData(res.data);  
        setLoading(false);
      } catch (err) {
        setError("Error fetching client data");
        setLoading(false);
      }
    };

    fetchclient();
  }, [id]);

  const handleChange = (e) => {
    setclientData({ ...clientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3010/api/clients/${id}`, clientData);
      console.log("client updated successfully");
      navigate("/ListClients"); // Redirect to the client list page
    } catch (err) {
      setError("Error updating client data");
    }
  };

  if (loading) {
    return <p>Loading client details...</p>;
  }

  if (error) {
    return <p>{error}</p>; 
  }

  const { 
    companyName,
    email,
    password,
    phoneNumber,
    establishedOn,
    registrationNo,
    website,
    address1,
    address2,
    zip,
    state,
    city,
    country,
  } = clientData; // Destructure client data for easier access

  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Edit client</h4>
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
                            <label htmlFor="companyName" className="form-label">
                            company Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="companyName"
                              name="companyName"
                              value={companyName}
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
                            <label htmlFor="establishedOn" className="form-label">
                            establishedOn
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              id="establishedOn"
                              name="establishedOn"
                              value={establishedOn}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                       
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="registrationNo" className="form-label">
                            registrationNo
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="registrationNo"
                              name="registrationNo"
                              value={registrationNo}
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
                        <Link to='/listclient'>
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

export default EditClients;
