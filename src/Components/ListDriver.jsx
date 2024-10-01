import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const ListDriver = () => {
  const [drivers, setDrivers] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const res = await axios.get('http://localhost:3010/api/drivers'); // Corrected URL
        setDrivers(res.data);
      } catch (err) {
        console.error(err.response ? err.response.data : err.message); // Detailed error logging
      }
    };

    fetchDrivers();
    
    if (deleted) {
      setDeleted(false);
    }
  }, [deleted]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3010/api/drivers/${id}`);
      setDeleted(true); 
    } catch (err) {
      console.error(err.response ? err.response.data : err.message); // Detailed error logging
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
                  <h4 className="mb-0">List Of Drivers</h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div>
                      <Link to="/CreateDriver">
                        <button
                          type="button"
                          className="btn btn-success waves-effect waves-light mb-3"
                        >
                          <i className="mdi mdi-plus me-1"></i> Add New Driver
                        </button>
                      </Link>
                    </div>

                    <div className="table-responsive mb-4">
                      <table
                        className="table table-centered table-striped datatable dt-responsive nowrap table-card-list"
                        style={{ borderCollapse: "collapse", width: "100%" }}
                      >
                        <thead>
                          <tr>
                            <th>SL No</th>
                            <th>Driver Name</th>
                            <th>Driver Number</th>
                            <th>Driver Email</th>
                            <th>Update/Read/Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            drivers.map((driver, index) => (
                              <tr key={driver.id}>
                                <td>{index + 1}</td>
                                <td>{driver.firstName}</td>
                                <td>{driver.lastName}</td> 
                                <td>{driver.email}</td>
                                <td>
                                  <Link
                                    to={`/Editdriver/${driver.id}`}
                                    className="px-3 text-primary"
                                  >
                                    <i className="fas fa-edit"></i>
                                  </Link>
                                  <Link
                                    to={`/readdrivers/${driver.id}`}
                                    className="px-3 text-primary"
                                  >
                                    <i className="fas fa-eye"></i>
                                  </Link>
                                  <button
                                    onClick={() => handleDelete(driver.id)}
                                    className="px-3 text-danger"
                                    style={{
                                      border: "none",
                                      background: "none",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <i className="fas fa-trash"></i>
                                  </button>
                                </td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
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

export default ListDriver;
