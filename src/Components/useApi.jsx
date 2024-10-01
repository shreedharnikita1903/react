import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url) => {
//   const [data, setData] = useState(null);
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
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete data
  const deleteData = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      setData((prevData) => prevData.filter((item) => item.id !== id)); // Remove item from state
    } catch (err) {
      setError(err.message);
    }
  };

  return { data, loading, error, postData, deleteData };
};

export default useApi;
