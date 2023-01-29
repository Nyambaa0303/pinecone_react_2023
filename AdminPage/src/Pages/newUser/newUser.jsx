import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Gee" />
        </div>
        <div className="newUserItem">
          <label>Fullname</label>
          <input type="text" placeholder="BigGee" />
        </div>
      </form>
    </div>
  );
}
