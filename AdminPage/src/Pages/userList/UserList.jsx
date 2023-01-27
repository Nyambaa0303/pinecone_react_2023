import "./userList.css";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { width } from "@mui/system";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function UserList() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "E-mail", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button className="userListEdit">Edit</button>
            <DeleteOutlineIcon className="userListDelete" />
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      username: "John Snow",
      avatar: "https://i.ytimg.com/vi/EovZhep-xes/maxresdefault.jpg",
      status: "active",
      transaction: "$12,345",
      email: "Jhon@gamil.com",
    },
    {
      id: 2,
      username: "John Snow",
      avatar: "https://i.ytimg.com/vi/EovZhep-xes/maxresdefault.jpg",
      status: "active",
      transaction: "$12,345",
      email: "Jhon@gamil.com",
    },
    {
      id: 3,
      username: "John Snow",
      avatar: "https://i.ytimg.com/vi/EovZhep-xes/maxresdefault.jpg",
      status: "active",
      transaction: "$12,345",
      email: "Jhon@gamil.com",
    },
    {
      id: 4,
      username: "John Snow",
      avatar: "https://i.ytimg.com/vi/EovZhep-xes/maxresdefault.jpg",
      status: "active",
      transaction: "$12,345",
      email: "Jhon@gamil.com",
    },
    {
      id: 5,
      username: "John Snow",
      avatar: "https://i.ytimg.com/vi/EovZhep-xes/maxresdefault.jpg",
      status: "active",
      transaction: "$12,345",
      email: "Jhon@gamil.com",
    },

    {
      id: 6,
      username: "John Snow",
      avatar: "https://i.ytimg.com/vi/EovZhep-xes/maxresdefault.jpg",
      status: "active",
      transaction: "$12,345",
      email: "Jhon@gamil.com",
    },
    {
      id: 7,
      username: "John Snow",
      avatar: "https://i.ytimg.com/vi/EovZhep-xes/maxresdefault.jpg",
      status: "active",
      transaction: "$12,345",
      email: "Jhon@gamil.com",
    },
  ];

  return (
    <div className="userList">
      {" "}
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
