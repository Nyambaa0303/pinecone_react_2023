import Button from "react-bootstrap/Button";
import { AdminListItem } from "./adminListItem";

import { AdminNew } from "./adminNew";
import axios, { isCancel, AxiosError } from "axios";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Admins() {
  const [admins, setAdmins] = useState([]);
  // const [editing, setEditing] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams({});
  function fetchData() {
    axios.get("http://localhost:4000").then((response) => {
      const { data, status } = response;
      if (status === 200) {
        setAdmins(data.reverse());
      } else {
        alert(`aldaa garlaaa: ${status}`);
      }
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function closeModal() {
    setSearchParams({});
  }

  const editing = searchParams.get("editing") === "new";

  function handleSave() {
    fetchData();
  }

  function handleUpdate(index, text) {
    const newAdmins = [...admins];
    newAdmins[index].text = text;
    setAdmins(newAdmins);
  }

  return (
    <>
      <div className="col-6 mx-auto mt-5 d-flex justify-content-between">
        <h2>Ангилал</h2>
        <Button
          variant="outline-primary"
          onClick={() => setSearchParams({ editing: "new" })}
        >
          Шинэ
        </Button>
      </div>

      <AdminNew onSave={handleSave} show={editing} onClose={closeModal} />
      {admins.map((admin, index) => (
        <div
          key={admin.id}
          className="row border rounded-3 p-4 mt-5 col-6 mx-auto  d-flex justify-content-between align-items-center"
        >
          <AdminListItem
            admin={admin}
            key={admin.id}
            onUpdate={(text) => handleUpdate(index, text)}
            fetchData={fetchData}
          />
        </div>
      ))}
    </>
  );
}
export default Admins;
