import "./categories.css";
import Form from "react-bootstrap/Form";
import { useSearchParams } from "react-router-dom";
import CategoriesEdit from "../categoriesEdit/CategoriesEdit";
import CategoriesList from "../categoriesList/CategoriesList";
import { useState, useEffect } from "react";
import axios from "axios";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineShareAlt } from "react-icons/ai";

function Categories() {
  const [searchParams, setSearchParams] = useSearchParams({});

  const [list, setList] = useState([]);

  function loadCategories() {
    axios.get("http://localhost:4000/categories").then((res) => {
      const { data, status } = res;

      if (status === 200) {
        setList(data);
      } else {
        alert(`aldaa garlaa: ${status}`);
      }
    });
  }

  useEffect(() => {
    loadCategories();
  }, []);

  function closeModal() {
    setSearchParams({});
  }
  const editing = searchParams.get("editing");
  return (
    <div className="categories">
      <div className="categoriesTitle">
        <h3> Ангилал</h3>
        <Form>
          <Form.Control type="email" placeholder="Ангилал хайх" />
        </Form>
      </div>
      <div className="categoriesPageTop">
        <div className="categoriesLeftSide">
          <CategoriesList list={list} onChange={loadCategories} />
        </div>
        <div className="categoriesRightSide">
          <h6>Тохиргоо</h6>
          <div className="categoriesButtons">
            <button
              className="categoriesButtonGreen"
              onClick={() => setSearchParams({ editing: "new" })}
            >
              <IoMdAddCircleOutline />
              Ангилал нэмэх
            </button>
            <button className="categoriesButtonBlue">
              <AiOutlineShareAlt />
              Дэд ангилал нэмэх
            </button>
          </div>
        </div>
      </div>
      <CategoriesEdit onClose={closeModal} show={editing} editingId={editing} />
    </div>
  );
}

export default Categories;
