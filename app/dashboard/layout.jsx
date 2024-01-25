"use client";
import Navbar from "../ui/dashboard/navbar/Navbar";
import Sidebar from "../ui/dashboard/sidebard/Sidebar";
import styles from "../ui/dashboard/dashboard.module.css";
import { useState } from "react";
const layout = ({ children }) => {
  const [isCollapse, setIsCollapse] = useState(false);
  console.log(isCollapse);
  return (
    <div className={styles.container}>
      <div
        className={`${styles.menu} ${isCollapse ? styles.menuActive : null}`}
      >
        <Sidebar setIsCollapse={setIsCollapse} isCollapse={isCollapse} />
      </div>
      <div className={styles.content}>
        <Navbar setIsCollapse={setIsCollapse} isCollapse={isCollapse} />
        {children}
      </div>
    </div>
  );
};

export default layout;
