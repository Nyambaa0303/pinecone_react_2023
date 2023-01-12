import Button from "react-bootstrap/Button";
const list = [
  { id: 1, name: "Улс төр" },
  { id: 14, name: "Нийгэм" },
  { id: 12, name: "Спорт" },
];

export function AdminList() {
  return (
    <div className="">
      {list.map((card) => (
        <div
          key={card.id}
          className="row border rounded-3 p-4 mt-5 col-6 mx-auto  d-flex justify-content-between align-items-center"
        >
          <b className="col-none-12 col-lg-6">{card.name}</b>
          <div className="d-flex gap-1 col-none-12 col-lg-6 justify-content-center">
            <Button variant="outline-secondary">Засах</Button>
            <Button variant="outline-primary">Хийсэн</Button>
            <Button variant="white" className="btn btn-outline-danger">
              Устгах
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
