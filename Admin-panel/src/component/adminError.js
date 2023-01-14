import { MdError } from "react-icons/md";

export function AdminError({ error }) {
  if (!error) return null;

  return (
    <div>
      {error && (
        <div className="" style={{ color: "red" }}>
          <MdError style={{ fontSize: "20px" }} className="mx-2" />
          Error: {error}
        </div>
      )}
    </div>
  );
}
