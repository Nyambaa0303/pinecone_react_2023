import "./clientTopBar.css";
import PersonIcon from "@mui/icons-material/Person";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function ClientTopBar({ query, setQuery }) {
  return (
    <div className="topBarClient">
      <div className="topBarLeft">
        <span className="logo">Nyamooo.mn</span>
      </div>
      <div className="topBarCenter">
        <input
          type="text"
          className="clientTopBarInput"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="topBarRight">
        <span className="clientTopBarIcon">
          <PersonIcon />
        </span>
        <span className="topBarSignInTitle">Sign in</span>
        <FavoriteBorderIcon />
        <AddShoppingCartIcon />
      </div>
    </div>
  );
}
