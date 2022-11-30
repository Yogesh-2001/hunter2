import {
  FaHome,
  FaBuilding,
  FaSignOutAlt,
  FaListOl,
  FaClipboardList,
  FaBook,
  FaUserCircle,
  FaUserCheck,
} from "react-icons/fa";

const SideBarPageList = [
  {
    path: "/admin/DashBoard",
    name: "DashBoard",
    icon: <FaHome />,
  },
  {
    path: "/admin/ListOfUsers",
    name: "List Of Users",
    icon: <FaListOl />,
  },
  {
    path: "/admin/AppliedStudent",
    name: "Applied Student",
    icon: <FaClipboardList />,
  },
  {
    path: "/admin/PlacedStudent",
    name: "Placed Student",
    icon: <FaUserCheck />,
  },
  {
    path: "/admin/notice",
    name: "Add Notice",
    icon: <FaBook />,
  },
  {
    path: "/admin/CreateDrive",
    name: "Create Drive",
    icon: <FaBuilding />,
  },
  {
    path: "/admin/Profile",
    name: "My Profile",
    icon: <FaUserCircle />,
  },
  {
    path: "/admin/LogOut",
    name: "LogOut",
    icon: <FaSignOutAlt />,
  },
];

export default SideBarPageList;
