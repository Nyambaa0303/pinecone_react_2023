import "./categoriesList.css";
import { useSearchParams } from "react-router-dom";

import { BsFillPenFill } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import axios from "axios";

function CategoriesList({ list, onChange, searchedQuery }) {
  if (list.length === 0) {
    return <div>Ийм ангилал олдсонгүй...</div>;
  }
  return (
    <>
      {list.map((item) => (
        <ListItem
          onChange={onChange}
          key={item.id}
          category={item}
          searchedQuery={searchedQuery}
        />
      ))}
    </>
  );
}

export default CategoriesList;

function ListItem({ category, onChange, searchedQuery }) {
  const [searchParams, setSearchParams] = useSearchParams({});

  function handleDelete() {
    if (window.confirm("Are you delete?")) {
      axios
        .delete(`http://localhost:4000/categories/${category.id}`)
        .then((res) => {
          console.log(res);
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
        <span
          className="btnEdit"
          onClick={() => setSearchParams({ editing: category.id })}
        >
          <BsFillPenFill />
        </span>
        <span className="btnDelete" key={category.id} onClick={handleDelete}>
          <FiTrash />
        </span>
      </div>
    </div>
  );
}
