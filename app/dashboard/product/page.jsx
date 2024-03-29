import React from "react";
import styles from "@/app/ui/dashboard/product/product.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
const Product = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Product" />

        <Link href="/dashboard/product/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/user-F.svg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                iPhone
              </div>
            </td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
            <td>₹ 2024</td>
            <td>oct 2 2024</td>
            <td>24</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
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

export default Product;
