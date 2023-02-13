import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams({});

  function fetchData() {
    axios.get("http://localhost:4000").then((response) => {
      const { data, status } = response;
      if (status === 200) {
        setProducts(data);
      } else {
        alert(`aldaa garlaaa: ${status}`);
      }
    });
  }

  function handleDelete(id) {
    if (window.confirm("Are you delete?")) {
      axios.delete(`http://localhost:4000/${id}`).then((response) => {
        fetchData();
      });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      field: "product",
      headerName: "Бараа бүтээгдэхүүн",
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
    { field: "stock", headerName: "Үлдэгдэл", width: 200 },
    {
      field: "status",
      headerName: "Төлөв",
      width: 120,
    },
    {
      field: "price",
      headerName: "Үнэ",
      width: 160,
    },
    {
      field: "action",
      headerName: "Үйлдэл",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/products/" + params.row.id}>
              <button
                className="productListEdit"
                // onClick={() => {
                //   //usenavigat
                //   navigate("/admin/products/" + params.row.id);
                //   setSearchParams({ id: params.row.id });
                // }}
              >
                Засах
              </button>
            </Link>

            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
              type="button"
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
