import Button from "react-bootstrap/Button";
const list = [
  { id: 1, name: "Улс төр" },
  { id: 14, name: "Нийгэм" },
  { id: 12, name: "Спорт" },
];

export function List() {
  return (
    <div className="">
      {list.map((card) => (
        <div
          key={card.id}
          className=" border rounded-3 p-4 mt-5 col-6 mx-auto d-flex justify-content-between align-items-center"
        >
          <b>{card.name}</b>
          <Button variant="light">Засах</Button>
        </div>
      ))}
    </div>
  );
}