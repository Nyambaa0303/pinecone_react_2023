import "./categories.css";

import { useSearchParams } from "react-router-dom";

function Categories() {
  const [searchParams, setSearchParams] = useSearchParams({});

  function closeModal() {
    setSearchParams({});
  }
  return (
    <div className="categories">
      <div className="categoriesTitle">
        <h3> Ангилал</h3>
      </div>
      <div className="categoriesPageTop">
        <div className="categoriesLeftSide">left side</div>
        <div className="categoriesRightSide">
          <h6>Тохиргоо</h6>
          <div className="categoriesButtons">
            <button onClick={() => setSearchParams({ editing: "new" })}>
              Ангилал нэмэх
            </button>
            <button>Дэд ангилал нэмэх</button>
            <button>Нэр солих</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
