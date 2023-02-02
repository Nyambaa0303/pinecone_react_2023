import "./clientSideBar.css";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function ClientSideBar() {
  return (
    <div className="clientSideBar">
      <div className="clientSideBarLeft">
        <Link to="/home" className="clientLink">
          <span className="clientSideBarLeftTitle">Home</span>
        </Link>
        <Dropdown>
          <Dropdown.Toggle className="DropDown">Categoties</Dropdown.Toggle>
          <Dropdown.Menu className="dropDownMenu">
            <Dropdown.Item className="dropDownItem" href="#/action-1">
              Apple
            </Dropdown.Item>
            <Dropdown.Item className="dropDownItem" href="#/action-2">
              Samsung
            </Dropdown.Item>
            <Dropdown.Item className="dropDownItem" href="#/action-3">
              Redmi
            </Dropdown.Item>
            <Dropdown.Item className="dropDownItem" href="#/action-1">
              Dell
            </Dropdown.Item>
            <Dropdown.Item className="dropDownItem" href="#/action-2">
              Huawei
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <span className="clientSideBarLeftTitle">Shops</span>
        <span className="clientSideBarLeftTitle">Contact US</span>
        <span className="clientSideBarLeftTitle">About</span>
      </div>
    </div>
  );
}
