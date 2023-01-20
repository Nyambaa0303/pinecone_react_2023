import { Link, Route, Routes, useParams } from "react-router-dom";
import { Header } from "./Header";

export function ClientApp() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/home" element={<div>wellcome to client home page</div>} />
        <Route
          path="/categories"
          element={<div>wellcome categories client page</div>}
        />
        <Route
          path="/contact"
          element={<div>wellcome contact client page</div>}
        />
        <Route path="/about/:slug" element={<SingleBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function SingleBlog() {
  const { slug } = useParams();

  return <div>Single Blog component : {slug}</div>;
}

function NotFound() {
  return <div>Not Found</div>;
}
