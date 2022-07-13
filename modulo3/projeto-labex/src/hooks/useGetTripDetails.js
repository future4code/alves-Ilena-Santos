import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/BASE_URL";
import {useProtectedPage} from "../hooks/useProtectedPage"

export function useGetTripDetails(path) {
   useProtectedPage()
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();


    useEffect(() => {
      setLoading(true);
      const token = localStorage.getItem("token")
      const id = localStorage.getItem("id")
      axios
        .get(`${BASE_URL}${path}`, 
            {headers: {
                auth: token
            }}
        )
        .then((res) => {
            console.log("deu bom",res.data)
          setLoading(false);
          setData(res.data);
        })
        .catch((err) => {
          console.log("deu ruim",err.response);
          setLoading(false);
          setError(err.response.data);
        });
    }, [path]);
    return { data, loading, error };
  }