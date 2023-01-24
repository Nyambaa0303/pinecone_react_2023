import React from "react";
import { useEffect, useState } from "react";

export function Contact() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((req) => req.json())
      .then((data) => setList(data.products));
  }, []);
  return (
    <div>
      {list.map((item, index) => (
        <div>
          <img src={item.thumbnail} />
          {item.title}
        </div>
      ))}
    </div>
  );
}
