import { BrowseCategoriesDropdown } from "./browseCategoriesDropdown.js";
import { HomeDropdown } from "./homeDropdown";
import { CatalogDropdown } from "./catalogiDropdown";
import { PageDropdown } from "./pages";

export function Menu() {
  return (
    <>
      <BrowseCategoriesDropdown />
      <HomeDropdown />
      <CatalogDropdown />
      <a href="">Blog</a>
      <PageDropdown />
      <a href="">About Us</a>
      <p>30 Days Free Return</p>
    </>
  );
}
