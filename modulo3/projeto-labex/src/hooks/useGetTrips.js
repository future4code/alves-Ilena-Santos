import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/BASE_URL";


export function useGetTrips(path) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    useEffect(() => {
      setLoading(true);
      axios
        .get(`${BASE_URL}${path}`)
        .then((res) => {
          setLoading(false);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err.response);
          setLoading(false);
          setError(err.response.data);
        });
    }, [path]);
    return { data, loading, error };
  }