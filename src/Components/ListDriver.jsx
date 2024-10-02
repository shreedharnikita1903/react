import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import useApi from './useApi';
const ListDriver = () => {
  const { data: data, loading, error, deleteData } = useApi('http://localhost:3010/api/drivers');
 
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
                            <th>Update/Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            data.map((driver, index) => (
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

export default ListDriver;
