import React, {useState} from "react";
import{
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarContent,
    SidebarFooter
}from "react-pro-sidebar";

import { FaBed, FaUserAlt, FaUserMd } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { FcDepartment } from "react-icons/fc";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdSchedule } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { AiFillFileText } from "react-icons/ai";
import { BiCog } from "react-icons/bi";

import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";

const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "" : "Dashboard"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Home
              </MenuItem>
              <MenuItem icon={<FaUserMd />}>Doctor</MenuItem>
              <MenuItem icon={<FaUserAlt />}>Patient</MenuItem>
              <MenuItem icon={<FcDepartment />}>Department</MenuItem>
              <MenuItem icon={<MdSchedule />}>Appointment</MenuItem>
              <MenuItem icon={<RiSecurePaymentLine />}>Payment</MenuItem>
              <MenuItem icon={<AiFillFileText />}>Report</MenuItem>
              <MenuItem icon={<FaBed />}>Bed Manager</MenuItem>
              <MenuItem icon={<SiGooglemaps />}>Maps</MenuItem>
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;