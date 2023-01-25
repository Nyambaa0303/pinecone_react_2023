import React from "react";
import { useEffect, useState } from "react";

export function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((req) => req.json())
      .then((data) => setList(data.products));
  }, []);
  return (
    <div>
      {list.map((item, index) => (
        <div className="">
          <img src={item.thumbnail} />
          <h5>{item.title}</h5>
        </div>
      ))}
    </div>
  );
}
