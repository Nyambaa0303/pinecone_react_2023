import "./clientTopBar.css";
import PersonIcon from "@mui/icons-material/Person";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ClientSideBar from "../sidebar/ClientSideBar";

export default function ClientTopBar({ query, setQuery }) {
  return (
    <div className="clientTopBar">
      <div className="clientTopSide">
        <div className="clientTopSideLeft">
          <span className="clientTopSideLeftTitle">
            Хүссэн бараагаа Nyamooo.mn-с аваарай...
          </span>
        </div>
        <div className="clientTopSideRight">
          <LocalPhoneIcon />
          <span> 91000701 </span>
          <span> | </span>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <span> | </span>
          <span>Манайхаар үйлчлүүлсэн танд баярлалаа</span>
        </div>
      </div>
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
          <button className="clientTopBarButton">Search</button>
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
      <ClientSideBar />
    </div>
  );
}
