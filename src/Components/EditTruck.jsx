import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EditTruck = () => {
  const { id } = useParams(); // Get truck ID from the route parameters
  const navigate = useNavigate();

  const [truckData, setTruckData] = useState({
    truckName: "",
    truckNo: "",
    truckColor: "",
    truckCondition: "",
    capacity: 0,
    haulableMaterial: "",
    ownership: "",
    vehicleType: "",
    purchaseDate: "",
    driver: "",
    createdAt: "",
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
  
    const fetchTruck = async () => {
      try {
        const res = await axios.get(`http://localhost:3010/api/trucks/${id}`);
        setTruckData(res.data);  
        setLoading(false);
      } catch (err) {
        setError("Error fetching truck data");
        setLoading(false);
      }
    };

    fetchTruck();
  }, [id]);

  const handleChange = (e) => {
    setTruckData({ ...truckData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3010/api/trucks/${id}`, truckData);
      console.log("Truck updated successfully");
      // navigate("/listTruck");
      toast.success("Data edited successfully!");
    } catch (err) {
      setError("Error updating truck data");
    }
  };

 
  if (loading) {
    return <p>Loading truck details...</p>;
  }

  if (error) {
    return <p>{error}</p>; 
  }

  const { truckName, truckNo, truckColor, truckCondition, capacity, haulableMaterial, ownership, vehicleType, purchaseDate, driver,createdAt } = truckData; // Destructure truck data for easier access

  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Edit Truck</h4>
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
                        <label htmlFor="truckName" className="form-label">
                          Truck Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="truckName"
                          name="truckName"
                          value={truckName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      </div>
                      <div className="col-md-3">
                      <div className="mb-3">
                        <label htmlFor="truckNo" className="form-label">
                          Truck Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="truckNo"
                          name="truckNo"
                          value={truckNo}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      </div>
                      <div className="col-md-3">
                      <div className="mb-3">
                        <label htmlFor="truckColor" className="form-label">
                          Truck Color
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="truckColor"
                          name="truckColor"
                          value={truckColor}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      </div>
                      <div className="col-md-3">
                      <div className="mb-3">
                        <label htmlFor="truckCondition" className="form-label">
                          Truck Condition
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="truckCondition"
                          name="truckCondition"
                          value={truckCondition}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      </div>
                      <div className="col-md-3">
                      <div className="mb-3">
                        <label htmlFor="capacity" className="form-label">
                          Capacity
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="capacity"
                          name="capacity"
                          value={capacity}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      </div>
                      <div className="col-md-3">
                      <div className="mb-3">
                        <label htmlFor="haulableMaterial" className="form-label">
                          Haulable Material
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="haulableMaterial"
                          name="haulableMaterial"
                          value={haulableMaterial}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      </div>
                      <div className="col-md-3">
                      <div className="mb-3">
                        <label htmlFor="ownership" className="form-label">
                          Ownership
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="ownership"
                          name="ownership"
                          value={ownership}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      </div>
                      <div className="col-md-3">
                      <div className="mb-3">
                        <label htmlFor="vehicleType" className="form-label">
                          Vehicle Type
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="vehicleType"
                          name="vehicleType"
                          value={vehicleType}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      </div>
                      <div className="col-md-3">
                      <div className="mb-3">
                        <label htmlFor="purchaseDate" className="form-label">
                          Purchase Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="purchaseDate"
                          name="purchaseDate"
                          value={purchaseDate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      </div>
                      <div className="col-md-3">
                      <div className="mb-3">
                        <label htmlFor="driver" className="form-label">
                          Driver
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="driver"
                          name="driver"
                          value={driver}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      </div>
                      <div className="col-md-3">
                      <div className="mb-3">
                        <label htmlFor="driver" className="form-label">
                        Created At
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="createdAt"
                          name="createdAt"
                          value={createdAt}
                          onChange={handleChange}
                         readOnly
                        />
                      </div>
                      </div>
                      <div className="d-flex flex-wrap gap-3 mt-3">
                          <button
                            type="submit"
                            name="update-member"
                            className="btn btn-primary waves-effect waves-light w-md"
                          >
                            Submit
                          </button>
                        <Link to='/ListTruck'> <button
                          type="button"
                          className="btn btn-outline-danger waves-effect waves-light w-md"
                        >
                         Back
                        </button></Link>
                        <ToastContainer />
                      </div>
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

export default EditTruck;
