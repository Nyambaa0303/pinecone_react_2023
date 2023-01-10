import Dropdown from "react-bootstrap/Dropdown";
import { SlArrowDown } from "react-icons/sl";

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
  return HomeDowns.map((Homedown, index) => {
    return (
      <Dropdown>
        <Dropdown.Toggle className="homeDrop">
          {Homedown.title}
          <SlArrowDown className="mx-2" />
        </Dropdown.Toggle>

        <Dropdown.Menu className="bg-light">
          {Homedown.childrens.map((item) => {
            return <Dropdown.Item href="#/action">{item.title}</Dropdown.Item>;
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  });
}
