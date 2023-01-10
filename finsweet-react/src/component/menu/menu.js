import { BrowseCategoriesDropdown } from "./browseCategoriesDropdown.js";
import { HomeDropdown } from "./homeDropdown";
import { CatalogDropdown } from "./catalogiDropdown";
import { PageDropdown } from "./pages";
import "../style/menu.css";

export function Menu() {
  return (
    <>
      <div className="menuBody">
        <div className="menu">
          <BrowseCategoriesDropdown />
          <div className=" menuDrop d-flex">
            <HomeDropdown />
            <CatalogDropdown />
            <a className="homeDrop" href="">
              Blog
            </a>
            <PageDropdown />
            <a className="homeDrop" href="">
              About Us
            </a>
          </div>
          <p className="text">30 Days Free Return</p>
        </div>
      </div>
    </>
  );
}
