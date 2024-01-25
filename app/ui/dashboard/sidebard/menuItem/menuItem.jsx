"use client";
import Link from "next/link";
import styles from "./menuItem.module.css";
import { usePathname } from "next/navigation";
const MenuItem = ({ item }) => {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      className={`${styles.container}  ${
        pathname === item.path && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuItem;
