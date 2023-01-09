import Dropdown from "react-bootstrap/Dropdown";

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
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {DropDownMenu.title}
        </Dropdown.Toggle>

        <Dropdown.Menu key={23}>
          {DropDownMenu.childrens.map((item) => {
            return <Dropdown.Item href="#/action">{item.title}</Dropdown.Item>;
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  });
}
