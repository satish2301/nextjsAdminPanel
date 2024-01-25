"use client";
import {
  MdDashboard,
  MdSupervisorAccount,
  MdShoppingBag,
  MdAttachMoney,
  MdBarChart,
  MdSettingsSuggest,
  MdClose,
} from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { SiRevealdotjs } from "react-icons/si";
import { FaHireAHelper } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import MenuItem from "./menuItem/menuItem";
import styles from "./sidebar.module.css";
import Image from "next/image";
const Sidebar = ({ setIsCollapse, isCollapse }) => {
  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/user",
          icon: <MdSupervisorAccount />,
        },
        {
          title: "Products",
          path: "/dashboard/product",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transaction",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/analytics/revenue",
          icon: <SiRevealdotjs />,
        },
        {
          title: "Reports",
          path: "/analytics/reports",
          icon: <MdBarChart />,
        },
        {
          title: "Team",
          path: "/analytics/teams",
          icon: <FaUsers />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/user/setting",
          icon: <MdSettingsSuggest />,
        },
        {
          title: "Help",
          path: "/user/help",
          icon: <FaHireAHelper />,
        },
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          src="/user-F.svg"
          alt=""
          width="50"
          height="50"
          className={styles.userImage}
        />
        <div className={styles.userDetail}>
          <span className={styles.userName}>Satish Chandra</span>
          <span className={styles.userTitle}>Engineer</span>
        </div>
        <div className={styles.hamburIcon}>
          <MdClose size={20} onClick={() => setIsCollapse(!isCollapse)} />
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat, index) => (
          <li key={cat.title}>
            <span>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuItem item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <IoLogOut />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
