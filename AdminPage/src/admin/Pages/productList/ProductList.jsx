import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../../../dummyData";

import { useState } from "react";
import { Link } from "react-router-dom";
// import axios, { isCancel, AxiosError } from "axios";

export default function ProductList() {
  const [data, setData] = useState(productRows);
  // const [products, setProducts] = useState([]);

  const handDelete = (id) => {
    setData(data.filter((item) => item.id !== id));

    // function fetchData() {
    //   axios.get("http://localhost:4000").then((response) => {
    //     const { data, status } = response;
    //     if (status === 200) {
    //       setProducts(data.reverse());
    //     } else {
    //       alert(`aldaa garlaaa: ${status}`);
    //     }
    //   });
    // }

    // useEffect(() => {
    //   fetchData();
    // }, []);

    const columns = [
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "product",
        headerName: "Product",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="productListItem">
              <img className="productListImg" src={params.row.img} alt="" />
              {params.row.name}
            </div>
          );
        },
      },
      { field: "stock", headerName: "Stock", width: 200 },
      {
        field: "status",
        headerName: "Status",
        width: 120,
      },
      {
        field: "price",
        headerName: "Price",
        width: 160,
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={"/admin/products/"}>
                <button className="productListEdit">Edit</button>
              </Link>
              <DeleteOutlineIcon
                className="productListDelete"
                onClick={() => handDelete(params.row.id)}
              />
            </>
          );
        },
      },
    ];
    return (
      <div className="productList">
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    );
  };
}
