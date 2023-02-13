import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

export default function CategoriesSelector({ value, onChange }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/categories`).then((res) => {
      const { data, status } = res;

      if (status === 200) {
        setCategories(data);
      } else {
        alert(`aldaa garlaa: ${status}`);
      }
    });
  }, []);

  return (
    <>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Ангилалгүй</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </>
  );
}
