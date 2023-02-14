import "./categories.css";
import Form from "react-bootstrap/Form";
import { useSearchParams } from "react-router-dom";
import CategoriesEdit from "../categoriesEdit/CategoriesEdit";
import CategoriesList from "../categoriesList/CategoriesList";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineShareAlt } from "react-icons/ai";
import useCategories from "../../useHooks/useCategories";

// axios.interceptors.request.use((config) => {
//   console.log("Request sent to: ", config.url);
//   return config;
// });

function Categories() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const { setQuery, query } = useCategories();

  console.log(query);

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
          <CategoriesList />
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
