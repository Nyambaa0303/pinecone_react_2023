import { Link, Route, Routes, useParams } from "react-router-dom";
import { Contact } from "./Contact";
import { Header } from "./Header";
import { Home } from "./Home";

export function ClientApp() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<div>wellcome to client page</div>} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/categories"
          element={<div>wellcome categories client page</div>}
        />
        <Route path="/contact" element={<Contact />} />
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
