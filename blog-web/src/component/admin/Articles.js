import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CategoriesSelector } from "./CategoriesSelector";
import { useArticles } from "../useHooksWeb/useArticles";

const size = 50;

export function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pages, setPages] = useState();
  const [categoryId, setCategoryId] = useState("");
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const { list, count } = useArticles(page, size, "", categoryId);
  console.log(list);
  useEffect(() => {
    if (count) {
      setPages(Math.ceil(count / size));
    }
  }, [count]);

  useEffect(() => {
    setSearchParams({ page: 1 });
  }, [categoryId]);

  return (
    <>
      <Link to="/admin/articles/new" className="btn btn-primary">
        Шинэ мэдээ
      </Link>

      <CategoriesSelector
        value={categoryId}
        onChange={(val) => setCategoryId(val)}
      />

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Гарчиг</th>
            <th>Ангилал</th>
          </tr>
        </thead>
        <tbody>
          {list.map((article) => (
            <tr key={article.id}>
              <td>{article.title}</td>
              <td>{article.categoryName}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav aria-label="Page navigation example">
        <ul className="pagination" style={{ flexWrap: "wrap" }}>
          {page !== 1 && (
            <li className="page-item">
              <Link to={`?page=${page - 1}`} className="page-link">
                Өмнөх
              </Link>
            </li>
          )}

          {[...Array(pages)].map((_, index) => (
            <li
              key={index}
              className={`page-item ${page == index + 1 ? "active" : ""}`}
            >
              <Link to={`?page=${index + 1}`} className="page-link">
                {index + 1}
              </Link>
            </li>
          ))}

          {page !== pages && (
            <li className="page-item">
              <Link to={`?page=${page + 1}`} className="page-link">
                Дараах
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
