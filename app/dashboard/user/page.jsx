import React from "react";
import styles from "@/app/ui/dashboard/user/user.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
const User = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="User" />

        <Link href="/dashboard/user/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/user-F.svg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Satish Chandra
              </div>
            </td>
            <td>satish@mail.com</td>
            <td>13.09.2024</td>
            <td>Administrator</td>
            <td>active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/user/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default User;
