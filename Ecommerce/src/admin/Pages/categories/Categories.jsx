import "./categories.css";
import Form from "react-bootstrap/Form";
import { useSearchParams } from "react-router-dom";
import CategoriesEdit from "../categoriesEdit/CategoriesEdit";
import CategoriesList from "../categoriesList/CategoriesList";
import { useState, useEffect } from "react";
import axios from "axios";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineShareAlt } from "react-icons/ai";
import { useDebounce } from "use-debounce";
// import useCategories from "../../useHooks/useCategories";

// axios.interceptors.request.use((config) => {
//   console.log("Request sent to: ", config.url);
//   return config;
// });

function Categories() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [query, setQuery] = useState("");
  const [searchedQuery] = useDebounce(query, 1000);
  // const categories = useCategories();

  const [list, setList] = useState([]);

  function loadCategories(query = "") {
    axios.get(`http://localhost:4000/categories?q=${query}`).then((res) => {
      const { data, status } = res;

      if (status === 200) {
        setList(data);
        setQuery(query);
      } else {
        alert(`aldaa garlaa: ${status}`);
      }
    });
  }

  useEffect(() => {
    loadCategories(searchedQuery);
    console.log("sfsd");
  }, [searchedQuery]);

  function closeModal() {
    setSearchParams({});
  }
  const editing = searchParams.get("editing");
  return (
    <div className="categories">
      <div className="categoriesTitle">
        <h3> Ангилал</h3>
        <Form>
          <Form.Control
            type="email"
            placeholder="Ангилал хайх"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form>
      </div>
      <div className="categoriesPageTop">
        <div className="categoriesLeftSide">
          <CategoriesList
            list={list}
            onChange={loadCategories}
            searchedQuery={searchedQuery}
          />
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
      <CategoriesEdit
        onClose={closeModal}
        show={editing}
        editingId={editing}
        onComplete={loadCategories}
      />
    </div>
  );
}

export default Categories;
