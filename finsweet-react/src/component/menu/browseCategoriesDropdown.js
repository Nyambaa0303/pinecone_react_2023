import Dropdown from "react-bootstrap/Dropdown";
import { SlArrowDown } from "react-icons/sl";

const DropDownMenus = [
  {
    title: "Browse Categories",
    id: "neg",
    key: 23,
    childrens: [
      {
        title: "Camera",
        id: "hoyor",
        key: 12,
        children: { title: "Camera" },
      },
      {
        title: "Phone",
        id: "gurav",
        key: 14,
        children: { title: "Phone" },
      },
      {
        title: "Laptop",
        id: "dorov",
        key: 19,
        children: { title: "Laptop" },
      },
    ],
  },
];

export function BrowseCategoriesDropdown() {
  return DropDownMenus.map((DropDownMenu, index) => {
    return (
      <Dropdown className="browseDropDown">
        <Dropdown.Toggle className="browseDropDownText">
          {DropDownMenu.title}
          {/* <SlArrowDown /> */}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {DropDownMenu.childrens.map((item) => {
            return <Dropdown.Item href="">{item.title}</Dropdown.Item>;
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  });
}
