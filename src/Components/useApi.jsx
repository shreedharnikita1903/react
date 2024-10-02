import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';  // Import toast

const useApi = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
        setError(null); // Clear previous errors
      } catch (err) {
        setError(err.message);
        toast.error("Failed to fetch data: " + err.message);  // Display error toast
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  // Post data
  const postData = async (postData) => {
    try {
      const response = await axios.post(url, postData);
      setData((prevData) => [...prevData, response.data]); // Update the state with the new data
      toast.success("Data added successfully!");  // Success toast
    } catch (err) {
      setError(err.message);
      toast.error("Failed to add data: " + err.message);  // Error toast
    }
  };

  // Delete data
  const deleteData = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      setData((prevData) => prevData.filter((item) => item.id !== id)); // Remove item from state
      toast.success("Data deleted successfully!");  // Success toast
    } catch (err) {
      setError(err.message);
      toast.error("Failed to delete data: " + err.message);  // Error toast
    }
  };

  return { data, loading, error, postData, deleteData };
};

export default useApi;
