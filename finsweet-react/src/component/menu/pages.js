import Dropdown from "react-bootstrap/Dropdown";

const PageDowns = [
  {
    title: "Pages",
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

export function PageDropdown() {
  return PageDowns.map((PageDown, index) => {
    return (
      <Dropdown>
        <Dropdown.Toggle className="homeDrop">{PageDown.title}</Dropdown.Toggle>

        <Dropdown.Menu key={23}>
          {PageDown.childrens.map((item) => {
            return <Dropdown.Item href="#/action">{item.title}</Dropdown.Item>;
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  });
}
