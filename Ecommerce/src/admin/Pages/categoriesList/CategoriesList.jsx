import "./categoriesList.css";

import { BsFillPenFill } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import axios from "axios";

function CategoriesList({ list, onChange }) {
  return (
    <>
      {list.map((item) => (
        <ListItem onChange={onChange} key={item.id} category={item} />
      ))}
    </>
  );
}

export default CategoriesList;

function ListItem({ category, onChange }) {
  function handleDelete() {
    if (window.confirm("Are you delete?")) {
      axios
        .delete(`http://localhost:4000/categories/${category.id}`)
        .then((res) => {
          const { status } = res;
          if (status === 200) {
            onChange();
          }
        });
    }
  }
  return (
    <div className="listItem">
      <div className="listItemTitle">{category.name}</div>
      <div className="listItemButtons">
        <span className="btnEdit">
          <BsFillPenFill />
        </span>
        <span className="btnDelete" key={category.id} onClick={handleDelete}>
          <FiTrash />
        </span>
      </div>
    </div>
  );
}
