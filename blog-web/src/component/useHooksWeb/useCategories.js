import axios from "axios";
import { useEffect, useState } from "react";

export function useCategories(searchedQuery) {
  const [list, setList] = useState([]);

  function loadCategories(query = "") {
    const token = localStorage.getItem("loginToken");
    axios
      .get(`${process.env.REACT_APP_API_URL}/categories?q=${query}`)
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          setList(data);
        } else {
          alert(`Aldaa garlaa: ${status}`);
        }
      });
  }

  useEffect(() => {
    loadCategories(searchedQuery);
  }, [searchedQuery]);

  return list;
}
