import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import useApi from './useApi';
const ListTruck = () => {
  const { data: data, loading, error, deleteData } = useApi('http://localhost:3010/api/trucks');
  const [deleted, setDeleted] = useState(false);
  

  
  useEffect(() => {
    if (deleted) {
      setDeleted(false);
    }
  }, [deleted]);

  const handleDelete = (id) => {
    
    deleteData(id);
    setDeleted(true); 
  };


  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">List Of Trucks</h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div>
                      <Link to="/CreateTruck">
                        <button
                          type="button"
                          className="btn btn-success waves-effect waves-light mb-3"
                        >
                          <i className="mdi mdi-plus me-1"></i> Add New Truck
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
                            <th>Truck Name</th>
                            <th>Truck Number</th>
                            <th>Driver</th>
                            <th>Update/Read/Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            data.map((truck, index) => (
                              <tr key={truck.id}>
                                <td>{index + 1}</td>
                                <td>{truck.truckName}</td>
                                <td>{truck.truckNo}</td>
                                <td>{truck.driver}</td>
                                <td>
                                  <Link
                                    to={`/EditTruck/${truck.id}`}
                                    className="px-3 text-primary"
                                  >
                                    <i className="fas fa-edit"></i>
                                  </Link>
                                  <Link
                                    to={`/readTruck/${truck.id}`}
                                    className="px-3 text-primary"
                                  >
                                    <i className="fas fa-edit"></i>
                                  </Link>
                                  <button
                                    onClick={() => handleDelete(truck.id)}
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
                        <ToastContainer />
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

export default ListTruck;
