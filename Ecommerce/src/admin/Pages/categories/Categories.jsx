import "./categories.css";
import Form from "react-bootstrap/Form";
import { useSearchParams } from "react-router-dom";
import CategoriesEdit from "../categoriesEdit/CategoriesEdit";

function Categories() {
  const [searchParams, setSearchParams] = useSearchParams({});

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
        <div className="categoriesLeftSide"></div>
        <div className="categoriesRightSide">
          <h6>Тохиргоо</h6>
          <div className="categoriesButtons">
            <button
              className="categoriesButtonGreen"
              onClick={() => setSearchParams({ editing: "new" })}
            >
              Ангилал нэмэх
            </button>
            <button>Дэд ангилал нэмэх</button>
            <button>Нэр солих</button>
          </div>
        </div>
      </div>
      <CategoriesEdit onClose={closeModal} show={editing} />
    </div>
  );
}

export default Categories;
