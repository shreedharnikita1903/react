import React, { useState } from "react";
import { Link } from "react-router-dom";
import useApi from './useApi';

const CreateTruck = () => {
  const { data, loading, error, postData, deleteData } = useApi('http://localhost:3010/api/trucks');

  const [formData, setFormData] = useState({
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
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCapacityChange = (change) => {
    setFormData((prevState) => ({
      ...prevState,
      capacity: Math.max(0, prevState.capacity + change),
    }));
    if (errors.capacity && formData.capacity > 0) {
      setErrors((prevErrors) => ({ ...prevErrors, capacity: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Truck name validation - should not contain numbers
    const truckNameRegex = /^[a-zA-Z\s]+$/;
    if (!formData.truckName) {
      newErrors.truckName = "Truck Name is required";
    } else if (!truckNameRegex.test(formData.truckName)) {
      newErrors.truckName = "Truck Name should not contain numbers";
    }

    // Truck number validation - should only contain numbers or specific characters
    const truckNoRegex = /^[0-9-]+$/;
    if (!formData.truckNo) {
      newErrors.truckNo = "Truck No is required";
    } else if (!truckNoRegex.test(formData.truckNo)) {
      newErrors.truckNo = "Truck No should only contain numbers and hyphens";
    }

    if (!formData.truckColor) newErrors.truckColor = "Truck Color is required";
    if (!formData.truckCondition) newErrors.truckCondition = "Truck Condition is required";
    if (!formData.haulableMaterial) newErrors.haulableMaterial = "Haulable Material is required";
    if (!formData.ownership) newErrors.ownership = "Ownership is required";
    if (!formData.vehicleType) newErrors.vehicleType = "Vehicle Type is required";
    if (!formData.purchaseDate) newErrors.purchaseDate = "Purchase Date is required";
    if (!formData.driver) newErrors.driver = "Driver selection is required";
    if (formData.capacity <= 0) newErrors.capacity = "Capacity must be greater than 0";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data:", formData);

      try {
        const response = await postData(formData); // Utilizing the postData from useApi hook
        if (response.ok) {
          const result = await response.json();
          console.log("Data posted successfully:", result);
        } else {
          console.error("Error posting data:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }

      // Reset form after successful submission
      setFormData({
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
                  <Link to="/ListTruck">
                    <button
                      type="button"
                      className="btn btn-success waves-effect waves-light mb-3"
                    >
                      <i className="mdi mdi-plus me-1"></i> Views Truck
                    </button>
                  </Link>
                 
                  <h4 className="mb-0">Creat A New Truck</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="col-md-12 col-form-label">
                              Truck Name
                            </label>
                            <input
                              type="text"
                              name="truckName"
                              value={formData.truckName}
                              onChange={handleInputChange}
                              className="form-control"
                              placeholder="Name "
                            />
                            {errors.truckName && (
                              <p style={{ color: "red" }}>{errors.truckName}</p>
                            )}
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="col-md-12 col-form-label">
                              Truck No
                            </label>
                            <input
                              type="text"
                              name="truckNo"
                              value={formData.truckNo}
                              onChange={handleInputChange}
                              className="form-control"
                              placeholder="Truck Number"
                            />
                            {errors.truckNo && (
                              <p style={{ color: "red" }}>{errors.truckNo}</p>
                            )}
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label
                              className="col-md-12 col-form-label"
                              for="formrow-memberid-input"
                            >
                              Purchased On
                            </label>
                            <input
                              type="date"
                              name="purchaseDate"
                              value={formData.purchaseDate}
                              onChange={handleInputChange}
                              className="form-control"
                              id="formrow-chapterid-input"
                            />
                            {errors.purchaseDate && (
                              <p style={{ color: "red" }}>
                                {errors.purchaseDate}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label
                              className="col-md-12 col-form-label"
                              for="formrow-memberid-input"
                            >
                              Driver
                            </label>
                            <div className="col-md-12">
                              <select
                                className="form-select"
                                id="Driver"
                                name="driver"
                                value={formData.driver}
                                onChange={handleInputChange}
                              >
                                <option value="" disabled selected>
                                  Select driver
                                </option>

                                <option value="Driver 1">Driver 1</option>
                                <option value="Driver 2">Driver 2</option>
                              </select>
                              {errors.driver && (
                                <p style={{ color: "red" }}>{errors.driver}</p>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label
                              className="col-md-12 col-form-label"
                              for="formrow-memberid-input"
                            >
                              Vehicle Type
                            </label>
                            <div className="col-md-12">
                              <select
                                className="form-select"
                                id="vehicleType"
                                name="vehicleType"
                                value={formData.vehicleType}
                                onChange={handleInputChange}
                              >
                                <option value=""disabled>Select Vehicle Type</option>
                                <option value="Truck">Truck</option>
                                <option value="Lorry">Lorry</option>
                              </select>
                              {errors.vehicleType && (
                                <p style={{ color: "red" }}>
                                  {errors.vehicleType}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label
                              className="col-md-12 col-form-label"
                              for="formrow-memberid-input"
                            >
                              Ownership
                            </label>
                            <div className="col-md-12">
                              <select
                                className="form-select"
                                id="ownership"
                                name="ownership"
                                value={formData.ownership}
                                onChange={handleInputChange}
                              >
                                <option value="" disabled selected>
                                  Select Ownership
                                </option>
                                <option value="Owned">Owned</option>
                                <option value="Leased">Leased</option>
                              </select>
                              {errors.ownership && (
                                <p style={{ color: "red" }}>
                                  {errors.ownership}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label
                              className="col-md-12 col-form-label"
                              for="formrow-memberid-input"
                            >
                              Truck Color
                            </label>
                            <div className="col-md-12">
                              <select
                                className="form-select"
                                id="truckColor"
                                name="truckColor"
                                value={formData.truckColor}
                                onChange={handleInputChange}
                              >
                                <option value=""disabled>Select Truck Color</option>
                                <option value="Red">Red</option>
                                <option value="Blue">Blue</option>
                                <option value="Green">Green</option>
                              </select>
                              {errors.truckColor && (
                                <p style={{ color: "red" }}>
                                  {errors.truckColor}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label
                              className="col-md-12 col-form-label"
                              for="formrow-memberid-input"
                            >
                              Truck Condition
                            </label>
                            <div className="col-md-12">
                              <select
                                className="form-select"
                                id="truckCondition"
                                name="truckCondition"
                                value={formData.truckCondition}
                                onChange={handleInputChange}
                              >
                                <option value=""disabled>Select Condition</option>
                                <option value="New">New</option>
                                <option value="Used">Used</option>
                              </select>
                              {errors.truckCondition && (
                                <p style={{ color: "red" }}>
                                  {errors.truckCondition}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label
                              className="col-md-12 col-form-label"
                              for="formrow-memberid-input"
                            >
                              Haulable Material
                            </label>
                            <div className="col-md-12">
                              <select
                                className="form-select"
                                id="haulableMaterial"
                                name="haulableMaterial"
                                value={formData.haulableMaterial}
                                onChange={handleInputChange}
                              >
                                <option value=""disabled>Select Material</option>
                                <option value="Gravel">Gravel</option>
                                <option value="Sand">Sand</option>
                                <option value="Bricks">Bricks</option>
                              </select>
                              {errors.ownership && (
                                <p style={{ color: "red" }}>
                                  {errors.ownership}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3">
                            <label
                              className="col-md-12 col-form-label"
                              for="formrow-memberid-input"
                            >
                              Capacity (tonnes)
                            </label>
                            <div className="col-md-12">
                              <button
                                type="button"
                                onClick={() => handleCapacityChange(-1)}
                                className="btn btn-success waves-effect waves-light mb-3"
                              >
                                <i className="mdi mdi-minus me-1"></i>{" "}
                              </button>

                              <span style={{ padding: "10px" }}>
                                {formData.capacity}
                              </span>

                              <button
                                type="button"
                                onClick={() => handleCapacityChange(1)}
                                className="btn btn-success waves-effect waves-light mb-3"
                              >
                                <i className="mdi mdi-plus me-1"></i>{" "}
                              </button>
                              <div></div>
                              <div>
                                {errors.capacity && (
                                  <p style={{ color: "red" }}>
                                    {errors.capacity}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
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
                        <button
                          type="button"
                          onClick={() => {
                            setFormData({
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
                            });
                            setErrors({});
                          }}
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

export default CreateTruck;
