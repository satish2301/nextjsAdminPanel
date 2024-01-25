import Image from "next/image";
import styles from "./transaction.module.css";
const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
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
                Satish
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td className={styles.date}>14.04.2024</td>
            <td className={styles.amount}>₹ 500</td>
          </tr>
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
                Satish
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td className={styles.date}>14.04.2024</td>
            <td className={styles.amount}>₹ 500</td>
          </tr>
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
                Satish
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.Cancelled}`}>
                Cancelled
              </span>
            </td>
            <td className={styles.date}>14.04.2024</td>
            <td className={styles.amount}>₹ 500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
