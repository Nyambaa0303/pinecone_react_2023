import axios from "axios";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function useCategories() {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState("");
  const [searchedQuery] = useDebounce(query, 1000);

  function loadCategories(query = "") {
    axios.get(`http://localhost:4000/categories?q=${query}`).then((res) => {
      const { data, status } = res;

      if (status === 200) {
        setList(data);
        setQuery(query);
      } else {
        alert(`aldaa garlaa: ${status}`);
      }
    });
  }

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    loadCategories(searchedQuery);
  }, [searchedQuery]);

  return { list, searchedQuery, query, loadCategories, setQuery };
}
