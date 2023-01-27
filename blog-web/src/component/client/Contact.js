import React from "react";
import { useEffect, useState } from "react";
import axios, { isCancel, AxiosError } from "axios";

export function Contact() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:6000/").then((response) => {
      const { data, status } = response;

      if (status === 200) {
        setList(data);
      } else {
        alert(`Aldaa garlaa: ${status} `);
      }
    });
  }, []);
  return (
    <div>
      {list.map((item) => (
        <div>
          {/* <img src={item.thumbnail} /> */}
          {item.name} {":"}
          {item.age}
        </div>
      ))}
    </div>
  );
}
