import Dropdown from "react-bootstrap/Dropdown";

const HomeDowns = [
  {
    title: "Home",
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

export function HomeDropdown() {
  return HomeDowns.map((HomeDropdown, index) => {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {HomeDropdown.title}
        </Dropdown.Toggle>

        <Dropdown.Menu key={23}>
          {HomeDropdown.childrens.map((item) => {
            return <Dropdown.Item href="#/action">{item.title}</Dropdown.Item>;
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  });
}
