import "./clientSideBar.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";

export default function ClientSideBar() {
  return (
    <div className="clientSideBar">
      <ProSidebarProvider>
        <Sidebar>
          <Menu>
            <SubMenu label="Categories">
              <MenuItem> Apple </MenuItem>
              <MenuItem> Samsung </MenuItem>
              <MenuItem> Redmi </MenuItem>
              <MenuItem> Dell </MenuItem>
              <MenuItem> Huwai </MenuItem>
            </SubMenu>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
          </Menu>
        </Sidebar>
      </ProSidebarProvider>
    </div>
  );
}
