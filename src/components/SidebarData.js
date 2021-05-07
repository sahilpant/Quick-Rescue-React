import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
import * as RiIcons from "react-icons/ri";
  
export const SidebarData = [
  {
    title: "About Us",
    path: "/about-us",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Doctor",
    path: "/doctor",
    icon: <FaIcons.FaUserMd />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Add Doctor",
        path: "/doctor/addDoc",
        cName: "sub-nav",
      },
      {
        title: "List Doctor",
        path: "/doctor/listDoc",
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Patient",
    path: "/patient",
    icon: <FaIcons.FaUserAlt />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Add Patient",
        path: "/patient/addPatient",
        cName: "sub-nav",
      },
      {
        title: "List Patient",
        path: "/patient/listPatient",
        cName: "sub-nav",
      },
    ],
    
  },
  {
    title: "Department",
    path: "/department",
    icon: <FcIcons.FcDepartment />,
  },
  
  {
      title: "BedManager",
      path: "/bedManager",
      icon: <FaIcons.FaBed />,
  },
  {
    title: "Payment",
    path: "/payment",
    icon: <RiIcons.RiSecurePaymentLine />,
},
  {
    title: "Report",
    path: "/report",
    icon: <AiIcons.AiFillFileText />,
  },
];